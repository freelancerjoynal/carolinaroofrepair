import Icon from "@/components/ui/Icon";
import Reveal from "@/components/ui/Reveal";
import SectionHeading from "@/components/ui/SectionHeading";
import { processSteps } from "@/lib/site";

export default function PromiseSection() {
  return (
    <section className="section relative isolate overflow-hidden bg-ink text-white">
      <div className="absolute inset-0 bg-grid-light opacity-40" />
      <div className="pointer-events-none absolute -left-20 top-0 size-96 rounded-full bg-copper/20 blur-3xl" />
      <div className="pointer-events-none absolute -right-24 bottom-0 size-96 rounded-full bg-moss/25 blur-3xl" />

      <div className="container-x relative">
        <SectionHeading
          align="center"
          theme="dark"
          eyebrow="Our promise"
          title={
            <>
              The same care at every
              <br />
              <span className="text-gradient italic">step of the project.</span>
            </>
          }
          description="A roofing project is a chain of small decisions. We make each one visible, explain the trade-offs and keep you informed from the first inspection to the final walkthrough."
        />

        <div className="mt-11 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {processSteps.map((step, index) => (
            <Reveal key={step.number} delay={index * 80}>
              <div className="h-full rounded-3xl border border-white/10 bg-white/[0.04] p-5 transition-colors hover:border-gold/30 hover:bg-white/[0.07]">
                <div className="flex items-center justify-between">
                  <span className="grid size-11 place-items-center rounded-2xl bg-gold/15 text-gold">
                    <Icon name={step.icon} className="size-5" />
                  </span>
                  <span className="font-display text-3xl text-white/15">
                    {step.number}
                  </span>
                </div>
                <h3 className="mt-4 font-display text-lg text-white">{step.title}</h3>
                <p className="mt-1.5 text-sm leading-relaxed text-white/55">
                  {step.description}
                </p>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal delay={140}>
          <div className="mx-auto mt-8 flex max-w-2xl items-start gap-3 rounded-2xl border border-gold/20 bg-gold/[0.06] p-4">
            <Icon name="shieldCheck" className="mt-0.5 size-5 shrink-0 text-gold" />
            <p className="text-xs leading-relaxed text-white/65">
              Certified and insured crews, manufacturer-backed materials and a
              written scope before work begins. If something changes, you hear it
              from us first — not from a surprise line on the invoice.
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
