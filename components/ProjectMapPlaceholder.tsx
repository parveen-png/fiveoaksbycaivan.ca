import { siteConfig } from "@/lib/site-config";

export function ProjectMapPlaceholder() {
  const coordinates = siteConfig.verifiedProjectCoordinates;

  if (!coordinates) {
    return (
      <div
        className="mt-10 rounded-sm border border-dashed border-stone bg-paper-muted p-6"
        role="note"
      >
        <h3 className="font-display text-xl text-ink">Project map</h3>
        <p className="mt-3 max-w-3xl text-sm leading-6 text-ink-muted">
          A project map is not shown because verified Five Oaks coordinates have
          not been supplied. This placeholder remains disabled until{" "}
          <code className="rounded-sm bg-paper px-1 py-0.5 text-[0.8em]">
            [VERIFIED_PROJECT_COORDINATES]
          </code>{" "}
          are confirmed from official project material.
        </p>
      </div>
    );
  }

  return (
    <div className="mt-10 rounded-sm border border-stone bg-paper-muted p-6">
      <h3 className="font-display text-xl text-ink">Project map</h3>
      <p className="mt-3 text-sm leading-6 text-ink">
        Verified coordinates are on file for operator use and are not published
        here until the official project address is also confirmed for public
        display.
      </p>
    </div>
  );
}
