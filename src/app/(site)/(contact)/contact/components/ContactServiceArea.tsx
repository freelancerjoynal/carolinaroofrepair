import Link from "next/link";
import Icon from "@/components/ui/Icon";
import Reveal from "@/components/ui/Reveal";
import SectionHeading from "@/components/ui/SectionHeading";
import { serviceAreas, site } from "@/lib/site";

export default function ContactServiceArea() {
  return (
    <section className="section-tight relative overflow-hidden bg-white">
      <div className="absolute inset-0 bg-grid opacity-40" />
      <div className="container-x relative grid items-center gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:gap-14">
        <SectionHeading
          eyebrow="Service area"
          title={
            <>
              Proudly local.
              <br />
              <span className="text-gradient-dark italic">Across both Carolinas.</span>
            </>
          }
          description="Based in Norwood, NC, our crews regularly serve homeowners and businesses through central and western North Carolina and upstate South Carolina. Not sure if you are in range? Ask — we travel for larger projects and storm response."
        >
          <div className="mt-6 flex flex-wrap items-center gap-3">
            <Link href="/estimate" className="btn btn-primary">
              Check my address
              <Icon name="arrowRight" className="size-4" />
            </Link>
            <span className="flex items-center gap-2 text-xs font-semibold text-muted">
              <Icon name="mapPin" className="size-4 text-copper" />
              {site.address.full}
            </span>
          </div>
        </SectionHeading>

        <Reveal direction="right">
          <div className="relative overflow-hidden rounded-3xl bg-ink p-6 text-white sm:p-8">
            <div className="absolute inset-0 bg-grid-light opacity-40" />
            <div className="pointer-events-none absolute -right-10 -top-10 size-52 rounded-full bg-copper/25 blur-3xl" />
            <div className="relative">
              <div className="flex items-center justify-between">
                <p className="text-[10px] font-bold uppercase tracking-[0.16em] text-gold">
                  Cities we serve
                </p>
                <span className="flex items-center gap-1.5 text-[10px] font-semibold text-white/50">
                  <span className="size-1.5 rounded-full bg-moss-soft" />
                  Accepting projects
                </span>
              </div>
              <div className="mt-4 flex flex-wrap gap-1.5">
                {serviceAreas.map((area) => (
                  <span
                    key={area}
                    className="rounded-full border border-white/10 bg-white/[0.06] px-3 py-1.5 text-[11px] font-semibold text-white/70 transition-colors hover:border-gold/40 hover:text-gold"
                  >
                    {area}
                  </span>
                ))}
              </div>
              <p className="mt-5 flex items-start gap-2 border-t border-white/10 pt-4 text-[11px] leading-relaxed text-white/45">
                <Icon name="route" className="mt-0.5 size-4 shrink-0 text-gold/70" />
                Outside these cities? Call{" "}
                <a
                  href={site.phoneHref}
                  className="font-semibold text-white/70 underline underline-offset-2"
                >
                  {site.phoneDisplay}
                </a>{" "}
                and we will let you know whether your project is a fit.
              </p>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
