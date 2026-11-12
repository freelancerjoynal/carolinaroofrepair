import PageHero from "@/components/ui/PageHero";
import Icon from "@/components/ui/Icon";
import { site } from "@/lib/site";

export default function ServicesHero() {
  return (
    <PageHero
      eyebrow="Roofing services"
      title={
        <>
          Every roof problem.
          <br />
          <span className="text-gradient italic">One trusted team.</span>
        </>
      }
      description="Repairs, replacements, specialty systems, inspections, leak diagnosis, emergency tarping and gutters — delivered by a certified local crew that documents every step."
      image="/images/roof-repairing-update.jpg"
      imageAlt="Roof repair work on a Carolina home"
      crumbs={[{ label: "Home", href: "/" }, { label: "Services" }]}
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
