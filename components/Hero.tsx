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
      className="border-b border-stone bg-[linear-gradient(180deg,#f3efe7_0%,#ebe4d8_100%)]"
    >
      <Container className="grid items-start gap-8 py-8 lg:grid-cols-[minmax(0,1.05fr)_minmax(21rem,0.95fr)] lg:gap-12 lg:py-14">
        <div>
          <p className="text-[0.7rem] font-semibold uppercase tracking-[0.22em] text-clay">
            Coming Soon • Oakville, Ontario
          </p>
          <h1
            id="page-title"
            className="mt-4 max-w-3xl font-display text-[2.35rem] leading-[1.08] font-medium tracking-tight text-ink sm:text-5xl lg:text-[3.65rem]"
          >
            Five Oaks by Caivan in Oakville
          </h1>
          <p className="mt-5 max-w-2xl text-lg leading-8 text-ink">
            {copy.heroSupport}
          </p>
          <ul className="mt-6 flex flex-wrap gap-2">
            {heroChips.map((chip) => (
              <li
                key={chip}
                className="rounded-full border border-stone bg-paper-elevated px-3.5 py-1.5 text-sm text-ink"
              >
                {chip}
              </li>
            ))}
          </ul>
          <div className="mt-7 lg:hidden">
            <HeroCta />
          </div>
        </div>

        <div className="lg:row-span-2 lg:sticky lg:top-24">
          <LeadForm idPrefix="hero" />
        </div>

        <div className="lg:mt-2">
          <ImageFrame
            src={images.hero.src}
            alt={images.hero.alt}
            width={images.hero.width}
            height={images.hero.height}
            priority
            sizes="(max-width: 1024px) 100vw, 55vw"
          />
        </div>
      </Container>
    </section>
  );
}
