import { ImageFrame } from "@/components/ImageFrame";
import { Container, Eyebrow, Section, StatusBadge } from "@/components/ui";
import { elevations, homeCollection, images } from "@/lib/project-data";

export function HomeCollection() {
  return (
    <Section id="homes" ariaLabelledby="homes-heading">
      <Container>
        <Eyebrow>Confirmed home types</Eyebrow>
        <h2
          id="homes-heading"
          className="mt-3 font-display text-3xl tracking-tight text-ink md:text-4xl"
        >
          Townhomes and detached homes at Five Oaks
        </h2>
        <div className="mt-8 grid gap-6 md:grid-cols-2">
          {homeCollection.map((home) => {
            const image = images[home.imageId];
            return (
              <article
                key={home.id}
                className="overflow-hidden rounded-sm border border-stone bg-paper-elevated"
              >
                <ImageFrame
                  src={image.src}
                  alt={image.alt}
                  width={image.width}
                  height={image.height}
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
                <div className="p-6">
                  <h3 className="font-display text-2xl text-ink">{home.title}</h3>
                  <p className="mt-4 text-base leading-7 text-ink-muted">
                    {home.copy}
                  </p>
                  <p className="mt-5">
                    <StatusBadge>{home.status}</StatusBadge>
                  </p>
                </div>
              </article>
            );
          })}
        </div>

        <h3 className="mt-14 font-display text-2xl tracking-tight text-ink">
          Collections and elevations
        </h3>
        <p className="mt-3 max-w-3xl text-base leading-7 text-ink-muted">
          Named collections from current project materials. Elevations are
          artist&apos;s concepts and may differ from the finished homes.
        </p>
        <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {elevations.map((elevation) => {
            const image = images[elevation.imageId];
            return (
              <article key={elevation.id}>
                <ImageFrame
                  src={image.src}
                  alt={image.alt}
                  width={image.width}
                  height={image.height}
                  sizes="(max-width: 1024px) 100vw, 33vw"
                />
                <h4 className="mt-3 font-display text-lg text-ink">
                  {elevation.title}
                </h4>
                <p className="mt-1 text-sm text-ink-muted">{elevation.type}</p>
              </article>
            );
          })}
        </div>

        <h3 className="mt-14 font-display text-2xl tracking-tight text-ink">
          Interiors
        </h3>
        <div className="mt-8 grid gap-6 sm:grid-cols-2">
          {(
            [
              images.kitchenTowns,
              images.kitchenSingles,
              images.greatRoom,
              images.breakfast,
            ] as const
          ).map((image) => (
            <ImageFrame
              key={image.src}
              src={image.src}
              alt={image.alt}
              width={image.width}
              height={image.height}
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          ))}
        </div>
      </Container>
    </Section>
  );
}
