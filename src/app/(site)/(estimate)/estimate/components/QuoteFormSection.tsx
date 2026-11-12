import MultiStepQuoteForm from "@/components/forms/MultiStepQuoteForm";
import SectionHeading from "@/components/ui/SectionHeading";
import Icon from "@/components/ui/Icon";

const assurances = [
  {
    title: "Free and no-obligation",
    description: "A written estimate with photos and options, whether you hire us or not.",
    icon: "shieldCheck" as const,
  },
  {
    title: "One business day",
    description: "A real person reviews your request and follows up quickly.",
    icon: "clock" as const,
  },
  {
    title: "Straight answers",
    description: "Repair-versus-replace guidance based on your roof, not a sales quota.",
    icon: "users" as const,
  },
];

export default function QuoteFormSection() {
  return (
    <section id="request" className="section scroll-mt-24 relative overflow-hidden bg-white">
      <div className="absolute inset-0 bg-grid opacity-40" />
      <div className="pointer-events-none absolute -right-20 top-10 size-80 rounded-full bg-copper/10 blur-3xl" />
      <div className="container-x relative">
        <div className="grid items-start gap-10 lg:grid-cols-[0.78fr_1.22fr] lg:gap-14">
          <div className="lg:sticky lg:top-28">
            <SectionHeading
              eyebrow="Turn it into an estimate"
              title={
                <>
                  Four short steps.
                  <br />
                  <span className="text-gradient-dark italic">One free visit.</span>
                </>
              }
              description="Tell us about the project and the property. We will confirm the details, schedule an inspection and bring a written proposal with you."
            />

            <div className="mt-8 space-y-3">
              {assurances.map((item) => (
                <div
                  key={item.title}
                  className="flex items-start gap-3 rounded-2xl border border-line/70 bg-cream/50 p-4"
                >
                  <span className="grid size-10 shrink-0 place-items-center rounded-xl bg-white text-copper shadow-sm">
                    <Icon name={item.icon} className="size-4.5" />
                  </span>
                  <div>
                    <p className="text-sm font-bold text-ink">{item.title}</p>
                    <p className="mt-0.5 text-xs leading-relaxed text-muted">
                      {item.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-6 rounded-2xl bg-ink p-5 text-white">
              <p className="text-[10px] font-bold uppercase tracking-[0.16em] text-gold">
                Prefer to talk?
              </p>
              <p className="mt-2 text-xs leading-relaxed text-white/60">
                Storm damage and active leaks move to the front of the line. Call
                us and we will prioritize your request.
              </p>
              <a
                href="tel:+17044646118"
                className="mt-3 flex items-center justify-between rounded-xl border border-white/15 bg-white/5 px-4 py-2.5 text-sm font-bold transition-colors hover:bg-white/10"
              >
                704-464-6118
                <Icon name="phone" className="size-4 text-gold" />
              </a>
            </div>
          </div>

          <MultiStepQuoteForm />
        </div>
      </div>
    </section>
  );
}
