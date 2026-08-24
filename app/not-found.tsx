import Link from "next/link";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Container } from "@/components/ui";

export default function NotFound() {
  return (
    <>
      <Header />
      <main id="main" className="pt-32 pb-24">
        <Container className="max-w-2xl">
          <h1 className="font-display text-4xl tracking-tight text-ink">
            Page not found
          </h1>
          <p className="mt-4 text-lg leading-8 text-ink-muted">
            That page is not available on this Five Oaks informational website.
          </p>
          <Link
            href="/"
            className="mt-8 inline-flex min-h-12 items-center justify-center rounded-full bg-forest px-6 text-sm font-semibold text-white hover:bg-forest-hover"
          >
            Return to Five Oaks information
          </Link>
        </Container>
      </main>
      <Footer />
    </>
  );
}
