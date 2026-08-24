import { LeadForm } from "@/components/LeadForm";
import { Container, Section } from "@/components/ui";
import { copy } from "@/lib/project-data";

export function FinalCta() {
  return (
    <Section ariaLabelledby="final-cta-heading">
      <Container className="grid items-start gap-10 lg:grid-cols-[minmax(0,1fr)_minmax(20rem,28rem)]">
        <div>
          <h2
            id="final-cta-heading"
            className="font-display text-3xl tracking-tight text-ink md:text-4xl"
          >
            Stay informed about Five Oaks
          </h2>
          <p className="mt-5 max-w-2xl text-lg leading-8 text-ink">{copy.finalCta}</p>
        </div>
        <LeadForm idPrefix="final" />
      </Container>
    </Section>
  );
}
