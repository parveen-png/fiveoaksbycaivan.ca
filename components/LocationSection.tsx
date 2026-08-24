import { ImageFrame } from "@/components/ImageFrame";
import { ProjectMapPlaceholder } from "@/components/ProjectMapPlaceholder";
import { Container, Eyebrow, Section } from "@/components/ui";
import { copy, images } from "@/lib/project-data";

export function LocationSection() {
  return (
    <Section id="location" ariaLabelledby="location-heading">
      <Container>
        <Eyebrow>Oakville context</Eyebrow>
        <h2
          id="location-heading"
          className="mt-3 font-display text-3xl tracking-tight text-ink md:text-4xl"
        >
          Five Oaks in Oakville
        </h2>
        <p className="mt-5 max-w-3xl text-lg leading-8 text-ink">{copy.locationLead}</p>
        <div className="mt-8 grid gap-8 lg:grid-cols-2">
          <ImageFrame
            src={images.lakeshore.src}
            alt={images.lakeshore.alt}
            width={images.lakeshore.width}
            height={images.lakeshore.height}
            sizes="(max-width: 1024px) 100vw, 50vw"
          />
          <ImageFrame
            src={images.park.src}
            alt={images.park.alt}
            width={images.park.width}
            height={images.park.height}
            sizes="(max-width: 1024px) 100vw, 50vw"
          />
        </div>
        <p className="mt-8 max-w-3xl text-base leading-7 text-ink">{copy.oakvilleContext}</p>
        <ul className="mt-6 max-w-3xl list-disc space-y-2 pl-5 text-base leading-7 text-ink">
          {copy.oakvilleSafeFacts.map((fact) => (
            <li key={fact}>{fact}</li>
          ))}
        </ul>
        <p className="mt-6 max-w-3xl text-sm leading-6 text-ink-muted">
          These points describe Oakville at the city level. They are not
          Five Oaks site-specific claims.
        </p>
        <ProjectMapPlaceholder />
      </Container>
    </Section>
  );
}
