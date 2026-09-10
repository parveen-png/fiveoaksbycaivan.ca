import Image from "next/image";
import { LeadForm } from "@/components/LeadForm";
import { Container } from "@/components/ui";
import { copy, images } from "@/lib/project-data";

export function Hero() {
  return (
    <section
      id="top"
      aria-labelledby="page-title"
      className="relative flex min-h-[100svh] flex-col justify-between overflow-hidden pt-24 pb-8 sm:pt-28 lg:pt-32 lg:pb-12"
    >
      <div className="absolute inset-0 z-0">
        <Image
          src={images.hero.src}
          alt={images.hero.alt}
          fill
          priority
          sizes="100vw"
          className="object-cover object-[center_18%]"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#7eb7c9]/35 via-transparent to-forest/55" />
        <div className="absolute inset-x-0 top-0 h-[42%] bg-gradient-to-b from-[#9ec9d6]/40 to-transparent" />
      </div>

      <Container className="relative z-10 flex flex-1 flex-col lg:grid lg:grid-cols-[minmax(0,1.15fr)_minmax(20rem,26rem)] lg:items-end lg:gap-12">
        <div className="mx-auto max-w-4xl pt-6 text-center lg:mx-0 lg:max-w-none lg:self-center lg:pt-0 lg:text-left">
          <p className="text-[0.7rem] font-semibold uppercase tracking-[0.32em] text-[#1d4a5c] sm:text-xs">
            Five Oaks by Caivan · Coming this fall
          </p>
          <h1
            id="page-title"
            className="mt-5 font-display font-light text-white drop-shadow-[0_2px_16px_rgba(15,50,70,0.35)]"
          >
            <span className="sr-only">Five Oaks Oakville: </span>
            <span className="block text-[1.65rem] leading-[1.15] tracking-[0.22em] uppercase sm:text-4xl md:text-5xl lg:text-[3.35rem] lg:tracking-[0.26em]">
              Freehold singles
            </span>
            <span className="mt-2 block text-[1.65rem] leading-[1.15] tracking-[0.22em] uppercase sm:mt-3 sm:text-4xl md:text-5xl lg:text-[3.35rem] lg:tracking-[0.26em]">
              &amp; townhomes
            </span>
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-base font-medium leading-relaxed text-[#1d4a5c] sm:text-lg md:text-xl lg:mx-0 lg:max-w-xl">
            {copy.heroSubhead}
          </p>
          <p className="mt-3 text-sm tracking-wide text-[#1d4a5c]/80">
            Dundas Street West &amp; Neyagawa Boulevard, Oakville
          </p>
        </div>

        <div className="mt-10 w-full max-w-md self-center lg:mt-0 lg:ml-auto lg:self-end">
          <div className="rounded-2xl bg-white/95 p-1 shadow-[0_24px_60px_-20px_rgba(15,40,55,0.55)] backdrop-blur-sm">
            <LeadForm idPrefix="hero" />
          </div>
        </div>
      </Container>
    </section>
  );
}
