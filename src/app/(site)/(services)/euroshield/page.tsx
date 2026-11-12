import type { Metadata } from "next";
import EuroshieldHero from "./components/EuroshieldHero";
import IntroSection from "./components/IntroSection";
import ImpactSection from "./components/ImpactSection";
import BenefitsGrid from "./components/BenefitsGrid";
import EcoSection from "./components/EcoSection";
import BeautySection from "./components/BeautySection";
import ComparisonTable from "./components/ComparisonTable";
import StyleGallery from "./components/StyleGallery";
import EuroFaq from "./components/EuroFaq";
import CtaBanner from "@/components/ui/CtaBanner";
import TrustMarquee from "@/components/ui/TrustMarquee";
import JsonLd from "@/components/seo/JsonLd";
import { faqSchema, localBusinessSchema } from "@/components/seo/schema";
import { euroshieldFaqs, site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Euroshield Hail-Proof Roofing | Class 4 Rubber Roofing",
  description:
    "Euroshield rubber roofing in the Carolinas: Class 4 hail resistance, up to 95% recycled content, slate and shake looks, and up to a 50-year lifespan. Installed by Carolina Roof Repair.",
  alternates: { canonical: "/euroshield" },
  openGraph: {
    url: "/euroshield",
    title: "Euroshield Hail-Proof Roofing | Carolina Roof Repair",
    description:
      "Class 4 hail-proof rubber roofing with the look of slate or shake. Recycled materials, unbeatable warranty, expert installation.",
    images: [{ url: "/images/uroshield-1.jpg", alt: "Euroshield rubber roofing" }],
  },
};

export default function EuroshieldPage() {
  return (
    <>
      <EuroshieldHero />
      <TrustMarquee />
      <IntroSection />
      <ImpactSection />
      <BenefitsGrid />
      <EcoSection />
      <BeautySection />
      <ComparisonTable />
      <StyleGallery />
      <EuroFaq />
      <CtaBanner
        eyebrow="Euroshield · Class 4"
        title="Want the roof that shrugs off hail?"
        description={`We will inspect your roof, confirm compatibility and show you the profiles, colors and warranty details. Call ${site.phoneDisplay} or request your free estimate.`}
        primaryLabel="Get a Euroshield estimate"
        secondaryHref="/services"
        secondaryLabel="Compare all services"
      />
      <JsonLd data={localBusinessSchema()} />
      <JsonLd data={faqSchema(euroshieldFaqs)} />
    </>
  );
}
