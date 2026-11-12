import PageHero from "@/components/ui/PageHero";
import Icon from "@/components/ui/Icon";
import { site } from "@/lib/site";

export default function EuroshieldHero() {
  return (
    <PageHero
      eyebrow="Euroshield® rubber roofing"
      title={
        <>
          The roof that
          <br />
          <span className="text-gradient italic">fights back.</span>
        </>
      }
      description="Luxurious slate and shake looks. Class 4 impact resistance. Up to 95% recycled content. Euroshield is the rubber roofing system built for the worst weather — and the best-looking homes."
      image="/images/uroshield-1.jpg"
      imageAlt="Euroshield roofing installation"
      crumbs={[
        { label: "Home", href: "/" },
        { label: "Services", href: "/services" },
        { label: "Euroshield" },
      ]}
    >
      <a href="/estimate" className="btn btn-primary">
        Get a free estimate
        <Icon name="arrowRight" className="size-4" />
      </a>
      <a href={site.phoneHref} className="btn btn-outline">
        <Icon name="phone" className="size-4" />
        {site.phoneDisplay}
      </a>
    </PageHero>
  );
}
