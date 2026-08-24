import Image from "next/image";
import { copy } from "@/lib/project-data";

export function ImageFrame({
  src,
  alt,
  width,
  height,
  priority = false,
  sizes,
  caption = copy.imageQualifier,
}: {
  src: string;
  alt: string;
  width: number;
  height: number;
  priority?: boolean;
  sizes: string;
  caption?: string;
}) {
  return (
    <figure className="overflow-hidden rounded-sm border border-stone bg-paper-muted">
          <div className="relative aspect-video">
        <Image
          src={src}
          alt={alt}
          width={width}
          height={height}
          priority={priority}
          loading={priority ? "eager" : "lazy"}
          sizes={sizes}
          className="h-full w-full object-cover"
        />
      </div>
      <figcaption className="px-3 py-2 text-xs tracking-wide text-ink-muted">
        {caption}
      </figcaption>
    </figure>
  );
}
