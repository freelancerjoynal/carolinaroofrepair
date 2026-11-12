import Icon from "@/components/ui/Icon";
import Reveal from "@/components/ui/Reveal";
import SectionHeading from "@/components/ui/SectionHeading";
import { processSteps } from "@/lib/site";

export default function WhatHappensNext() {
  return (
    <section className="section-tight relative overflow-hidden bg-cream">
      <div className="container-x relative">
        <SectionHeading
          align="center"
          eyebrow="After you submit"
          title={
            <>
              Here is exactly
              <br />
              <span className="text-gradient-dark italic">what happens next.</span>
            </>
          }
          description="No mystery, no endless follow-up. A clear path from your request to a documented, written estimate."
        />

        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {processSteps.map((step, index) => (
            <Reveal key={step.number} delay={index * 80}>
              <div className="relative h-full rounded-3xl border border-line/70 bg-white p-5">
                <div className="flex items-center justify-between">
                  <span className="grid size-11 place-items-center rounded-2xl bg-ink text-gold">
                    <Icon name={step.icon} className="size-5" />
                  </span>
                  <span className="font-display text-3xl text-line">{step.number}</span>
                </div>
                <h3 className="mt-4 font-display text-lg text-ink">{step.title}</h3>
                <p className="mt-1.5 text-sm leading-relaxed text-muted">
                  {step.description}
                </p>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal delay={120}>
          <div className="mx-auto mt-8 flex max-w-2xl items-start gap-3 rounded-2xl border border-moss/20 bg-moss/5 p-4">
            <Icon name="fileText" className="mt-0.5 size-5 shrink-0 text-moss" />
            <p className="text-xs leading-relaxed text-ink/70">
              The written proposal shows repair and replacement options, material
              samples and clear line items. No hidden fees, no pressure to sign on
              the spot.
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
