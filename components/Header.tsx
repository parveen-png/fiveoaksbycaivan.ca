import { copy, project } from "@/lib/project-data";

const links = [
  { href: "#overview", label: "Overview" },
  { href: "#homes", label: "Homes" },
  { href: "#location", label: "Location" },
  { href: "#faqs", label: "FAQs" },
];

export function Header() {
  return (
    <header className="sticky top-0 z-40 border-b border-stone bg-paper/95 backdrop-blur-sm">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-3 px-5 py-3 sm:px-6 lg:px-8">
        <a
          href="#top"
          className="shrink-0 font-display text-base font-medium tracking-tight text-ink sm:text-lg"
        >
          {project.name} • Oakville
        </a>
        <nav aria-label="Primary" className="hidden items-center gap-6 lg:flex">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-ink-muted transition-colors hover:text-ink"
            >
              {link.label}
            </a>
          ))}
        </nav>
        <div className="flex items-center gap-2">
          <a
            href="#register"
            className="inline-flex min-h-11 items-center justify-center rounded-sm bg-forest px-3.5 text-sm font-semibold text-paper transition-colors hover:bg-forest-hover sm:min-h-12 sm:px-5"
          >
            {project.primaryCta}
          </a>
          <details className="relative lg:hidden">
            <summary className="flex min-h-11 min-w-11 cursor-pointer list-none items-center justify-center rounded-sm border border-stone bg-paper-elevated text-sm font-medium text-ink [&::-webkit-details-marker]:hidden">
              <span className="sr-only">Open menu</span>
              <span aria-hidden="true">Menu</span>
            </summary>
            <div className="absolute right-0 z-50 mt-2 w-48 rounded-sm border border-stone bg-paper-elevated p-3 shadow-sm">
              <nav aria-label="Mobile">
                <ul className="flex flex-col gap-1">
                  {links.map((link) => (
                    <li key={link.href}>
                      <a
                        href={link.href}
                        className="block min-h-11 rounded-sm px-3 py-2 text-sm font-medium text-ink hover:bg-paper-muted"
                      >
                        {link.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </nav>
            </div>
          </details>
        </div>
      </div>
      <p className="sr-only">{copy.independentDisclosure}</p>
    </header>
  );
}
