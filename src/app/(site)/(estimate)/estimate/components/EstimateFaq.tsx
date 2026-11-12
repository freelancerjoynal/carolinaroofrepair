import Accordion from "@/components/ui/Accordion";
import Icon from "@/components/ui/Icon";
import Reveal from "@/components/ui/Reveal";
import SectionHeading from "@/components/ui/SectionHeading";
import { site } from "@/lib/site";
import type { Faq } from "@/lib/types";

export const estimateFaqs: Faq[] = [
  {
    question: "Is the calculator estimate the same as a quote?",
    answer:
      "No. It is a planning range based on typical installed costs for your roof size, material, pitch, stories and chosen extras. Decking condition, access, code requirements and material availability can move the final number. The free on-site inspection is what produces a real written quote.",
  },
  {
    question: "What does the estimate range include?",
    answer:
      "The range includes materials, labor, standard permits, tear-off and disposal when selected, plus cleanup and haul-away. It does not include structural repairs, unusual access equipment or specialty work discovered during the inspection — those are itemized separately before any work begins.",
  },
  {
    question: "Do you charge for the inspection?",
    answer:
      "On-site roof inspections and written estimates are free across our Carolinas service area. You receive photos, an honest assessment and repair and replacement options with no obligation.",
  },
  {
    question: "How accurate is the roof area estimate?",
    answer:
      "An average single-story home has roughly 1,200 to 3,000 square feet of roof surface once pitch and overhangs are counted. If you know your home's footprint, multiply by about 1.3 to account for slope and overhangs, then adjust for porches or garages. The inspection confirms the exact measurement.",
  },
  {
    question: "Can I finance the project?",
    answer:
      "Yes. We offer home improvement financing through EnerBank USA for repairs, replacements, gutters and upgrades. Financing is subject to credit approval; ask our office for current terms and details.",
  },
];

export default function EstimateFaq() {
  return (
    <section className="section relative overflow-hidden">
      <div className="pointer-events-none absolute -left-20 bottom-10 size-72 rounded-full bg-sky/60 blur-3xl" />
      <div className="container-x relative grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:gap-16">
        <div>
          <SectionHeading
            eyebrow="Estimate questions"
            title={
              <>
                Smart questions
                <br />
                <span className="text-gradient-dark italic">before you read a quote.</span>
              </>
            }
            description="What the numbers mean, what is included and how to compare two roofing proposals fairly."
          />
          <div className="mt-7 rounded-3xl bg-ink p-6 text-white">
            <p className="text-[10px] font-bold uppercase tracking-[0.16em] text-gold">
              Talk it through
            </p>
            <a
              href={site.phoneHref}
              className="mt-2 flex items-center gap-2 font-display text-2xl hover:text-gold"
            >
              <Icon name="phone" className="size-5 text-gold" />
              {site.phoneDisplay}
            </a>
            <a
              href={site.emailHref}
              className="mt-1 flex items-center gap-2 text-xs text-white/55 hover:text-white"
            >
              <Icon name="mail" className="size-3.5" />
              {site.email}
            </a>
            <p className="mt-4 border-t border-white/10 pt-4 text-[11px] leading-relaxed text-white/45">
              Email support is available 24/7. Office hours are Mon 10am–5pm and
              Tue–Thu 9am–6pm.
            </p>
          </div>
        </div>
        <Reveal>
          <div className="rounded-3xl border border-line/70 bg-white p-5 sm:p-7">
            <Accordion items={estimateFaqs} />
          </div>
        </Reveal>
      </div>
    </section>
  );
}
