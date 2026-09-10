import { faqs, images, project, seo } from "@/lib/project-data";
import { identityIsPlaceholder, siteConfig, sitePageUrl } from "@/lib/site-config";

export function buildJsonLd() {
  const origin = siteConfig.siteUrl;
  const pageUrl = sitePageUrl("/");
  const imageUrl = images.hero.src.startsWith("http")
    ? images.hero.src
    : `${origin}${images.hero.src}`;

  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebSite",
        "@id": `${origin}/#website`,
        url: pageUrl,
        name: "Five Oaks Oakville project information",
        alternateName: [
          "Five Oaks by Caivan Oakville",
          "Five Oaks Oakville",
        ],
        description:
          "Independent informational website about Five Oaks by Caivan Communities in Oakville, Ontario.",
        publisher: { "@id": `${origin}/#publisher` },
        inLanguage: "en-CA",
      },
      {
        "@type": "Organization",
        "@id": `${origin}/#publisher`,
        name: "Five Oaks Oakville project information",
        url: pageUrl,
        ...(!identityIsPlaceholder(siteConfig.publisherEmail)
          ? { email: siteConfig.publisherEmail }
          : {}),
        ...(!identityIsPlaceholder(siteConfig.publisherPhone)
          ? { telephone: siteConfig.publisherPhone }
          : {}),
      },
      {
        "@type": "WebPage",
        "@id": `${origin}/#webpage`,
        url: pageUrl,
        name: seo.title,
        headline: "Five Oaks by Caivan in Oakville",
        description: seo.description,
        datePublished: "2026-08-24",
        dateModified: "2026-09-10",
        isPartOf: { "@id": `${origin}/#website` },
        about: [
          {
            "@type": "Thing",
            name: project.name,
            description: `${project.name} is a new-home community by ${project.developer} coming this fall to ${project.intersection} in ${project.municipality}, with ${project.homeTypes.toLowerCase()}.`,
          },
          {
            "@type": "City",
            name: "Oakville",
            containedInPlace: {
              "@type": "AdministrativeArea",
              name: "Ontario",
              containedInPlace: {
                "@type": "Country",
                name: "Canada",
              },
            },
          },
        ],
        mentions: [
          { "@type": "Organization", name: project.developer },
          { "@type": "Place", name: "Oakville, Ontario" },
          { "@type": "Place", name: "Dundas Street West and Neyagawa Boulevard" },
          { "@type": "Place", name: "Lions Valley Park" },
        ],
        primaryImageOfPage: { "@id": `${origin}/#primaryimage` },
        inLanguage: "en-CA",
        speakable: {
          "@type": "SpeakableSpecification",
          cssSelector: ["#page-title", "#overview", "#facts-heading"],
        },
      },
      {
        "@type": "BreadcrumbList",
        "@id": `${origin}/#breadcrumb`,
        itemListElement: [
          {
            "@type": "ListItem",
            position: 1,
            name: "Five Oaks Oakville",
            item: pageUrl,
          },
        ],
      },
      {
        "@type": "ImageObject",
        "@id": `${origin}/#primaryimage`,
        url: imageUrl,
        contentUrl: imageUrl,
        caption:
          "Aerial of the Lions Valley Park and Sixteen Mile Creek setting around Five Oaks in Oakville.",
        width: images.hero.width,
        height: images.hero.height,
      },
      {
        "@type": "FAQPage",
        "@id": `${origin}/#faq`,
        url: `${origin}/#faqs`,
        mainEntity: faqs.map((faq) => ({
          "@type": "Question",
          name: faq.question,
          acceptedAnswer: {
            "@type": "Answer",
            text: faq.answer,
          },
        })),
      },
    ],
  };
}
