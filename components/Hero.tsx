import Image from "next/image";
import { LeadForm } from "@/components/LeadForm";
import { Container } from "@/components/ui";
import { copy, images } from "@/lib/project-data";

export function Hero() {
  return (
    <section
      id="top"
      aria-labelledby="page-title"
      className="relative flex min-h-[100svh] items-center overflow-hidden pt-28 pb-10 lg:pt-32 lg:pb-16"
    >
      <div className="absolute inset-0 z-0">
        <Image
          src={images.hero.src}
          alt={images.hero.alt}
          fill
          priority
          sizes="100vw"
          className="object-cover object-[center_28%]"
        />
        <div className="absolute inset-0 bg-forest/25" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#123848]/70 via-[#123848]/35 to-transparent" />
        <div className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-[#123848]/50 to-transparent" />
      </div>

      <Container className="relative z-10 grid w-full items-center gap-8 lg:grid-cols-[minmax(0,1fr)_minmax(21rem,26rem)] lg:gap-14">
        <div className="max-w-3xl rounded-3xl bg-[#123848]/80 px-6 py-8 text-white shadow-[0_24px_60px_-24px_rgba(8,24,32,0.7)] backdrop-blur-md sm:px-10 sm:py-10">
          <p className="text-[0.7rem] font-semibold uppercase tracking-[0.28em] text-[#b7e0ea] sm:text-xs">
            Five Oaks by Caivan · Coming this fall
          </p>
          <h1
            id="page-title"
            className="mt-5 font-display font-semibold uppercase leading-[1.12]"
          >
            <span className="sr-only">Five Oaks Oakville: </span>
            <span className="block text-[1.7rem] tracking-[0.16em] sm:text-4xl md:text-[2.75rem] md:tracking-[0.2em]">
              Freehold singles
            </span>
            <span className="mt-2 block text-[1.7rem] tracking-[0.16em] sm:mt-3 sm:text-4xl md:text-[2.75rem] md:tracking-[0.2em]">
              &amp; townhomes
            </span>
          </h1>
          <p className="mt-6 max-w-xl text-base leading-relaxed text-white sm:text-lg md:text-xl">
            {copy.heroSubhead}
          </p>
          <p className="mt-4 text-sm font-medium tracking-wide text-[#d5eef3]">
            Dundas Street West &amp; Neyagawa Boulevard, Oakville
          </p>
        </div>

        <div className="w-full max-w-md justify-self-center lg:justify-self-end">
          <div className="rounded-2xl bg-white p-1 shadow-[0_24px_60px_-18px_rgba(8,24,32,0.55)]">
            <LeadForm idPrefix="hero" />
          </div>
        </div>
      </Container>
    </section>
  );
}
