import type { Metadata } from "next";
import EstimateHero from "./components/EstimateHero";
import CalculatorSection from "./components/CalculatorSection";
import QuoteFormSection from "./components/QuoteFormSection";
import WhatHappensNext from "./components/WhatHappensNext";
import EstimateFaq, { estimateFaqs } from "./components/EstimateFaq";
import CtaBanner from "@/components/ui/CtaBanner";
import TrustMarquee from "@/components/ui/TrustMarquee";
import JsonLd from "@/components/seo/JsonLd";
import { faqSchema, localBusinessSchema } from "@/components/seo/schema";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Free Roof Estimate & Instant Cost Calculator",
  description:
    "Estimate your roof replacement cost in seconds with our free calculator, then request a free on-site inspection and written estimate from Carolina Roof Repair. Serving the Carolinas.",
  alternates: { canonical: "/estimate" },
  openGraph: {
    url: "/estimate",
    title: "Free Roof Estimate & Cost Calculator | Carolina Roof Repair",
    description:
      "Use the instant roofing calculator to build a planning range, then request a free written estimate and inspection.",
    images: [{ url: "/images/roof-pic.jpg", alt: "Roof estimate" }],
  },
};

export default function EstimatePage() {
  return (
    <>
      <EstimateHero />
      <TrustMarquee />
      <CalculatorSection />
      <QuoteFormSection />
      <WhatHappensNext />
      <EstimateFaq />
      <CtaBanner
        eyebrow="No pressure, ever"
        title="A better roof starts with a better conversation."
        description={`Call ${site.phoneDisplay}, email ${site.email}, or use the form above. We will bring photos, samples and honest options to your free inspection.`}
        primaryHref="#request"
        primaryLabel="Request my estimate"
        secondaryHref={site.phoneHref}
        secondaryLabel={site.phoneDisplay}
      />
      <JsonLd data={localBusinessSchema()} />
      <JsonLd data={faqSchema(estimateFaqs)} />
    </>
  );
}
