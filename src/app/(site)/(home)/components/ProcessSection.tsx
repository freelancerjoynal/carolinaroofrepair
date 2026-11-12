import Icon from "@/components/ui/Icon";
import Reveal from "@/components/ui/Reveal";
import SectionHeading from "@/components/ui/SectionHeading";
import { processSteps } from "@/lib/site";

export default function ProcessSection() {
  return (
    <section className="section relative overflow-hidden bg-white">
      <div className="absolute inset-x-0 top-0 h-40 bg-gradient-to-b from-cream to-transparent" />
      <div className="container-x relative">
        <SectionHeading
          align="center"
          eyebrow="The Carolina process"
          title={
            <>
              Four steps.{" "}
              <span className="text-gradient-dark italic">Zero surprises.</span>
            </>
          }
          description="A roof is a big decision. We keep the process transparent, documented and pressure-free from the first phone call to the final walkthrough."
        />

        <div className="relative mt-12">
          <div className="absolute inset-x-[12%] top-7 hidden h-px bg-gradient-to-r from-transparent via-line to-transparent lg:block" />
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4 lg:gap-6">
            {processSteps.map((step, index) => (
              <Reveal key={step.number} delay={index * 90}>
                <div className="group relative h-full rounded-3xl border border-line/70 bg-cream/60 p-6 transition-all duration-300 hover:-translate-y-1 hover:border-copper/40 hover:bg-white hover:shadow-[0_24px_55px_-35px_rgba(8,28,46,0.5)]">
                  <div className="flex items-center justify-between">
                    <span className="font-display text-4xl text-line transition-colors group-hover:text-copper/30">
                      {step.number}
                    </span>
                    <span className="grid size-11 place-items-center rounded-2xl bg-white text-copper shadow-sm transition-colors group-hover:bg-copper group-hover:text-white">
                      <Icon name={step.icon} className="size-5" />
                    </span>
                  </div>
                  <h3 className="mt-5 font-display text-xl text-ink">{step.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted">
                    {step.description}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>

        <Reveal delay={150}>
          <div className="mx-auto mt-9 flex max-w-xl items-center justify-center gap-3 rounded-full border border-moss/20 bg-moss/5 px-5 py-3 text-center">
            <Icon name="shieldCheck" className="size-4 shrink-0 text-moss" />
            <p className="text-xs font-semibold text-ink/70">
              Every estimate is free, written and backed by photos of your actual roof.
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
