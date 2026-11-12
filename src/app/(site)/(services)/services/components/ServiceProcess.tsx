import Icon from "@/components/ui/Icon";
import Reveal from "@/components/ui/Reveal";
import SectionHeading from "@/components/ui/SectionHeading";
import { processSteps } from "@/lib/site";

export default function ServiceProcess() {
  return (
    <section className="section relative overflow-hidden bg-cream">
      <div className="pointer-events-none absolute right-0 top-20 size-72 rounded-full bg-gold/15 blur-3xl" />
      <div className="container-x relative grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:gap-16">
        <div className="lg:sticky lg:top-28 lg:self-start">
          <SectionHeading
            eyebrow="How a project runs"
            title={
              <>
                Calm, clear and
                <br />
                <span className="text-gradient-dark italic">fully documented.</span>
              </>
            }
            description="You should never wonder what happens next. Here is the same four-step process we use on every repair, replacement and inspection."
          />
          <div className="mt-7 flex items-center gap-3 rounded-2xl border border-line/70 bg-white p-4">
            <span className="grid size-10 place-items-center rounded-full bg-copper/10 text-copper">
              <Icon name="clock" className="size-4.5" />
            </span>
            <p className="text-xs leading-relaxed text-muted">
              Most calls are answered the same business day. Emergency tarping is
              prioritized.
            </p>
          </div>
        </div>

        <div className="relative space-y-4">
          <div className="absolute bottom-8 left-6 top-8 w-px bg-line lg:left-7" />
          {processSteps.map((step, index) => (
            <Reveal key={step.number} delay={index * 90}>
              <div className="relative flex gap-4 rounded-3xl border border-line/70 bg-white p-5 shadow-[0_18px_45px_-40px_rgba(8,28,46,0.5)] sm:gap-5 sm:p-6">
                <div className="relative z-10 grid size-12 shrink-0 place-items-center rounded-2xl bg-ink text-gold sm:size-14">
                  <Icon name={step.icon} className="size-5 sm:size-6" />
                </div>
                <div>
                  <span className="text-[10px] font-bold uppercase tracking-[0.16em] text-copper">
                    Step {step.number}
                  </span>
                  <h3 className="mt-1 font-display text-xl text-ink">{step.title}</h3>
                  <p className="mt-1.5 text-sm leading-relaxed text-muted">
                    {step.description}
                  </p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
