import { ExternalLink } from "@/components/ExternalLink";
import { Container, Eyebrow, Section } from "@/components/ui";
import { faqs, informationSources } from "@/lib/project-data";

export function FaqSection() {
  return (
    <Section id="faqs" className="bg-paper-muted" ariaLabelledby="faq-heading">
      <Container>
        <Eyebrow>Common buyer questions</Eyebrow>
        <h2
          id="faq-heading"
          className="mt-3 font-display text-3xl tracking-tight text-ink md:text-4xl"
        >
          Five Oaks Oakville frequently asked questions
        </h2>
        <div className="mt-8 divide-y divide-stone border-y border-stone">
          {faqs.map((faq) => (
            <article key={faq.question} className="py-6">
              <h3 className="font-display text-xl text-ink">{faq.question}</h3>
              <p className="mt-3 max-w-3xl text-base leading-7 text-ink">{faq.answer}</p>
            </article>
          ))}
        </div>
        <div className="mt-10">
          <h3 className="font-display text-xl text-ink">Information sources</h3>
          <p className="mt-3 max-w-3xl text-sm leading-6 text-ink-muted">
            Project-specific claims on this page are limited to official Caivan
            materials reviewed on August 24, 2026. Third-party listing sites are
            not used as authority for prices, deposits, incentives, launch dates
            or the project address.
          </p>
          <ul className="mt-4 space-y-2 text-sm">
            {informationSources.map((source) => (
              <li key={source.href}>
                <ExternalLink href={source.href}>{source.label}</ExternalLink>
              </li>
            ))}
          </ul>
        </div>
      </Container>
    </Section>
  );
}
