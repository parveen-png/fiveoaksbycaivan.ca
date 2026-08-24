import { Container, Section } from "@/components/ui";
import { buyerChecklist, copy } from "@/lib/project-data";

export function BuyerChecklist() {
  return (
    <Section ariaLabelledby="checklist-heading">
      <Container>
        <h2
          id="checklist-heading"
          className="font-display text-3xl tracking-tight text-ink md:text-4xl"
        >
          What to confirm before buying at Five Oaks
        </h2>
        <p className="mt-4 max-w-3xl text-base leading-7 text-ink-muted">
          {copy.checklistIntro}
        </p>
        <ol className="mt-8 grid gap-4 md:grid-cols-2">
          {buyerChecklist.map((item, index) => (
            <li
              key={item}
              className="flex gap-4 rounded-sm border border-stone bg-paper-elevated p-5"
            >
              <span className="font-display text-xl text-forest" aria-hidden="true">
                {String(index + 1).padStart(2, "0")}
              </span>
              <span className="text-base leading-7 text-ink">{item}</span>
            </li>
          ))}
        </ol>
        <p className="mt-8 max-w-3xl text-base leading-7 text-ink">
          {copy.lawyerReview}
        </p>
      </Container>
    </Section>
  );
}
