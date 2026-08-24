"use client";

import Link from "next/link";
import { track } from "@/components/analytics-client";
import { ExternalLink } from "@/components/ExternalLink";
import { copy, project } from "@/lib/project-data";
import { siteConfig } from "@/lib/site-config";

export function Footer() {
  const year = new Date().getFullYear();
  const phoneHref = siteConfig.publisherPhone.startsWith("[")
    ? undefined
    : `tel:${siteConfig.publisherPhone.replace(/[^\d+]/g, "")}`;
  const emailHref = siteConfig.publisherEmail.startsWith("[")
    ? undefined
    : `mailto:${siteConfig.publisherEmail}`;

  return (
    <footer className="border-t border-stone bg-[#ebe4d8]">
      <div className="mx-auto max-w-6xl px-5 py-14 sm:px-6 lg:px-8">
        <div className="grid gap-10 md:grid-cols-3">
          <div>
            <p className="font-display text-xl text-ink">
              {project.name} informational site
            </p>
            <p className="mt-3 text-sm leading-6 text-ink-muted">
              Independent project information for {project.name} in{" "}
              {project.municipality}. Developer: {project.developer}.
            </p>
          </div>
          <div>
            <h2 className="text-sm font-semibold tracking-wide text-ink">
              Publisher
            </h2>
            <ul className="mt-3 space-y-2 text-sm leading-6 text-ink">
              <li>{siteConfig.publisherLegalName}</li>
              <li>{siteConfig.brokerageLegalName}, Brokerage</li>
              <li>{siteConfig.recoAgentName}</li>
              <li>{siteConfig.agentDesignation}</li>
              <li>{siteConfig.publisherAddress}</li>
              <li>
                {phoneHref ? (
                  <a
                    href={phoneHref}
                    className="underline underline-offset-2"
                    onClick={() => track("phone_click", { placement: "footer" })}
                  >
                    {siteConfig.publisherPhone}
                  </a>
                ) : (
                  siteConfig.publisherPhone
                )}
              </li>
              <li>
                {emailHref ? (
                  <a
                    href={emailHref}
                    className="underline underline-offset-2"
                    onClick={() => track("email_click", { placement: "footer" })}
                  >
                    {siteConfig.publisherEmail}
                  </a>
                ) : (
                  siteConfig.publisherEmail
                )}
              </li>
            </ul>
          </div>
          <div>
            <h2 className="text-sm font-semibold tracking-wide text-ink">Site</h2>
            <ul className="mt-3 space-y-2 text-sm leading-6 text-ink">
              <li>
                <Link className="underline underline-offset-2" href="/privacy">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link className="underline underline-offset-2" href="/disclaimer">
                  Terms / Disclaimer
                </Link>
              </li>
              <li>
                <ExternalLink href={project.officialProjectUrl}>
                  Official Five Oaks page
                </ExternalLink>
              </li>
            </ul>
            <p className="mt-4 text-xs leading-5 text-ink-muted">
              Domain: {siteConfig.domainDisplay}
            </p>
          </div>
        </div>
        <div className="mt-10 border-t border-stone pt-8">
          <p className="max-w-4xl text-sm leading-6 text-ink">
            {copy.legalFooterDisclosure}
          </p>
          <p className="mt-3 max-w-4xl text-xs leading-5 text-ink-muted">
            {copy.legalReviewFlag}
          </p>
          <p className="mt-6 text-sm text-ink-muted">
            © {year} {siteConfig.publisherLegalName}. This website is not operated
            by {project.developer}.
          </p>
        </div>
      </div>
    </footer>
  );
}
