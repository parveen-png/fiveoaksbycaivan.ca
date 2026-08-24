import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import { Analytics } from "@/components/Analytics";
import { JsonLd } from "@/components/JsonLd";
import { serverEnv } from "@/lib/env";
import { seo } from "@/lib/project-data";
import { siteConfig } from "@/lib/site-config";
import "./globals.css";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-poppins",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.siteUrl),
  title: {
    default: seo.title,
    template: "%s | Five Oaks Oakville",
  },
  description: seo.description,
  keywords: [...seo.keywords],
  applicationName: "Five Oaks Oakville project information",
  category: "real estate",
  alternates: {
    canonical: "/",
  },
  robots: siteConfig.noindex
    ? { index: false, follow: false }
    : { index: true, follow: true },
  openGraph: {
    type: "website",
    locale: "en_CA",
    url: siteConfig.siteUrl,
    title: seo.ogTitle,
    description: seo.description,
    siteName: "Five Oaks Oakville project information",
  },
  twitter: {
    card: "summary_large_image",
    title: seo.ogTitle,
    description: seo.description,
  },
  verification: {
    google: serverEnv.googleSearchConsoleVerification,
    other: serverEnv.bingWebmasterVerification
      ? { "msvalidate.01": serverEnv.bingWebmasterVerification }
      : undefined,
  },
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "32x32" },
      { url: "/favicon.svg", type: "image/svg+xml" },
      { url: "/icon", type: "image/png", sizes: "32x32" },
    ],
    apple: "/apple-icon",
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en-CA"
      className={`${poppins.variable} h-full scroll-smooth antialiased`}
    >
      <body className="min-h-full bg-paper font-sans text-ink">
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:absolute focus:top-3 focus:left-3 focus:z-50 focus:rounded-sm focus:bg-paper-elevated focus:px-4 focus:py-3 focus:shadow-sm"
        >
          Skip to main content
        </a>
        <JsonLd />
        <Analytics />
        {children}
      </body>
    </html>
  );
}
