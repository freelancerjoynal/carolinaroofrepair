import Link from "next/link";
import Icon from "@/components/ui/Icon";
import Reveal from "@/components/ui/Reveal";
import SectionHeading from "@/components/ui/SectionHeading";
import { serviceAreas } from "@/lib/site";

export default function ServiceAreaSection() {
  return (
    <section className="section-tight relative overflow-hidden">
      <div className="container-x relative">
        <div className="grid items-center gap-10 rounded-[2rem] border border-line/70 bg-white p-6 shadow-[0_25px_60px_-45px_rgba(8,28,46,0.4)] sm:p-9 lg:grid-cols-[0.9fr_1.1fr] lg:p-10">
          <div>
            <SectionHeading
              eyebrow="Where we work"
              title={
                <>
                  Proudly local.
                  <br />
                  <span className="text-gradient-dark italic">Across the Carolinas.</span>
                </>
              }
              description="Based in Norwood, NC, our crews regularly serve homeowners and businesses throughout central and western North Carolina and upstate South Carolina."
            />
            <div className="mt-6 flex flex-wrap items-center gap-3">
              <Link href="/contact" className="btn btn-primary">
                Check your area
                <Icon name="arrowRight" className="size-4" />
              </Link>
              <span className="flex items-center gap-2 text-xs font-semibold text-muted">
                <Icon name="mapPin" className="size-4 text-copper" />
                P.O. Box 16, Norwood, NC
              </span>
            </div>
          </div>

          <Reveal direction="right">
            <div className="relative overflow-hidden rounded-3xl bg-ink p-6 text-white sm:p-7">
              <div className="absolute inset-0 bg-grid-light opacity-40" />
              <div className="pointer-events-none absolute -right-10 -top-10 size-44 rounded-full bg-copper/25 blur-2xl" />
              <div className="relative">
                <div className="flex items-center justify-between">
                  <p className="text-[10px] font-bold uppercase tracking-[0.16em] text-gold">
                    Service area
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
                  Outside these cities? We travel for larger projects and storm
                  response. Call {""}
                  <a href="tel:+17044646118" className="font-semibold text-white/70 underline underline-offset-2">
                    704-464-6118
                  </a>{" "}
                  and we will let you know.
                </p>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
