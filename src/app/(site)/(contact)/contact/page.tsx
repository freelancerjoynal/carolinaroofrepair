import type { Metadata } from "next";
import ContactHero from "./components/ContactHero";
import ContactCards from "./components/ContactCards";
import ContactFormSection from "./components/ContactFormSection";
import HoursSection from "./components/HoursSection";
import ContactServiceArea from "./components/ContactServiceArea";
import ContactFaq, { contactFaqs } from "./components/ContactFaq";
import CtaBanner from "@/components/ui/CtaBanner";
import JsonLd from "@/components/seo/JsonLd";
import { faqSchema, localBusinessSchema } from "@/components/seo/schema";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Contact Our Roofing Team | Norwood, NC",
  description:
    "Contact Carolina Roof Repair for roof repair, replacement, Euroshield and inspections across the Carolinas. Call 704-464-6118, email info@carolinaroofrepair.com or send a message online.",
  alternates: { canonical: "/contact" },
  openGraph: {
    url: "/contact",
    title: "Contact Carolina Roof Repair",
    description:
      "Call 704-464-6118 or send a message. Free inspections and written estimates across North and South Carolina.",
    images: [{ url: "/images/2148748774-1.jpg", alt: "Carolina Roof Repair team" }],
  },
};

export default function ContactPage() {
  return (
    <>
      <ContactHero />
      <ContactCards />
      <ContactFormSection />
      <HoursSection />
      <ContactServiceArea />
      <ContactFaq />
      <CtaBanner
        eyebrow="We are here"
        title="One call can stop a small problem from becoming a big one."
        description={`Free inspections across the Carolinas. Call ${site.phoneDisplay}, email ${site.email}, or request an estimate online.`}
        primaryHref="/estimate"
        primaryLabel="Get a free estimate"
        secondaryHref={site.phoneHref}
        secondaryLabel={site.phoneDisplay}
      />
      <JsonLd data={localBusinessSchema()} />
      <JsonLd data={faqSchema(contactFaqs)} />
    </>
  );
}
