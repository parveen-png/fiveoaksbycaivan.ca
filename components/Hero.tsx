import Image from "next/image";
import { HeroCta } from "@/components/HeroCta";
import { LeadForm } from "@/components/LeadForm";
import { Container } from "@/components/ui";
import { copy, heroChips, images } from "@/lib/project-data";

export function Hero() {
  return (
    <section id="top" aria-labelledby="page-title" className="bg-paper">
      <div className="relative h-56 w-full sm:h-72 lg:h-[30rem]">
        <Image
          src={images.hero.src}
          alt={images.hero.alt}
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-ink/70 via-ink/20 to-ink/10" />
        <p className="absolute bottom-3 left-5 right-5 text-xs tracking-wide text-white/85 sm:left-8">
          {copy.imageQualifier} This photograph does not depict Five Oaks.
        </p>
      </div>

      <Container className="relative z-10 -mt-14 grid items-start gap-6 pb-14 sm:-mt-20 lg:-mt-28 lg:grid-cols-[minmax(0,1.1fr)_minmax(21rem,0.9fr)] lg:gap-10 lg:pb-20">
        <div className="rounded-2xl bg-forest p-6 text-white shadow-[0_28px_64px_-32px_rgb(18_32_44_/_0.55)] sm:p-8 lg:p-10">
          <p className="text-[0.7rem] font-semibold uppercase tracking-[0.24em] text-forest-soft">
            Coming Soon • Oakville, Ontario
          </p>
          <h1
            id="page-title"
            className="mt-4 max-w-3xl font-display text-[2.5rem] leading-[1.05] tracking-tight sm:text-5xl lg:text-[4rem]"
          >
            Five Oaks by Caivan in Oakville
          </h1>
          <p className="mt-5 max-w-2xl text-base leading-8 text-white/85 sm:text-lg">
            {copy.heroSupport}
          </p>
          <ul className="mt-6 flex flex-wrap gap-2">
            {heroChips.map((chip) => (
              <li
                key={chip}
                className="rounded-full border border-white/25 bg-white/10 px-3.5 py-1.5 text-sm text-white"
              >
                {chip}
              </li>
            ))}
          </ul>
          <div className="mt-8 lg:hidden">
            <HeroCta />
          </div>
        </div>

        <div className="lg:sticky lg:top-24">
          <LeadForm idPrefix="hero" />
        </div>
      </Container>
    </section>
  );
}
