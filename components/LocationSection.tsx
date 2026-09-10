import { ImageFrame } from "@/components/ImageFrame";
import { ProjectMapPlaceholder } from "@/components/ProjectMapPlaceholder";
import { Container, Eyebrow, Section } from "@/components/ui";
import { copy, images } from "@/lib/project-data";

export function LocationSection() {
  return (
    <Section id="location" ariaLabelledby="location-heading">
      <Container>
        <Eyebrow>Oakville location</Eyebrow>
        <h2
          id="location-heading"
          className="mt-3 font-display text-3xl tracking-tight text-ink md:text-4xl"
        >
          Dundas Street West and Neyagawa Boulevard
        </h2>
        <p className="mt-5 max-w-3xl text-lg leading-8 text-ink">{copy.locationLead}</p>
        <div className="mt-8 grid gap-8 lg:grid-cols-2">
          <ImageFrame
            src={images.communityAerial.src}
            alt={images.communityAerial.alt}
            width={images.communityAerial.width}
            height={images.communityAerial.height}
            sizes="(max-width: 1024px) 100vw, 50vw"
            caption={copy.aerialQualifier}
          />
          <ImageFrame
            src={images.pondPathway.src}
            alt={images.pondPathway.alt}
            width={images.pondPathway.width}
            height={images.pondPathway.height}
            sizes="(max-width: 1024px) 100vw, 50vw"
            caption={copy.aerialQualifier}
          />
        </div>
        <p className="mt-8 max-w-3xl text-base leading-7 text-ink">{copy.oakvilleContext}</p>
        <ul className="mt-6 max-w-3xl list-disc space-y-2 pl-5 text-base leading-7 text-ink">
          {copy.oakvilleSafeFacts.map((fact) => (
            <li key={fact}>{fact}</li>
          ))}
        </ul>
        <p className="mt-6 max-w-3xl text-sm leading-6 text-ink-muted">
          Nearby listings describe this intersection. They are not commute-time
          guarantees. Confirm school catchments with the school boards.
        </p>
        <ProjectMapPlaceholder />
      </Container>
    </Section>
  );
}
