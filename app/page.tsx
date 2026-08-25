import type { Metadata } from "next";
import { BuyerChecklist } from "@/components/BuyerChecklist";
import { DeveloperSection } from "@/components/DeveloperSection";
import { FaqSection } from "@/components/FaqSection";
import { FinalCta } from "@/components/FinalCta";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { HomeCollection } from "@/components/HomeCollection";
import { JsonLd } from "@/components/JsonLd";
import { LocationSection } from "@/components/LocationSection";
import { MobileStickyCta } from "@/components/MobileStickyCta";
import { PricingStatus } from "@/components/PricingStatus";
import { ProjectDefinition } from "@/components/ProjectDefinition";
import { ProjectFacts } from "@/components/ProjectFacts";
import { RegistrationBenefits } from "@/components/RegistrationBenefits";
import { SectionEngagement } from "@/components/SectionEngagement";
import { sitePageUrl } from "@/lib/site-config";

export const metadata: Metadata = {
  alternates: {
    canonical: sitePageUrl("/"),
  },
  openGraph: {
    url: sitePageUrl("/"),
  },
};

export default function Home() {
  return (
    <>
      <JsonLd />
      <Header />
      <main id="main" className="pb-24 lg:pb-0">
        <Hero />
        <ProjectDefinition />
        <ProjectFacts />
        <RegistrationBenefits />
        <HomeCollection />
        <PricingStatus />
        <LocationSection />
        <DeveloperSection />
        <BuyerChecklist />
        <FaqSection />
        <FinalCta />
      </main>
      <Footer />
      <MobileStickyCta />
      <SectionEngagement />
    </>
  );
}
