import Link from "next/link";
import { ExternalLink } from "@/components/ExternalLink";
import { copy, project } from "@/lib/project-data";
import { siteConfig } from "@/lib/site-config";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-stone bg-paper-muted">
      <div className="mx-auto max-w-6xl px-5 py-14 sm:px-6 lg:px-8">
        <div className="grid gap-10 md:grid-cols-2">
          <div>
            <p className="font-display text-xl text-ink">
              {project.name} informational site
            </p>
            <p className="mt-3 text-sm leading-6 text-ink-muted">
              Independent project information for {project.name} in{" "}
              {project.municipality}. Developer: {project.developer}.
            </p>
          </div>
          <div>
            <h2 className="text-sm font-semibold tracking-wide text-ink">Site</h2>
            <ul className="mt-3 space-y-2 text-sm leading-6 text-ink">
              <li>
                <Link className="underline underline-offset-2" href="/privacy">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link className="underline underline-offset-2" href="/disclaimer">
                  Terms / Disclaimer
                </Link>
              </li>
              <li>
                <ExternalLink href={project.officialProjectUrl}>
                  Official Five Oaks page
                </ExternalLink>
              </li>
            </ul>
            {siteConfig.siteUrlConfigured ? (
              <p className="mt-4 text-xs leading-5 text-ink-muted">
                Domain: {siteConfig.domainDisplay}
              </p>
            ) : null}
          </div>
        </div>
        <div className="mt-10 border-t border-stone pt-8">
          <p className="max-w-4xl text-sm leading-6 text-ink">
            {copy.legalFooterDisclosure}
          </p>
          <p className="mt-6 text-sm text-ink-muted">
            © {year} Five Oaks informational site. This website is not operated
            by {project.developer}.
          </p>
        </div>
      </div>
    </footer>
  );
}
