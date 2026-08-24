import { Container, Section, StatusBadge } from "@/components/ui";
import { copy, displayFactValue, facts } from "@/lib/project-data";

export function ProjectFacts() {
  return (
    <Section ariaLabelledby="facts-heading">
      <Container>
        <h2
          id="facts-heading"
          className="font-display text-3xl tracking-tight text-ink md:text-4xl"
        >
          Five Oaks Project Facts
        </h2>
        <p className="mt-4 max-w-3xl text-base leading-7 text-ink-muted">
          {copy.factsExplanation}
        </p>
        <div className="mt-8 overflow-hidden rounded-sm border border-stone">
          <table className="w-full text-left">
            <caption className="sr-only">
              Current Five Oaks project facts as of the information-checked date
            </caption>
            <thead className="sr-only md:not-sr-only md:border-b md:border-stone md:bg-paper-muted">
              <tr>
                <th scope="col" className="px-5 py-3 text-sm font-semibold">
                  Item
                </th>
                <th scope="col" className="px-5 py-3 text-sm font-semibold">
                  Current information
                </th>
              </tr>
            </thead>
            <tbody>
              {facts.map((fact) => (
                <tr
                  key={fact.id}
                  className="block border-b border-stone last:border-b-0 md:table-row"
                >
                  <th
                    scope="row"
                    className="block px-5 pt-4 text-sm font-semibold text-ink md:table-cell md:w-1/3 md:py-4 md:align-top"
                  >
                    {fact.item}
                  </th>
                  <td className="block px-5 pt-1 pb-4 text-sm leading-6 text-ink md:table-cell md:py-4">
                    <span>{displayFactValue(fact)}</span>
                    {fact.status === "TBA" ? (
                      <span className="ml-2">
                        <StatusBadge>TBA</StatusBadge>
                      </span>
                    ) : null}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Container>
    </Section>
  );
}
