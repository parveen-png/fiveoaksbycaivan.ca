"use client";

import { track } from "@/components/analytics-client";
import { project } from "@/lib/project-data";

export function HeroCta() {
  return (
    <a
      href="#register"
      className="inline-flex min-h-12 items-center justify-center rounded-sm bg-forest px-6 text-sm font-semibold text-paper transition-colors hover:bg-forest-hover"
      onClick={() => track("hero_cta_click", { placement: "hero-mobile" })}
    >
      {project.primaryCta}
    </a>
  );
}
