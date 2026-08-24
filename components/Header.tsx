import Link from "next/link";
import { copy, project } from "@/lib/project-data";

const links = [
  { href: "/#overview", label: "Overview" },
  { href: "/#homes", label: "Homes" },
  { href: "/#location", label: "Location" },
  { href: "/#faqs", label: "FAQs" },
];

export function Header() {
  return (
    <header className="absolute inset-x-0 top-0 z-50 border-b border-white/10 bg-forest/80 backdrop-blur-md">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-3 px-5 py-4 sm:px-6 lg:px-8">
        <Link
          href="/#top"
          className="shrink-0 text-lg font-bold tracking-wide text-white"
        >
          {project.name}
          <span className="text-white/70 font-normal"> • Oakville</span>
        </Link>
        <nav aria-label="Primary" className="hidden items-center gap-7 lg:flex">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-white/80 transition-colors hover:text-white"
            >
              {link.label}
            </Link>
          ))}
        </nav>
        <div className="flex items-center gap-3">
          <Link
            href="/#register"
            className="btn-primary min-h-10 px-4 text-sm"
          >
            {project.primaryCta}
          </Link>
          <details className="relative lg:hidden">
            <summary className="flex min-h-10 min-w-10 cursor-pointer list-none items-center justify-center rounded-md border border-white/20 bg-white/10 text-white [&::-webkit-details-marker]:hidden">
              <span className="sr-only">Open menu</span>
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="4" x2="20" y1="12" y2="12"/><line x1="4" x2="20" y1="6" y2="6"/><line x1="4" x2="20" y1="18" y2="18"/></svg>
            </summary>
            <div className="absolute right-0 z-50 mt-2 w-48 rounded-lg border border-stone bg-paper-elevated p-3 shadow-xl">
              <nav aria-label="Mobile">
                <ul className="flex flex-col gap-1">
                  {links.map((link) => (
                    <li key={link.href}>
                      <Link
                        href={link.href}
                        className="block rounded-md px-3 py-2.5 text-sm font-medium text-ink hover:bg-paper-muted"
                      >
                        {link.label}
                      </Link>
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
