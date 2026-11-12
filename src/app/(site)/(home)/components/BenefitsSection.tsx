import Link from "next/link";
import Icon from "@/components/ui/Icon";
import Reveal from "@/components/ui/Reveal";
import SectionHeading from "@/components/ui/SectionHeading";
import { benefits } from "@/lib/site";

export default function BenefitsSection() {
  return (
    <section className="section relative overflow-hidden">
      <div className="pointer-events-none absolute -left-24 bottom-10 size-72 rounded-full bg-sky/60 blur-3xl" />
      <div className="container-x relative grid gap-12 lg:grid-cols-[0.82fr_1.18fr] lg:gap-14">
        <div className="lg:sticky lg:top-28 lg:self-start">
          <SectionHeading
            eyebrow="Why Carolina Roof Repair"
            title={
              <>
                Local people.
                <br />
                <span className="text-gradient-dark italic">Lasting work.</span>
              </>
            }
            description="We aligned ourselves with the best people and products in the industry so our clients get world-class roofing solutions with an expert and honest team."
          />

          <div className="mt-8 rounded-3xl bg-ink p-6 text-white">
            <Icon name="quote" className="size-7 text-gold/70" />
            <p className="mt-3 font-display text-xl leading-snug text-white/90">
              &ldquo;A roof should protect your family for decades — not create a
              new problem every season.&rdquo;
            </p>
            <p className="mt-3 text-[11px] font-bold uppercase tracking-[0.14em] text-white/45">
              The Carolina Roof Repair standard
            </p>
            <div className="mt-5 grid gap-2 border-t border-white/10 pt-4">
              {[
                "Honest repair-versus-replace guidance",
                "Photos before, during and after",
                "Manufacturer-backed materials",
                "Clean sites and respectful crews",
              ].map((item) => (
                <p key={item} className="flex items-center gap-2 text-xs text-white/65">
                  <Icon name="check" className="size-3.5 text-moss-soft" strokeWidth={2.5} />
                  {item}
                </p>
              ))}
            </div>
            <Link href="/about" className="mt-5 inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.12em] text-gold hover:text-white">
              Meet the team
              <Icon name="arrowRight" className="size-3.5" />
            </Link>
          </div>
        </div>

        <div className="grid gap-4 sm:grid-cols-2">
          {benefits.map((benefit, index) => (
            <Reveal key={benefit.title} delay={(index % 2) * 80}>
              <div className="group h-full rounded-3xl border border-line/70 bg-white p-6 transition-all duration-300 hover:-translate-y-1 hover:border-copper/40 hover:shadow-[0_24px_55px_-35px_rgba(8,28,46,0.5)]">
                <span className="grid size-11 place-items-center rounded-2xl bg-cream text-copper transition-colors group-hover:bg-copper group-hover:text-white">
                  <Icon name={benefit.icon} className="size-5" />
                </span>
                <h3 className="mt-4 font-display text-lg text-ink">{benefit.title}</h3>
                <p className="mt-1.5 text-sm leading-relaxed text-muted">
                  {benefit.description}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
