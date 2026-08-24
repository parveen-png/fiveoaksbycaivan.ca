import { ExternalLink } from "@/components/ExternalLink";
import { Container, Section } from "@/components/ui";
import { copy, project } from "@/lib/project-data";

export function DeveloperSection() {
  return (
    <Section className="bg-paper-muted" ariaLabelledby="developer-heading">
      <Container>
        <h2
          id="developer-heading"
          className="font-display text-3xl tracking-tight text-ink md:text-4xl"
        >
          About Caivan Communities
        </h2>
        <p className="mt-5 max-w-3xl text-lg leading-8 text-ink">
          {copy.developerSummary}
        </p>
        <p className="mt-4 max-w-3xl text-base leading-7 text-ink-muted">
          {copy.developerCaution}
        </p>
        <p className="mt-6">
          <ExternalLink href={project.officialCaivanHomeUrl}>
            Visit Caivan&apos;s official website
          </ExternalLink>
        </p>
      </Container>
    </Section>
  );
}
