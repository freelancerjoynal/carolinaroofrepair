import PageHero from "@/components/ui/PageHero";
import Icon from "@/components/ui/Icon";
import { site } from "@/lib/site";

export default function AboutHero() {
  return (
    <PageHero
      eyebrow="About us"
      title={
        <>
          Local roots.
          <br />
          <span className="text-gradient italic">Carolina standards.</span>
        </>
      }
      description="Carolina Roof Repair is a local, certified team that believes a roof should be documented, explained and built to last — not sold with pressure and forgotten after the invoice."
      image="/images/Mental_Roof.jpg"
      imageAlt="Carolina Roof Repair roofing project"
      crumbs={[{ label: "Home", href: "/" }, { label: "About" }]}
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
