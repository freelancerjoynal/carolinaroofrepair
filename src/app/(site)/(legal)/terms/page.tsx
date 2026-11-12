import type { Metadata } from "next";
import PageHero from "@/components/ui/PageHero";
import TermsContent from "./components/TermsContent";

export const metadata: Metadata = {
  title: "Terms of Use",
  description:
    "Terms of use for the Carolina Roof Repair website, including estimates, calculator results, scheduling, warranties, payments and limitation of liability.",
  alternates: { canonical: "/terms" },
  robots: { index: true, follow: true },
};

export default function TermsPage() {
  return (
    <>
      <PageHero
        eyebrow="Legal"
        title={
          <>
            Terms
            <br />
            <span className="text-gradient italic">of use.</span>
          </>
        }
        description="The ground rules for using this website, our calculator and the information published here."
        image="/images/Hero-Background.jpg"
        imageAlt="Carolina home with a new roof"
        crumbs={[{ label: "Home", href: "/" }, { label: "Terms" }]}
      />
      <TermsContent />
    </>
  );
}
