import { Container, Section } from "@/components/ui";
import { copy } from "@/lib/project-data";

export function ProjectDefinition() {
  return (
    <Section id="overview" ariaLabelledby="what-is-heading" className="bg-paper-muted">
      <Container>
        <h2
          id="what-is-heading"
          className="font-display text-3xl tracking-tight text-ink md:text-4xl"
        >
          What is Five Oaks by Caivan?
        </h2>
        <p className="mt-6 max-w-3xl text-lg leading-8 text-ink">
          {copy.whatIsFiveOaks}
        </p>
      </Container>
    </Section>
  );
}
