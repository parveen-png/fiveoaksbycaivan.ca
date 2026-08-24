import { mkdir, appendFile } from "node:fs/promises";
import path from "node:path";
import { acknowledgementEmail, internalLeadEmail } from "@/lib/emails";
import { serverEnv } from "@/lib/env";
import { logger } from "@/lib/logger";
import { rememberIdempotency } from "@/lib/rate-limit";
import { siteConfig } from "@/lib/site-config";
import type { CapturedLead, LeadDeliveryResult } from "@/lib/leads-types";
import type { LeadInput } from "@/lib/validation";
import { CONSENT_TEXT_VERSION } from "@/lib/project-data";

export type { CapturedLead, LeadDeliveryResult } from "@/lib/leads-types";

function destinationLabel(): string {
  if (serverEnv.leadWebhookUrl) {
    return serverEnv.crmOrWebhookProvider || serverEnv.leadDestination || "webhook";
  }
  if (serverEnv.internalLeadEmail && serverEnv.emailProviderApiKey) {
    return serverEnv.acknowledgementEmailProvider || "email";
  }
  return "local-dev-file";
}

export function toCapturedLead(
  input: LeadInput,
  submissionId: string,
  submittedAt: string,
): CapturedLead {
  return {
    submissionId,
    submittedAt,
    firstName: input.firstName,
    lastName: input.lastName,
    email: input.email.toLowerCase(),
    phone: input.phone,
    productInterest: input.productInterest,
    buyerTiming: input.buyerTiming,
    marketingConsent: input.marketingConsent,
    consentTimestamp: input.marketingConsent ? submittedAt : "",
    attribution: {
      ...input.attribution,
      consentTextVersion: CONSENT_TEXT_VERSION,
      landingPageVariant:
        input.attribution.landingPageVariant || siteConfig.landingPageVariant,
    },
  };
}

async function deliverWebhook(lead: CapturedLead): Promise<void> {
  const url = serverEnv.leadWebhookUrl;
  if (!url) {
    throw new Error("Webhook URL missing");
  }
  const headers: Record<string, string> = {
    "Content-Type": "application/json",
    "X-Idempotency-Key": lead.submissionId,
  };
  if (serverEnv.leadWebhookSecret) {
    headers.Authorization = `Bearer ${serverEnv.leadWebhookSecret}`;
  }
  const response = await fetch(url, {
    method: "POST",
    headers,
    body: JSON.stringify({
      source: "five-oaks-oakville-landing",
      ...lead,
    }),
  });
  if (!response.ok) {
    throw new Error(`Webhook responded ${response.status}`);
  }
}

async function sendProviderEmail(options: {
  to: string;
  subject: string;
  text: string;
  html: string;
}): Promise<void> {
  if (!serverEnv.emailProviderApiKey || !serverEnv.fromEmail) {
    throw new Error("Email provider is not configured");
  }
  const fromName = serverEnv.fromName || siteConfig.publisherLegalName;
  const response = await fetch(serverEnv.emailProviderEndpoint, {
    method: "POST",
    headers: {
      Authorization: `Bearer ${serverEnv.emailProviderApiKey}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      from: `${fromName} <${serverEnv.fromEmail}>`,
      to: [options.to],
      subject: options.subject,
      text: options.text,
      html: options.html,
    }),
  });
  if (!response.ok) {
    throw new Error(`Email provider responded ${response.status}`);
  }
}

async function deliverLocalFile(lead: CapturedLead): Promise<void> {
  const directory = path.join(process.cwd(), ".data");
  await mkdir(directory, { recursive: true });
  await appendFile(
    path.join(directory, "leads.jsonl"),
    `${JSON.stringify(lead)}\n`,
    "utf8",
  );
}

export async function captureLead(
  input: LeadInput,
): Promise<LeadDeliveryResult> {
  const submittedAt = new Date().toISOString();
  const submissionId = input.idempotencyKey ?? crypto.randomUUID();
  const duplicateId = rememberIdempotency(
    input.idempotencyKey ?? `${input.email.toLowerCase()}:${input.productInterest}`,
    submissionId,
  );
  if (duplicateId) {
    return {
      captured: true,
      alreadyRecorded: true,
      submissionId: duplicateId,
      destination: destinationLabel(),
    };
  }

  const lead = toCapturedLead(input, submissionId, submittedAt);
  const destination = destinationLabel();

  try {
    if (serverEnv.leadWebhookUrl) {
      await deliverWebhook(lead);
    } else if (serverEnv.internalLeadEmail && serverEnv.emailProviderApiKey) {
      const internal = internalLeadEmail(lead);
      await sendProviderEmail({
        to: serverEnv.internalLeadEmail,
        ...internal,
      });
    } else if (!serverEnv.isProduction || serverEnv.allowLocalCapture) {
      await deliverLocalFile(lead);
    } else {
      throw new Error("No lead destination configured");
    }
  } catch (error) {
    logger.error("Lead delivery failed", {
      destination,
      submissionId,
      reason: error instanceof Error ? error.message : "unknown",
    });
    throw error;
  }

  if (serverEnv.emailProviderApiKey && serverEnv.fromEmail) {
    try {
      if (serverEnv.internalLeadEmail && serverEnv.leadWebhookUrl) {
        const internal = internalLeadEmail(lead);
        await sendProviderEmail({
          to: serverEnv.internalLeadEmail,
          ...internal,
        });
      }
      const acknowledgement = acknowledgementEmail(lead);
      await sendProviderEmail({
        to: lead.email,
        ...acknowledgement,
      });
    } catch (error) {
      logger.warn("Lead captured but email follow-up failed", {
        submissionId,
        reason: error instanceof Error ? error.message : "unknown",
      });
    }
  } else if (!serverEnv.isProduction) {
    logger.info("Lead captured locally; email providers are not configured", {
      submissionId,
      destination,
    });
  }

  return {
    captured: true,
    alreadyRecorded: false,
    submissionId,
    destination,
  };
}
