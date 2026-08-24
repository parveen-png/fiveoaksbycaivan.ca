import Image from "next/image";
import { HeroCta } from "@/components/HeroCta";
import { LeadForm } from "@/components/LeadForm";
import { Container } from "@/components/ui";
import { copy, heroChips, images } from "@/lib/project-data";

export function Hero() {
  return (
    <section id="top" aria-labelledby="page-title" className="relative min-h-[90vh] flex items-center pt-24 pb-16 lg:pt-32 lg:pb-24">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src={images.hero.src}
          alt={images.hero.alt}
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
        {/* Dark overlay for high contrast */}
        <div className="absolute inset-0 bg-forest/85 mix-blend-multiply" />
        <div className="absolute inset-0 bg-gradient-to-r from-forest/95 via-forest/80 to-forest/40" />
      </div>

      <Container className="relative z-10 grid items-center gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:gap-16">
        <div className="text-white">
          <p className="inline-block rounded-full bg-clay/20 border border-clay/30 px-3 py-1 text-xs font-bold uppercase tracking-widest text-clay-100 mb-6">
            Coming Soon • Oakville, Ontario
          </p>
          <h1
            id="page-title"
            className="font-display text-4xl font-bold leading-[1.15] tracking-tight sm:text-5xl lg:text-6xl"
          >
            Five Oaks by Caivan in Oakville
          </h1>
          <p className="mt-6 max-w-xl text-lg leading-relaxed text-white/90 sm:text-xl">
            {copy.heroSupport}
          </p>
          
          <ul className="mt-8 space-y-4">
            {copy.formTrust.map((item) => (
              <li key={item} className="flex items-start gap-3 text-base text-white/95">
                <span aria-hidden="true" className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-clay text-xs text-white">
                  ✓
                </span>
                <span>{item}</span>
              </li>
            ))}
          </ul>

          <div className="mt-10 flex flex-wrap gap-3">
            {heroChips.map((chip) => (
              <span
                key={chip}
                className="rounded-md border border-white/20 bg-white/10 px-4 py-2 text-sm font-medium text-white backdrop-blur-sm"
              >
                {chip}
              </span>
            ))}
          </div>

          <div className="mt-10 lg:hidden">
            <HeroCta />
          </div>
        </div>

        <div className="w-full max-w-md mx-auto lg:ml-auto lg:mr-0">
          <div className="rounded-2xl bg-white p-1 shadow-2xl">
            <LeadForm idPrefix="hero" />
          </div>
        </div>
      </Container>
      
      <p className="absolute bottom-4 left-4 right-4 z-10 text-center text-xs tracking-wide text-white/60">
        {copy.imageQualifier} This photograph does not depict Five Oaks.
      </p>
    </section>
  );
}
