import type { Metadata } from "next";
import ServicesHero from "./components/ServicesHero";
import ServicesGrid from "./components/ServicesGrid";
import RepairOrReplace from "./components/RepairOrReplace";
import ServiceProcess from "./components/ServiceProcess";
import MaintenanceTips from "./components/MaintenanceTips";
import ServicesFaq, { faqs } from "./components/ServicesFaq";
import CtaBanner from "@/components/ui/CtaBanner";
import TrustMarquee from "@/components/ui/TrustMarquee";
import JsonLd from "@/components/seo/JsonLd";
import { faqSchema, localBusinessSchema } from "@/components/seo/schema";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Roofing Services | Repair, Replacement, Inspections & Gutters",
  description:
    "Roof repair, replacement, specialty roofing, inspections, leak diagnosis, emergency tarping and gutters across the Carolinas. Free inspections and written estimates from Carolina Roof Repair.",
  alternates: { canonical: "/services" },
  openGraph: {
    url: "/services",
    title: "Roofing Services | Carolina Roof Repair",
    description:
      "Complete roof care for the Carolinas: repairs, replacements, inspections, leak diagnosis, emergency tarping and gutters.",
    images: [{ url: "/images/roof-repairing-update.jpg", alt: "Roof repair service" }],
  },
};

export default function ServicesPage() {
  return (
    <>
      <ServicesHero />
      <TrustMarquee />
      <ServicesGrid />
      <RepairOrReplace />
      <ServiceProcess />
      <MaintenanceTips />
      <ServicesFaq />
      <CtaBanner
        title="Tell us what the roof is doing. We'll tell you what it needs."
        description={`Free inspection. Photo report. Written options. Call ${site.phoneDisplay} or request your estimate online.`}
        primaryLabel="Request an estimate"
        secondaryHref="/contact"
        secondaryLabel="Contact the office"
      />
      <JsonLd data={localBusinessSchema()} />
      <JsonLd data={faqSchema(faqs)} />
    </>
  );
}
