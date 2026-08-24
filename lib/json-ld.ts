import { faqs, images, project, seo } from "@/lib/project-data";
import { identityIsPlaceholder, siteConfig } from "@/lib/site-config";

export function buildJsonLd() {
  const pageUrl = siteConfig.siteUrl;
  const imageUrl = images.hero.src.startsWith("http")
    ? images.hero.src
    : `${pageUrl}${images.hero.src}`;

  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebSite",
        "@id": `${pageUrl}/#website`,
        url: pageUrl,
        name: "Five Oaks Oakville project information",
        alternateName: [
          "Five Oaks by Caivan Oakville",
          "Five Oaks Oakville",
        ],
        description:
          "Independent informational website about Five Oaks by Caivan Communities in Oakville, Ontario.",
        publisher: { "@id": `${pageUrl}/#publisher` },
        inLanguage: "en-CA",
      },
      {
        "@type": "Organization",
        "@id": `${pageUrl}/#publisher`,
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
        "@id": `${pageUrl}/#webpage`,
        url: pageUrl,
        name: seo.title,
        headline: "Five Oaks by Caivan in Oakville",
        description: seo.description,
        datePublished: "2026-08-24",
        dateModified: "2026-08-24",
        isPartOf: { "@id": `${pageUrl}/#website` },
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
        primaryImageOfPage: { "@id": `${pageUrl}/#primaryimage` },
        inLanguage: "en-CA",
        speakable: {
          "@type": "SpeakableSpecification",
          cssSelector: ["#page-title", "#overview", "#facts-heading"],
        },
      },
      {
        "@type": "BreadcrumbList",
        "@id": `${pageUrl}/#breadcrumb`,
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
        "@id": `${pageUrl}/#primaryimage`,
        url: imageUrl,
        contentUrl: imageUrl,
        caption:
          "Neighbourhood imagery for illustration only. This photograph does not depict the Five Oaks project.",
        width: images.hero.width,
        height: images.hero.height,
      },
      {
        "@type": "FAQPage",
        "@id": `${pageUrl}/#faq`,
        url: `${pageUrl}/#faqs`,
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
