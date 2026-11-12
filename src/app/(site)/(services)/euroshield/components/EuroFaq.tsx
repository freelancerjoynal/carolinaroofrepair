import Accordion from "@/components/ui/Accordion";
import Icon from "@/components/ui/Icon";
import Reveal from "@/components/ui/Reveal";
import SectionHeading from "@/components/ui/SectionHeading";
import { euroshieldFaqs, site } from "@/lib/site";

export default function EuroFaq() {
  return (
    <section className="section relative overflow-hidden">
      <div className="pointer-events-none absolute right-0 top-10 size-80 rounded-full bg-sky/60 blur-3xl" />
      <div className="container-x relative grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:gap-16">
        <div>
          <SectionHeading
            eyebrow="Euroshield questions"
            title={
              <>
                The details
                <br />
                <span className="text-gradient-dark italic">worth knowing.</span>
              </>
            }
            description="What the material is, how it performs and what the warranty really covers."
          />
          <div className="mt-7 rounded-3xl bg-gradient-to-br from-ink to-ink-soft p-6 text-white">
            <div className="flex items-center gap-3">
              <span className="grid size-11 place-items-center rounded-2xl bg-gold/15 text-gold">
                <Icon name="dollar" className="size-5" />
              </span>
              <div>
                <p className="text-[10px] font-bold uppercase tracking-[0.14em] text-white/45">
                  Financing available
                </p>
                <p className="font-display text-lg">EnerBank USA</p>
              </div>
            </div>
            <p className="mt-3 text-xs leading-relaxed text-white/60">
              Do not drain your savings for a premium roof. Ask about home
              improvement financing when you request your estimate.
            </p>
            <a
              href={site.phoneHref}
              className="mt-4 flex items-center justify-between rounded-xl border border-white/15 bg-white/5 px-4 py-3 text-xs font-bold transition-colors hover:bg-white/10"
            >
              {site.phoneDisplay}
              <Icon name="phone" className="size-4 text-gold" />
            </a>
          </div>
        </div>
        <Reveal>
          <div className="rounded-3xl border border-line/70 bg-white p-5 sm:p-7">
            <Accordion items={euroshieldFaqs} />
          </div>
        </Reveal>
      </div>
    </section>
  );
}
