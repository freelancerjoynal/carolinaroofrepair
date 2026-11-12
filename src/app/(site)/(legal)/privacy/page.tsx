import type { Metadata } from "next";
import PageHero from "@/components/ui/PageHero";
import PrivacyContent from "./components/PrivacyContent";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description:
    "How Carolina Roof Repair collects, uses and protects the information you share through our website, estimate requests and project communications.",
  alternates: { canonical: "/privacy" },
  robots: { index: true, follow: true },
};

export default function PrivacyPage() {
  return (
    <>
      <PageHero
        eyebrow="Legal"
        title={
          <>
            Privacy
            <br />
            <span className="text-gradient italic">policy.</span>
          </>
        }
        description="Plain-language answers about what we collect, why we collect it and how to ask us to change or delete it."
        image="/images/secondary-banner.jpg"
        imageAlt="Carolina home exterior"
        crumbs={[{ label: "Home", href: "/" }, { label: "Privacy" }]}
      />
      <PrivacyContent />
    </>
  );
}
