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
        dateModified: "2026-08-24",
        isPartOf: { "@id": `${origin}/#website` },
        about: [
          {
            "@type": "Thing",
            name: project.name,
            description: `${project.name} is a coming-soon new-home community by ${project.developer} in ${project.municipality}, planned to include ${project.homeTypes.toLowerCase()}.`,
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
          "Neighbourhood imagery for illustration only. This photograph does not depict the Five Oaks project.",
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
