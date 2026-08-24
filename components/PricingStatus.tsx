import { Container, Section, StatusBadge } from "@/components/ui";
import {
  copy,
  displayFactValue,
  getFact,
  pricingStatusItems,
  project,
} from "@/lib/project-data";

export function PricingStatus() {
  return (
    <Section className="bg-paper-muted" ariaLabelledby="pricing-heading">
      <Container>
        <h2
          id="pricing-heading"
          className="font-display text-3xl tracking-tight text-ink md:text-4xl"
        >
          Five Oaks pricing and release information
        </h2>
        <p className="mt-5 max-w-3xl text-lg leading-8 text-ink">{copy.pricingLead}</p>
        <dl className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {pricingStatusItems.map((item) => {
            const fact = getFact(item.factId);
            return (
              <div
                key={item.label}
                className="rounded-sm border border-stone bg-paper-elevated p-5"
              >
                <dt className="text-sm font-semibold text-ink">{item.label}</dt>
                <dd className="mt-2 flex flex-wrap items-center gap-2 text-sm leading-6 text-ink-muted">
                  <span>{displayFactValue(fact)}</span>
                  <StatusBadge>TBA</StatusBadge>
                </dd>
              </div>
            );
          })}
        </dl>
        <p className="mt-6 max-w-3xl text-base leading-7 text-ink">{copy.pricingCaution}</p>
        <a
          href="#register"
          className="mt-8 inline-flex min-h-12 items-center justify-center rounded-sm bg-forest px-6 text-sm font-semibold text-paper transition-colors hover:bg-forest-hover"
        >
          {project.primaryCta}
        </a>
      </Container>
    </Section>
  );
}
