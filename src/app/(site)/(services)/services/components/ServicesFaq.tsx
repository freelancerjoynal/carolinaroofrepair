import Accordion from "@/components/ui/Accordion";
import Icon from "@/components/ui/Icon";
import Reveal from "@/components/ui/Reveal";
import SectionHeading from "@/components/ui/SectionHeading";
import { site } from "@/lib/site";
import type { Faq } from "@/lib/types";

export const faqs: Faq[] = [
  {
    question: "Are estimates and inspections really free?",
    answer:
      "Yes. On-site roof inspections and written estimates are free across our service area. You receive photos, an honest assessment and options — with no obligation to hire us.",
  },
  {
    question: "How long does a roof repair take?",
    answer:
      "Most isolated repairs are completed in a single visit. Larger repairs, specialty materials or dry-in work may take longer depending on weather and material availability. We give you a realistic window before we start.",
  },
  {
    question: "Do you help with insurance claims?",
    answer:
      "We document storm damage with detailed photos and provide reports you can share with your insurer. The claim itself is filed by you, the homeowner, but we help make the documentation as clear as possible.",
  },
  {
    question: "Will my project need a permit?",
    answer:
      "Many roof replacements require a local permit; some repairs do not. We confirm the requirements for your municipality and include applicable permits in the written proposal so there are no surprises.",
  },
  {
    question: "What kind of warranty comes with the work?",
    answer:
      "Manufacturer warranties depend on the product selected. Our workmanship is backed by a labor warranty, and we discuss extended labor warranty options and complete roof system maintenance before you commit.",
  },
  {
    question: "Can you repair a roof another company installed?",
    answer:
      "Absolutely. We inspect the existing system first, identify the cause of the problem and recommend the least invasive repair that will actually solve it. We do not require you to replace a roof that can still be serviced.",
  },
];

export default function ServicesFaq() {
  return (
    <section className="section relative overflow-hidden">
      <div className="pointer-events-none absolute -left-20 bottom-0 size-72 rounded-full bg-sky/60 blur-3xl" />
      <div className="container-x relative grid gap-10 lg:grid-cols-[0.78fr_1.22fr] lg:gap-16">
        <div>
          <SectionHeading
            eyebrow="Service questions"
            title={
              <>
                Before you
                <br />
                <span className="text-gradient-dark italic">sign anything.</span>
              </>
            }
            description="The details that matter when you are choosing a roofer in the Carolinas."
          />
          <div className="mt-7 rounded-3xl bg-ink p-6 text-white">
            <p className="text-[10px] font-bold uppercase tracking-[0.16em] text-gold">
              Need a person?
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
            <div className="mt-4 flex items-start gap-2 border-t border-white/10 pt-4 text-[11px] leading-relaxed text-white/45">
              <Icon name="clock" className="mt-0.5 size-3.5 shrink-0 text-gold" />
              Mon 10am–5pm · Tue–Thu 9am–6pm · email 24/7
            </div>
          </div>
        </div>
        <Reveal>
          <div className="rounded-3xl border border-line/70 bg-white p-5 sm:p-7">
            <Accordion items={faqs} />
          </div>
        </Reveal>
      </div>
    </section>
  );
}
