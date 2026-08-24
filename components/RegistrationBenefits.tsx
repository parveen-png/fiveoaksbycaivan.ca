import { Container, Section } from "@/components/ui";
import { project, registrationBenefits } from "@/lib/project-data";

export function RegistrationBenefits() {
  return (
    <Section className="bg-paper-muted" ariaLabelledby="benefits-heading">
      <Container>
        <h2
          id="benefits-heading"
          className="font-display text-3xl tracking-tight text-ink md:text-4xl"
        >
          What you&apos;ll receive
        </h2>
        <ul className="mt-8 grid gap-4 md:grid-cols-2">
          {registrationBenefits.map((benefit) => (
            <li
              key={benefit}
              className="rounded-sm border border-stone bg-paper-elevated p-5 text-base leading-7 text-ink"
            >
              {benefit}
            </li>
          ))}
        </ul>
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
