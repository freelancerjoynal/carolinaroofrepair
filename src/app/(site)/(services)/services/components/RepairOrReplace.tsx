import Link from "next/link";
import Icon from "@/components/ui/Icon";
import Reveal from "@/components/ui/Reveal";
import SectionHeading from "@/components/ui/SectionHeading";
import { site } from "@/lib/site";

const repairSigns = [
  "A single leak with a clearly identifiable cause",
  "Missing or damaged shingles in one area",
  "Flashing or boot failure around a vent or chimney",
  "Storm damage limited to one slope",
  "The roof is well within its service life",
];

const replaceSigns = [
  "Multiple leaks or recurring problems in different areas",
  "Shingles that are curling, cracking or losing granules",
  "The roof is 20+ years old and near end of life",
  "Sagging decking or widespread soft spots",
  "You are planning to sell or insure the home",
];

export default function RepairOrReplace() {
  return (
    <section className="section relative overflow-hidden bg-white">
      <div className="absolute inset-0 bg-grid opacity-40" />
      <div className="container-x relative">
        <SectionHeading
          align="center"
          eyebrow="The honest decision"
          title={
            <>
              Repair or replace?
              <br />
              <span className="text-gradient-dark italic">Here&apos;s how to think about it.</span>
            </>
          }
          description="A good contractor should never push a replacement when a repair will do — or patch a roof that is already failing everywhere. Use this guide, then let our free inspection confirm it."
        />

        <div className="mx-auto mt-10 grid max-w-5xl gap-5 md:grid-cols-2">
          <Reveal direction="left">
            <div className="h-full rounded-3xl border-2 border-moss/20 bg-moss/[0.04] p-6 sm:p-8">
              <div className="flex items-center justify-between">
                <span className="grid size-12 place-items-center rounded-2xl bg-moss text-white">
                  <Icon name="wrench" className="size-5" />
                </span>
                <span className="rounded-full bg-moss/10 px-3 py-1 text-[10px] font-bold uppercase tracking-[0.12em] text-moss">
                  Lower upfront cost
                </span>
              </div>
              <h3 className="mt-5 font-display text-2xl text-ink">
                A repair makes sense when…
              </h3>
              <ul className="mt-4 space-y-3">
                {repairSigns.map((sign) => (
                  <li key={sign} className="flex items-start gap-2.5 text-sm text-ink/75">
                    <Icon name="check" className="mt-0.5 size-4 shrink-0 text-moss" strokeWidth={2.5} />
                    {sign}
                  </li>
                ))}
              </ul>
              <p className="mt-5 rounded-xl bg-white/70 p-3 text-xs leading-relaxed text-muted">
                A targeted repair can add years of life to a sound roof — and
                promptly addressing a minor leak prevents costly interior damage.
              </p>
            </div>
          </Reveal>

          <Reveal direction="right" delay={100}>
            <div className="h-full rounded-3xl border-2 border-copper/25 bg-copper/[0.04] p-6 sm:p-8">
              <div className="flex items-center justify-between">
                <span className="grid size-12 place-items-center rounded-2xl bg-copper text-white">
                  <Icon name="home" className="size-5" />
                </span>
                <span className="rounded-full bg-copper/10 px-3 py-1 text-[10px] font-bold uppercase tracking-[0.12em] text-copper">
                  Long-term value
                </span>
              </div>
              <h3 className="mt-5 font-display text-2xl text-ink">
                A replacement may be smarter when…
              </h3>
              <ul className="mt-4 space-y-3">
                {replaceSigns.map((sign) => (
                  <li key={sign} className="flex items-start gap-2.5 text-sm text-ink/75">
                    <Icon name="check" className="mt-0.5 size-4 shrink-0 text-copper" strokeWidth={2.5} />
                    {sign}
                  </li>
                ))}
              </ul>
              <p className="mt-5 rounded-xl bg-white/70 p-3 text-xs leading-relaxed text-muted">
                A replacement resets the clock on the entire system, improves
                curb appeal and can qualify you for impact-resistant insurance
                discounts.
              </p>
            </div>
          </Reveal>
        </div>

        <Reveal delay={150}>
          <div className="mx-auto mt-6 flex max-w-5xl flex-col items-center justify-between gap-4 rounded-2xl bg-ink px-5 py-4 text-white sm:flex-row sm:px-7">
            <p className="flex items-center gap-3 text-sm text-white/75">
              <Icon name="search" className="size-5 text-gold" />
              Let the photos decide. Free inspection, written recommendation.
            </p>
            <div className="flex flex-wrap gap-2">
              <a href={site.phoneHref} className="btn btn-outline !px-4 !py-2.5 !text-xs">
                <Icon name="phone" className="size-3.5" />
                Call us
              </a>
              <Link href="/estimate" className="btn btn-primary !px-4 !py-2.5 !text-xs">
                Book inspection
                <Icon name="arrowRight" className="size-3.5" />
              </Link>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
