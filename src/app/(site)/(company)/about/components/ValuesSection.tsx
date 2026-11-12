import Image from "next/image";
import Icon from "@/components/ui/Icon";
import Reveal from "@/components/ui/Reveal";
import SectionHeading from "@/components/ui/SectionHeading";
import { benefits } from "@/lib/site";

const commitments = [
  "We show you photos of your actual roof before recommending anything.",
  "We repair when a repair will do, and say so plainly.",
  "We put the estimate in writing, with options and clear line items.",
  "We respect your property, your schedule and your budget.",
  "We follow up after the project, not just before the invoice.",
];

export default function ValuesSection() {
  return (
    <section className="section relative overflow-hidden bg-white">
      <div className="absolute inset-0 bg-grid opacity-40" />
      <div className="pointer-events-none absolute -right-20 top-20 size-80 rounded-full bg-sand/70 blur-3xl" />
      <div className="container-x relative">
        <div className="grid gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:gap-14">
          <div className="lg:sticky lg:top-28 lg:self-start">
            <SectionHeading
              eyebrow="What we stand for"
              title={
                <>
                  Honest work is
                  <br />
                  <span className="text-gradient-dark italic">the whole strategy.</span>
                </>
              }
              description="Roofing has a reputation for pressure and guesswork. We built our process around the opposite: documentation, clear choices and respect for the person writing the check."
            />

            <div className="mt-7 rounded-3xl bg-ink p-6 text-white">
              <Icon name="quote" className="size-7 text-gold/70" />
              <p className="mt-3 font-display text-xl leading-snug text-white/90">
                &ldquo;The best compliment we get is a customer who says we told
                them the truth — even when the truth was a cheaper repair.&rdquo;
              </p>
              <p className="mt-3 text-[11px] font-bold uppercase tracking-[0.14em] text-white/45">
                The Carolina Roof Repair standard
              </p>
            </div>
          </div>

          <div>
            <Reveal>
              <div className="relative overflow-hidden rounded-[1.75rem] border border-line/70">
                <div className="relative aspect-[16/9]">
                  <Image
                    src="/images/roof-repairing-update.jpg"
                    alt="Roof repair craftsmanship in progress"
                    fill
                    sizes="(max-width: 1024px) 90vw, 52vw"
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-ink/70 via-ink/10 to-transparent" />
                  <div className="absolute inset-x-5 bottom-5">
                    <p className="text-[10px] font-bold uppercase tracking-[0.14em] text-gold">
                      Every project
                    </p>
                    <p className="mt-0.5 font-display text-xl text-white">
                      Documented before, during and after.
                    </p>
                  </div>
                </div>
              </div>
            </Reveal>

            <div className="mt-5 grid gap-4 sm:grid-cols-2">
              {benefits.slice(0, 4).map((benefit, index) => (
                <Reveal key={benefit.title} delay={(index % 2) * 80}>
                  <div className="group h-full rounded-3xl border border-line/70 bg-cream/60 p-5 transition-all duration-300 hover:-translate-y-1 hover:border-copper/40 hover:bg-white">
                    <span className="grid size-11 place-items-center rounded-2xl bg-white text-copper shadow-sm transition-colors group-hover:bg-copper group-hover:text-white">
                      <Icon name={benefit.icon} className="size-5" />
                    </span>
                    <h3 className="mt-4 font-display text-lg text-ink">
                      {benefit.title}
                    </h3>
                    <p className="mt-1.5 text-sm leading-relaxed text-muted">
                      {benefit.description}
                    </p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </div>

        <Reveal delay={120}>
          <div className="mt-10 grid gap-3 rounded-[1.75rem] border border-line/70 bg-cream/60 p-6 sm:p-8 lg:grid-cols-5">
            {commitments.map((commitment, index) => (
              <div key={commitment} className="flex gap-2.5">
                <span className="grid size-6 shrink-0 place-items-center rounded-full bg-moss/10 text-[10px] font-extrabold text-moss">
                  {index + 1}
                </span>
                <p className="text-xs leading-relaxed text-ink/70">{commitment}</p>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
