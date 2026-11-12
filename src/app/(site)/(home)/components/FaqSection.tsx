import Accordion from "@/components/ui/Accordion";
import Icon from "@/components/ui/Icon";
import Reveal from "@/components/ui/Reveal";
import SectionHeading from "@/components/ui/SectionHeading";
import { homeFaqs, site } from "@/lib/site";

export default function FaqSection() {
  return (
    <section id="faq" className="section relative overflow-hidden bg-cream">
      <div className="pointer-events-none absolute -right-24 top-1/3 size-80 rounded-full bg-sky/60 blur-3xl" />
      <div className="container-x relative grid gap-10 lg:grid-cols-[0.78fr_1.22fr] lg:gap-16">
        <div>
          <SectionHeading
            eyebrow="Questions, answered"
            title={
              <>
                Good questions.
                <br />
                <span className="text-gradient-dark italic">Straight answers.</span>
              </>
            }
            description="Roofing has a lot of jargon and a lot of sales pressure. Here are the answers we give most often — without the runaround."
          />

          <div className="mt-8 rounded-3xl border border-line/70 bg-white p-6">
            <div className="flex items-center gap-3">
              <span className="grid size-11 place-items-center rounded-2xl bg-copper/10 text-copper">
                <Icon name="phone" className="size-5" />
              </span>
              <div>
                <p className="text-[10px] font-bold uppercase tracking-[0.14em] text-muted">
                  Still unsure?
                </p>
                <p className="font-display text-lg text-ink">Talk to a real person.</p>
              </div>
            </div>
            <a
              href={site.phoneHref}
              className="mt-4 flex items-center justify-between rounded-2xl bg-ink px-4 py-3 text-white transition-colors hover:bg-ink-soft"
            >
              <span className="font-display text-lg">{site.phoneDisplay}</span>
              <Icon name="arrowUpRight" className="size-4 text-gold" />
            </a>
            <a
              href={site.emailHref}
              className="mt-2 flex items-center gap-2 text-xs font-semibold text-muted transition-colors hover:text-copper"
            >
              <Icon name="mail" className="size-3.5" />
              {site.email}
            </a>
            <p className="mt-3 text-[10px] leading-relaxed text-muted/80">
              Office: Mon 10–5 · Tue–Thu 9–6 · Email support 24/7
            </p>
          </div>
        </div>

        <Reveal>
          <div className="rounded-3xl border border-line/70 bg-white p-5 sm:p-7">
            <Accordion items={homeFaqs} />
          </div>
        </Reveal>
      </div>
    </section>
  );
}
