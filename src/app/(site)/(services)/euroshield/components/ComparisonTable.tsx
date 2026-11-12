import Icon from "@/components/ui/Icon";
import Reveal from "@/components/ui/Reveal";
import SectionHeading from "@/components/ui/SectionHeading";
import { comparisonRows } from "@/lib/services";

export default function ComparisonTable() {
  return (
    <section className="section relative overflow-hidden bg-cream">
      <div className="container-x relative">
        <SectionHeading
          align="center"
          eyebrow="Side by side"
          title={
            <>
              Euroshield vs.
              <br />
              <span className="text-gradient-dark italic">a traditional roof.</span>
            </>
          }
          description="Traditional roofs are not bad roofs. They are simply designed for a shorter service life and a different level of weather risk."
        />

        <Reveal className="mx-auto mt-10 max-w-4xl">
          <div className="overflow-hidden rounded-3xl border border-line/70 bg-white shadow-[0_25px_60px_-45px_rgba(8,28,46,0.45)]">
            <div className="grid grid-cols-[1.1fr_1fr_1fr] bg-ink text-white sm:grid-cols-[1.2fr_1.1fr_1fr]">
              <div className="p-4 text-[10px] font-bold uppercase tracking-[0.14em] text-white/50 sm:p-5">
                Compare
              </div>
              <div className="relative bg-copper/15 p-4 sm:p-5">
                <div className="flex items-center gap-2">
                  <Icon name="shieldCheck" className="size-4 text-gold" />
                  <span className="text-xs font-extrabold sm:text-sm">Euroshield</span>
                </div>
                <span className="mt-1 block text-[9px] font-semibold uppercase tracking-[0.1em] text-gold/70">
                  Recommended
                </span>
              </div>
              <div className="p-4 sm:p-5">
                <span className="text-xs font-extrabold text-white/70 sm:text-sm">
                  Traditional
                </span>
                <span className="mt-1 block text-[9px] font-semibold uppercase tracking-[0.1em] text-white/35">
                  Asphalt / wood
                </span>
              </div>
            </div>

            {comparisonRows.map((row, index) => (
              <div
                key={row.label}
                className={`grid grid-cols-[1.1fr_1fr_1fr] text-sm sm:grid-cols-[1.2fr_1.1fr_1fr] ${
                  index % 2 === 1 ? "bg-cream/60" : "bg-white"
                }`}
              >
                <div className="border-t border-line/60 p-4 text-[11px] font-bold uppercase tracking-[0.06em] text-muted sm:p-5 sm:text-xs">
                  {row.label}
                </div>
                <div className="border-t border-line/60 bg-copper/[0.03] p-4 text-xs font-semibold text-ink sm:p-5 sm:text-sm">
                  <span className="flex items-start gap-2">
                    <Icon name="checkCircle" className="mt-0.5 size-3.5 shrink-0 text-moss" />
                    {row.euroshield}
                  </span>
                </div>
                <div className="border-t border-line/60 p-4 text-xs text-muted sm:p-5 sm:text-sm">
                  <span className="flex items-start gap-2">
                    <Icon name="close" className="mt-0.5 size-3.5 shrink-0 text-muted/40" />
                    {row.traditional}
                  </span>
                </div>
              </div>
            ))}
          </div>
          <p className="mt-3 text-center text-[10px] text-muted">
            Product performance varies by profile and installation. Ask for current
            manufacturer documentation and warranty details.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
