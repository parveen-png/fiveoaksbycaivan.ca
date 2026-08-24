import type { Metadata } from "next";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { Container } from "@/components/ui";
import { siteConfig } from "@/lib/site-config";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description:
    "Privacy information for the independent Five Oaks Oakville project-information website.",
  robots: siteConfig.noindex ? { index: false, follow: false } : undefined,
};

export default function PrivacyPage() {
  return (
    <>
      <Header />
      <main id="main" className="py-16">
        <Container className="max-w-3xl">
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-forest">
            Requires legal review before launch
          </p>
          <h1 className="mt-4 font-display text-4xl tracking-tight text-ink">
            Privacy Policy
          </h1>
          <p className="mt-6 text-base leading-7 text-ink">
            This template identifies the intended privacy treatment for lead
            collection on this independent Five Oaks informational website. It is
            not a substitute for legal advice. Replace placeholder identity
            fields and have qualified counsel review this policy before the site
            is launched.
          </p>
          <div className="mt-8 space-y-6 text-base leading-7 text-ink">
            <section>
              <h2 className="font-display text-2xl">Organization responsible</h2>
              <p className="mt-3">
                Personal information submitted through this website is collected
                by {siteConfig.publisherLegalName}, {siteConfig.publisherAddress},{" "}
                {siteConfig.publisherEmail}, {siteConfig.publisherPhone}.
              </p>
            </section>
            <section>
              <h2 className="font-display text-2xl">What we collect</h2>
              <p className="mt-3">
                We collect first name, last name, email address, optional phone
                number, product interest, optional buyer timing, marketing-consent
                status, and non-sensitive attribution data such as landing-page
                URL, referrer and UTM parameters. We do not collect government
                identifiers, payment details or other unnecessary sensitive
                information.
              </p>
            </section>
            <section>
              <h2 className="font-display text-2xl">Why we collect it</h2>
              <p className="mt-3">
                We use this information to respond to your request for Five Oaks
                project updates. If you provide express consent, we may also send
                commercial electronic messages about the project. We do not send
                those messages unless the consent checkbox is selected.
              </p>
            </section>
            <section>
              <h2 className="font-display text-2xl">Lead processors</h2>
              <p className="mt-3">
                Lead information may be sent to {siteConfig.crmOrWebhookProvider}{" "}
                at {siteConfig.leadDestination} and acknowledgement messages may
                be sent through {siteConfig.acknowledgementEmailProvider}. Identify
                those processors in the production environment before launch.
              </p>
            </section>
            <section>
              <h2 className="font-display text-2xl">Retention</h2>
              <p className="mt-3">
                The operator should retain lead records only as long as needed to
                respond to update requests, meet legal obligations, and resolve
                disputes. A documented retention schedule belongs in the operator
                privacy program before launch.
              </p>
            </section>
            <section>
              <h2 className="font-display text-2xl">Access and deletion</h2>
              <p className="mt-3">
                Privacy inquiries, access requests and deletion requests may be
                sent to {siteConfig.publisherEmail}. The operator should verify
                identity, locate the relevant records, and respond according to
                applicable Canadian privacy law.
              </p>
            </section>
            <section>
              <h2 className="font-display text-2xl">Analytics</h2>
              <p className="mt-3">
                If analytics are enabled, events do not include names, email
                addresses, phone numbers or other form field values. Analytics
                identifiers, if used, should be configured only after privacy
                review.
              </p>
            </section>
          </div>
        </Container>
      </main>
      <Footer />
    </>
  );
}
