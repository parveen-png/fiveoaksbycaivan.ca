"use client";

import { useEffect } from "react";
import { track } from "@/components/analytics-client";

const SECTION_IDS = [
  "overview",
  "homes",
  "location",
  "faqs",
  "register",
] as const;

export function SectionEngagement() {
  useEffect(() => {
    const seen = new Set<string>();
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (!entry.isIntersecting || !entry.target.id) {
            continue;
          }
          if (seen.has(entry.target.id)) {
            continue;
          }
          seen.add(entry.target.id);
          track("section_engagement", { section: entry.target.id });
        }
      },
      { threshold: 0.4 },
    );

    for (const id of SECTION_IDS) {
      const node = document.getElementById(id);
      if (node) {
        observer.observe(node);
      }
    }

    return () => observer.disconnect();
  }, []);

  return null;
}
