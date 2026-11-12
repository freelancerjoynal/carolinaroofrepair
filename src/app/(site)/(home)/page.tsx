import type { Metadata } from "next";
import Hero from "./components/Hero";
import TrustMarquee from "@/components/ui/TrustMarquee";
import ServicesSection from "./components/ServicesSection";
import GutterSection from "./components/GutterSection";
import ReplacementSection from "./components/ReplacementSection";
import EuroshieldTeaser from "./components/EuroshieldTeaser";
import ProcessSection from "./components/ProcessSection";
import BenefitsSection from "./components/BenefitsSection";
import FinancingSection from "./components/FinancingSection";
import CalculatorTeaser from "./components/CalculatorTeaser";
import ServiceAreaSection from "./components/ServiceAreaSection";
import FaqSection from "./components/FaqSection";
import CtaBanner from "@/components/ui/CtaBanner";
import JsonLd from "@/components/seo/JsonLd";
import { faqSchema, localBusinessSchema } from "@/components/seo/schema";
import { homeFaqs, site } from "@/lib/site";

export const metadata: Metadata = {
  title: {
    absolute: "Carolina Roof Repair | Hail-Proof Roofing in the Carolinas",
  },
  description:
    "Carolina Roof Repair provides hail-proof Euroshield roofing, roof repair, replacement, inspections, gutters and emergency tarping across North and South Carolina. Free inspections and financing available.",
  alternates: { canonical: "/" },
  openGraph: {
    url: "/",
    title: "Carolina Roof Repair | Hail-Proof Roofing in the Carolinas",
    description:
      "Roof repair, replacement and hail-proof Euroshield roofing for the Carolinas. Free inspections, photo reports and financing.",
    images: [
      {
        url: "/images/heroBg.webp",
        width: 2560,
        height: 1708,
        alt: "Roof installed by Carolina Roof Repair",
      },
    ],
  },
};

export default function HomePage() {
  return (
    <>
      <Hero />
      <TrustMarquee />
      <ServicesSection />
      <GutterSection />
      <ReplacementSection />
      <EuroshieldTeaser />
      <ProcessSection />
      <BenefitsSection />
      <FinancingSection />
      <CalculatorTeaser />
      <ServiceAreaSection />
      <FaqSection />
      <CtaBanner
        title="Your roof has one job. Let's make sure it does it."
        description={`Free inspections across the Carolinas. Call ${site.phoneDisplay} or request an estimate online — we will bring the photos, the options and an honest recommendation.`}
      />
      <JsonLd data={localBusinessSchema()} />
      <JsonLd data={faqSchema(homeFaqs)} />
    </>
  );
}
