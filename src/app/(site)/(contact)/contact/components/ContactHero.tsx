import PageHero from "@/components/ui/PageHero";
import Icon from "@/components/ui/Icon";
import { site } from "@/lib/site";

export default function ContactHero() {
  return (
    <PageHero
      eyebrow="Contact us"
      title={
        <>
          Let&apos;s talk
          <br />
          <span className="text-gradient italic">about your roof.</span>
        </>
      }
      description="Call, email or send a message. Whether it is an active leak or a project you are planning for next year, a local member of our team will get back to you quickly."
      image="/images/2148748774-1.jpg"
      imageAlt="Carolina Roof Repair crew member on a roof"
      crumbs={[{ label: "Home", href: "/" }, { label: "Contact" }]}
    >
      <a href={site.phoneHref} className="btn btn-primary">
        <Icon name="phone" className="size-4" />
        {site.phoneDisplay}
      </a>
      <a href={site.emailHref} className="btn btn-outline">
        <Icon name="mail" className="size-4" />
        Email us
      </a>
    </PageHero>
  );
}
