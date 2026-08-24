import { LeadForm } from "@/components/LeadForm";
import { Container, Eyebrow } from "@/components/ui";
import { copy } from "@/lib/project-data";

export function FinalCta() {
  return (
    <section
      aria-labelledby="final-cta-heading"
      className="scroll-mt-28 bg-forest py-16 text-paper-elevated md:py-24"
    >
      <Container className="grid items-start gap-10 lg:grid-cols-[minmax(0,1fr)_minmax(20rem,28rem)]">
        <div>
          <Eyebrow className="text-paper-muted">Stay ready</Eyebrow>
          <h2
            id="final-cta-heading"
            className="mt-3 font-display text-3xl tracking-tight md:text-4xl"
          >
            Stay informed about Five Oaks in Oakville
          </h2>
          <p className="mt-5 max-w-2xl text-lg leading-8 text-paper-muted">
            {copy.finalCta}
          </p>
        </div>
        <div className="text-ink">
          <LeadForm idPrefix="final" />
        </div>
      </Container>
    </section>
  );
}
