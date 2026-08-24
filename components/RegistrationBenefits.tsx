import { CtaLink, Container, Eyebrow, Section } from "@/components/ui";
import { project, registrationBenefits } from "@/lib/project-data";

export function RegistrationBenefits() {
  return (
    <Section className="bg-paper-muted" ariaLabelledby="benefits-heading">
      <Container>
        <Eyebrow>Why register</Eyebrow>
        <h2
          id="benefits-heading"
          className="mt-3 font-display text-3xl tracking-tight text-ink md:text-4xl"
        >
          What you&apos;ll receive
        </h2>
        <ul className="mt-8 grid gap-4 md:grid-cols-2">
          {registrationBenefits.map((benefit, index) => (
            <li
              key={benefit}
              className="flex gap-4 rounded-sm border border-stone bg-paper-elevated p-5 text-base leading-7 text-ink"
            >
              <span
                className="font-display text-xl text-clay"
                aria-hidden="true"
              >
                {String(index + 1).padStart(2, "0")}
              </span>
              <span>{benefit}</span>
            </li>
          ))}
        </ul>
        <CtaLink href="/#register" className="mt-8">
          {project.primaryCta}
        </CtaLink>
      </Container>
    </Section>
  );
}
