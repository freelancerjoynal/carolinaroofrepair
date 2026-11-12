import type { Metadata } from "next";
import AboutHero from "./components/AboutHero";
import StorySection from "./components/StorySection";
import ValuesSection from "./components/ValuesSection";
import PromiseSection from "./components/PromiseSection";
import CommunitySection from "./components/CommunitySection";
import CtaBanner from "@/components/ui/CtaBanner";
import TrustMarquee from "@/components/ui/TrustMarquee";
import JsonLd from "@/components/seo/JsonLd";
import { localBusinessSchema } from "@/components/seo/schema";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "About Our Local Roofing Team in Norwood, NC",
  description:
    "Meet Carolina Roof Repair — a local, certified roofing team serving North and South Carolina with honest inspections, documented workmanship, Euroshield systems and financing options.",
  alternates: { canonical: "/about" },
  openGraph: {
    url: "/about",
    title: "About Carolina Roof Repair",
    description:
      "A local Carolina roofing team built on honest inspections, documented work and manufacturer-backed materials.",
    images: [{ url: "/images/Mental_Roof.jpg", alt: "Carolina Roof Repair" }],
  },
};

export default function AboutPage() {
  return (
    <>
      <AboutHero />
      <TrustMarquee />
      <StorySection />
      <ValuesSection />
      <PromiseSection />
      <CommunitySection />
      <CtaBanner
        eyebrow="Let's meet"
        title="The best roofing decision starts with a conversation."
        description={`Free inspections across the Carolinas. Call ${site.phoneDisplay}, email ${site.email}, or request an estimate online — we will bring the photos and the options.`}
        primaryHref="/estimate"
        primaryLabel="Get a free estimate"
        secondaryHref="/services"
        secondaryLabel="Explore services"
      />
      <JsonLd data={localBusinessSchema()} />
    </>
  );
}
