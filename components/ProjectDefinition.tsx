import { CtaLink, Container, Eyebrow, Section } from "@/components/ui";
import { copy, project } from "@/lib/project-data";

export function ProjectDefinition() {
  return (
    <Section id="overview" ariaLabelledby="what-is-heading" className="bg-paper-muted">
      <Container>
        <Eyebrow>Direct answer</Eyebrow>
        <h2
          id="what-is-heading"
          className="mt-3 font-display text-3xl tracking-tight text-ink md:text-4xl"
        >
          What is Five Oaks by Caivan?
        </h2>
        <p className="mt-6 max-w-3xl text-lg leading-8 text-ink">
          {copy.whatIsFiveOaks}
        </p>
        <CtaLink href="/#register" className="mt-8">
          {project.primaryCta}
        </CtaLink>
      </Container>
    </Section>
  );
}
