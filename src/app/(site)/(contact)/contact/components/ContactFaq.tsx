import Accordion from "@/components/ui/Accordion";
import Icon from "@/components/ui/Icon";
import Reveal from "@/components/ui/Reveal";
import SectionHeading from "@/components/ui/SectionHeading";
import { site } from "@/lib/site";
import type { Faq } from "@/lib/types";

export const contactFaqs: Faq[] = [
  {
    question: "How quickly will someone respond?",
    answer:
      "Most messages receive a response within one business day. Active leaks and storm damage are prioritized, and email is monitored around the clock during severe weather. If your home is actively taking on water, call 704-464-6118 rather than waiting for a form reply.",
  },
  {
    question: "Do I need to be home for the inspection?",
    answer:
      "It helps, but it is not always required. We can inspect the exterior and roof, then follow up by phone with photos and findings. If you want to walk the property together and review material samples, we will schedule a time that works for you.",
  },
  {
    question: "Can you inspect a roof for a real estate transaction?",
    answer:
      "Yes. We provide detailed photo reports for buyers, sellers, real estate agents, property managers and home inspectors. These reports document condition, visible defects and recommended next steps so everyone can make an informed decision.",
  },
  {
    question: "Is there a charge to come out?",
    answer:
      "On-site roof inspections and written estimates are free. If you need a specialized report or a remote digital inspection, let us know and we will explain the scope and any cost up front.",
  },
  {
    question: "How do I pay for work?",
    answer:
      "We accept standard payment methods and offer a secure online payment link. Financing is also available through EnerBank USA for larger projects, subject to credit approval. Ask our office for current terms.",
  },
  {
    question: "Do you work on commercial buildings?",
    answer:
      "Yes. We repair and replace residential and commercial roofing systems, including low-slope and specialty systems. Contact us with the building type and square footage and we will confirm the best approach.",
  },
];

export default function ContactFaq() {
  return (
    <section className="section relative overflow-hidden">
      <div className="pointer-events-none absolute -right-20 bottom-10 size-80 rounded-full bg-sky/60 blur-3xl" />
      <div className="container-x relative grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:gap-16">
        <div>
          <SectionHeading
            eyebrow="Contact questions"
            title={
              <>
                Answers before
                <br />
                <span className="text-gradient-dark italic">you pick up the phone.</span>
              </>
            }
            description="Response times, inspections, payments and everything else people ask before reaching out."
          />
          <div className="mt-7 rounded-3xl border border-line/70 bg-white p-6">
            <div className="flex items-center gap-3">
              <span className="grid size-11 place-items-center rounded-2xl bg-copper/10 text-copper">
                <Icon name="send" className="size-5" />
              </span>
              <div>
                <p className="text-[10px] font-bold uppercase tracking-[0.14em] text-muted">
                  Prefer email?
                </p>
                <p className="font-display text-lg text-ink">We read every message.</p>
              </div>
            </div>
            <a
              href={site.emailHref}
              className="mt-4 flex items-center justify-between gap-3 rounded-2xl bg-ink px-4 py-3 text-white transition-colors hover:bg-ink-soft"
            >
              <span className="break-all text-xs font-bold">{site.email}</span>
              <Icon name="arrowUpRight" className="size-4 shrink-0 text-gold" />
            </a>
            <a
              href={site.paymentUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-2 flex items-center gap-2 px-1 text-xs font-semibold text-muted transition-colors hover:text-copper"
            >
              <Icon name="dollar" className="size-3.5" />
              Make a secure payment
            </a>
          </div>
        </div>
        <Reveal>
          <div className="rounded-3xl border border-line/70 bg-white p-5 sm:p-7">
            <Accordion items={contactFaqs} />
          </div>
        </Reveal>
      </div>
    </section>
  );
}
