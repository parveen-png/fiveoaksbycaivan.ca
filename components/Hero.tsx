import Image from "next/image";
import { LeadForm } from "@/components/LeadForm";
import { Container } from "@/components/ui";
import { copy, images } from "@/lib/project-data";

export function Hero() {
  return (
    <section
      id="top"
      aria-labelledby="page-title"
      className="relative flex min-h-[90svh] items-center overflow-hidden pt-28 pb-16 lg:min-h-[100svh] lg:pt-32 lg:pb-24"
    >
      <div className="absolute inset-0 z-0 bg-[#0b212b]">
        <Image
          src={images.hero.src}
          alt={images.hero.alt}
          fill
          priority
          sizes="100vw"
          className="object-cover object-[center_28%] opacity-90"
        />
        {/* Richer, smoother gradients for perfect text legibility without a box */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#0b212b]/95 via-[#0b212b]/70 to-transparent lg:via-[#0b212b]/50" />
        <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-[#0b212b]/90 to-transparent" />
      </div>

      <Container className="relative z-10 grid w-full items-center gap-12 lg:grid-cols-[minmax(0,1fr)_minmax(22rem,28rem)] lg:gap-16">
        <div className="max-w-2xl text-white">
          <div className="mb-6 flex flex-wrap gap-3">
            <span className="inline-flex items-center rounded-full border border-[#b7e0ea]/40 bg-[#b7e0ea]/10 px-3.5 py-1.5 text-xs font-semibold uppercase tracking-widest text-[#b7e0ea] backdrop-blur-sm">
              Coming this fall
            </span>
            <span className="inline-flex items-center rounded-full border border-white/30 bg-white/10 px-3.5 py-1.5 text-xs font-medium tracking-wide text-white backdrop-blur-sm">
              VIP Registration Open
            </span>
          </div>
          
          <h1
            id="page-title"
            className="font-display font-semibold uppercase leading-[1.1] drop-shadow-xl"
          >
            <span className="mb-3 block text-xl tracking-[0.18em] text-[#b7e0ea] sm:text-2xl">
              Five Oaks by Caivan
            </span>
            <span className="block text-4xl tracking-[0.12em] sm:text-5xl md:text-[3.5rem] md:tracking-[0.14em]">
              Freehold singles
            </span>
            <span className="mt-2 block text-4xl tracking-[0.12em] sm:mt-3 sm:text-5xl md:text-[3.5rem] md:tracking-[0.14em]">
              &amp; townhomes
            </span>
          </h1>
          
          <p className="mt-6 max-w-xl text-lg leading-relaxed text-[#d5eef3] drop-shadow-md sm:text-xl md:text-2xl">
            {copy.heroSubhead}
          </p>

          <ul className="mt-8 space-y-3.5 text-sm font-medium tracking-wide text-white sm:text-base">
            <li className="flex items-center gap-3">
              <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[#b7e0ea] text-[#0b212b]">
                <svg className="h-3.5 w-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
              </span>
              Dundas Street West &amp; Neyagawa Boulevard
            </li>
            <li className="flex items-center gap-3">
              <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[#b7e0ea] text-[#0b212b]">
                <svg className="h-3.5 w-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
              </span>
              HST rebate of up to $130,000
            </li>
            <li className="flex items-center gap-3">
              <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[#b7e0ea] text-[#0b212b]">
                <svg className="h-3.5 w-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
              </span>
              Detached 40′, 42′ and 50′ frontages
            </li>
          </ul>
        </div>

        <div className="w-full max-w-md justify-self-center lg:justify-self-end">
          <div className="relative rounded-2xl bg-white p-1 shadow-[0_32px_64px_-12px_rgba(0,0,0,0.6)] ring-1 ring-white/20">
            <LeadForm idPrefix="hero" />
          </div>
        </div>
      </Container>
    </section>
  );
}
