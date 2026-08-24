import { HeroCta } from "@/components/HeroCta";
import { ImageFrame } from "@/components/ImageFrame";
import { LeadForm } from "@/components/LeadForm";
import { Container } from "@/components/ui";
import { copy, heroChips, images } from "@/lib/project-data";

export function Hero() {
  return (
    <section
      id="top"
      aria-labelledby="page-title"
      className="border-b border-stone bg-paper"
    >
      <Container className="grid items-start gap-10 py-10 lg:grid-cols-[minmax(0,1.1fr)_minmax(20rem,0.9fr)] lg:gap-14 lg:py-16">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-forest">
            Coming Soon • Oakville, Ontario
          </p>
          <h1
            id="page-title"
            className="mt-4 max-w-3xl font-display text-4xl leading-[1.12] font-medium tracking-tight text-ink sm:text-5xl lg:text-[3.5rem]"
          >
            Five Oaks by Caivan in Oakville
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-ink-muted">
            {copy.heroSupport}
          </p>
          <ul className="mt-6 flex flex-wrap gap-2">
            {heroChips.map((chip) => (
              <li
                key={chip}
                className="rounded-sm border border-stone bg-paper-elevated px-3 py-1.5 text-sm text-ink"
              >
                {chip}
              </li>
            ))}
          </ul>
          <div className="mt-8 lg:hidden">
            <HeroCta />
          </div>
          <div className="mt-8">
            <ImageFrame
              src={images.hero.src}
              alt={images.hero.alt}
              width={images.hero.width}
              height={images.hero.height}
              priority
              sizes="(max-width: 1024px) 100vw, 55vw"
            />
          </div>
        </div>
        <div className="lg:sticky lg:top-24">
          <LeadForm idPrefix="hero" />
        </div>
      </Container>
    </section>
  );
}
