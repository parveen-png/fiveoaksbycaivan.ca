import { Container, Eyebrow, Section } from "@/components/ui";
import { faqs } from "@/lib/project-data";

export function FaqSection() {
  return (
    <Section id="faqs" className="bg-paper-muted" ariaLabelledby="faq-heading">
      <Container>
        <Eyebrow>Common buyer questions</Eyebrow>
        <h2
          id="faq-heading"
          className="mt-3 font-display text-3xl tracking-tight text-ink md:text-4xl"
        >
          Five Oaks Oakville frequently asked questions
        </h2>
        <div className="mt-8 divide-y divide-stone border-y border-stone">
          {faqs.map((faq) => (
            <article key={faq.question} className="py-6">
              <h3 className="font-display text-xl text-ink">{faq.question}</h3>
              <p className="mt-3 max-w-3xl text-base leading-7 text-ink">{faq.answer}</p>
            </article>
          ))}
        </div>
      </Container>
    </Section>
  );
}
