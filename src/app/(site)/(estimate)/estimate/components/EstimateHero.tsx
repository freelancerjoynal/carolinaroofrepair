import PageHero from "@/components/ui/PageHero";
import Icon from "@/components/ui/Icon";
import { site } from "@/lib/site";

export default function EstimateHero() {
  return (
    <PageHero
      eyebrow="Free estimate"
      title={
        <>
          Know your number
          <br />
          <span className="text-gradient italic">before you commit.</span>
        </>
      }
      description="Start with a realistic planning range from our instant calculator, then turn it into a free on-site inspection and written proposal from a local, certified crew."
      image="/images/roof-pic.jpg"
      imageAlt="Residential roof ready for inspection"
      crumbs={[{ label: "Home", href: "/" }, { label: "Estimate" }]}
    >
      <a href="#calculator" className="btn btn-primary">
        Open the calculator
        <Icon name="calculator" className="size-4" />
      </a>
      <a href={site.phoneHref} className="btn btn-outline">
        <Icon name="phone" className="size-4" />
        {site.phoneDisplay}
      </a>
    </PageHero>
  );
}
