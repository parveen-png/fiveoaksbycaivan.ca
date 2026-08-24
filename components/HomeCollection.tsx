import { ImageFrame } from "@/components/ImageFrame";
import { Container, Section, StatusBadge } from "@/components/ui";
import { homeCollection, images } from "@/lib/project-data";

export function HomeCollection() {
  return (
    <Section id="homes" ariaLabelledby="homes-heading">
      <Container>
        <h2
          id="homes-heading"
          className="font-display text-3xl tracking-tight text-ink md:text-4xl"
        >
          Homes planned for Five Oaks
        </h2>
        <div className="mt-8 max-w-3xl">
          <ImageFrame
            src={images.garden.src}
            alt={images.garden.alt}
            width={images.garden.width}
            height={images.garden.height}
            sizes="(max-width: 768px) 100vw, 48rem"
          />
        </div>
        <div className="mt-8 grid gap-6 md:grid-cols-2">
          {homeCollection.map((home) => (
            <article
              key={home.id}
              className="rounded-sm border border-stone bg-paper-elevated p-6"
            >
              <h3 className="font-display text-2xl text-ink">{home.title}</h3>
              <p className="mt-4 text-base leading-7 text-ink-muted">{home.copy}</p>
              <p className="mt-5">
                <StatusBadge>{home.status}</StatusBadge>
              </p>
            </article>
          ))}
        </div>
      </Container>
    </Section>
  );
}
