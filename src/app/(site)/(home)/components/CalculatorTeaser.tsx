import Link from "next/link";
import Icon from "@/components/ui/Icon";
import Reveal from "@/components/ui/Reveal";
import { calculateEstimate, formatUSD } from "@/lib/estimate";

const sample = calculateEstimate({
  area: 1800,
  material: "euroshield",
  pitch: "medium",
  stories: 1,
  tearOff: true,
  gutters: false,
});

export default function CalculatorTeaser() {
  return (
    <section className="section relative overflow-hidden bg-white">
      <div className="pointer-events-none absolute right-0 top-10 size-80 rounded-full bg-sand/70 blur-3xl" />
      <div className="container-x relative">
        <div className="grid items-center gap-10 rounded-[2.25rem] bg-cream p-6 sm:p-10 lg:grid-cols-2 lg:gap-14 lg:p-12">
          <div>
            <span className="eyebrow">
              <span className="h-px w-7 bg-copper/70" />
              New · Estimate calculator
            </span>
            <h2 className="display-lg mt-4">
              Know the ballpark
              <br />
              <span className="text-gradient-dark italic">before we knock.</span>
            </h2>
            <p className="mt-5 text-base leading-relaxed text-muted">
              Choose your roof size, material, pitch and extras to see a realistic
              installed-cost range in seconds. Then turn it into a free on-site
              estimate with one click.
            </p>
            <ul className="mt-6 space-y-2.5">
              {[
                "Asphalt, metal, tile, cedar and Euroshield",
                "Includes tear-off and gutter options",
                "Instant planning range — no email required",
              ].map((item) => (
                <li key={item} className="flex items-start gap-2.5 text-sm text-ink/75">
                  <Icon name="checkCircle" className="mt-0.5 size-4 shrink-0 text-moss" />
                  {item}
                </li>
              ))}
            </ul>
            <Link href="/estimate" className="btn btn-primary mt-7">
              Try the calculator
              <Icon name="calculator" className="size-4" />
            </Link>
          </div>

          <Reveal direction="right" className="relative">
            <div className="rounded-[1.75rem] border border-line/70 bg-white p-6 shadow-[0_30px_70px_-40px_rgba(8,28,46,0.5)]">
              <div className="flex items-center justify-between">
                <span className="text-[10px] font-bold uppercase tracking-[0.16em] text-muted">
                  Sample · 1,800 sq ft Euroshield
                </span>
                <span className="rounded-full bg-moss/10 px-2.5 py-1 text-[10px] font-bold text-moss">
                  Instant range
                </span>
              </div>
              <p className="mt-4 font-display text-3xl leading-none text-ink sm:text-4xl">
                {formatUSD(sample.low)}
                <span className="mx-1.5 text-xl text-muted/40">–</span>
                {formatUSD(sample.high)}
              </p>
              <p className="mt-1 text-xs font-semibold text-muted">
                ${sample.perSqFtLow.toFixed(2)}–${sample.perSqFtHigh.toFixed(2)} per
                sq ft installed
              </p>

              <div className="mt-5 space-y-4">
                <div>
                  <div className="flex justify-between text-[10px] font-bold uppercase tracking-[0.1em] text-muted">
                    <span>Roof area</span>
                    <span className="text-ink">1,800 sq ft</span>
                  </div>
                  <div className="mt-1.5 h-2 rounded-full bg-line/70">
                    <div className="relative h-full w-[42%] rounded-full bg-copper">
                      <span className="absolute -right-1.5 -top-1 size-4 rounded-full border-2 border-white bg-copper shadow" />
                    </div>
                  </div>
                </div>
                <div className="grid grid-cols-3 gap-2">
                  {[
                    { label: "Material", value: "Euroshield" },
                    { label: "Pitch", value: "Medium" },
                    { label: "Tear-off", value: "Included" },
                  ].map((item) => (
                    <div key={item.label} className="rounded-xl bg-cream px-2.5 py-2">
                      <p className="text-[9px] font-bold uppercase tracking-[0.1em] text-muted">
                        {item.label}
                      </p>
                      <p className="mt-0.5 text-[11px] font-extrabold text-ink">
                        {item.value}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              <div className="mt-5 flex items-center gap-2 rounded-xl bg-gold/10 px-3 py-2.5">
                <Icon name="sparkles" className="size-4 shrink-0 text-[#a06a12]" />
                <p className="text-[10px] font-semibold leading-snug text-[#8a5c10]">
                  Includes materials, labor, tear-off and standard permits.
                </p>
              </div>
            </div>
            <div className="absolute -bottom-4 -right-3 hidden rotate-3 rounded-xl bg-ink px-3 py-2 text-[10px] font-bold uppercase tracking-[0.12em] text-gold shadow-lg sm:block">
              Updated live
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
