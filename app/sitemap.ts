import type { MetadataRoute } from "next";
import { sitePageUrl } from "@/lib/site-config";

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date("2026-08-25T00:00:00.000Z");
  return [
    {
      url: sitePageUrl("/"),
      lastModified,
      changeFrequency: "weekly",
      priority: 1,
    },
    {
      url: sitePageUrl("/privacy"),
      lastModified,
      changeFrequency: "yearly",
      priority: 0.3,
    },
    {
      url: sitePageUrl("/disclaimer"),
      lastModified,
      changeFrequency: "yearly",
      priority: 0.3,
    },
  ];
}
