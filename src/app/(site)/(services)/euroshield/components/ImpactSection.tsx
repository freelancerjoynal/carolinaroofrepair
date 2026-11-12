import Image from "next/image";
import Icon from "@/components/ui/Icon";
import Reveal from "@/components/ui/Reveal";

const weather = ["Hail", "High winds", "Heavy rain", "Ice & snow", "UV radiation", "Thermal expansion"];

export default function ImpactSection() {
  return (
    <section className="section relative isolate overflow-hidden bg-ink text-white">
      <div className="absolute inset-0 bg-grid-light opacity-40" />
      <div className="pointer-events-none absolute -left-24 top-10 size-96 rounded-full bg-copper/20 blur-3xl" />
      <div className="pointer-events-none absolute -right-20 bottom-0 size-80 rounded-full bg-moss/25 blur-3xl" />

      <div className="container-x relative">
        <div className="grid items-center gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:gap-16">
          <div>
            <span className="eyebrow eyebrow-light">
              <span className="h-px w-7 bg-gold/70" />
              Battle tested · Impact rated
            </span>
            <h2 className="display-lg mt-4 text-white">
              Built for the worst
              <br />
              <span className="text-gradient italic">weather on earth.</span>
            </h2>
            <p className="mt-5 text-base leading-relaxed text-white/65">
              Hail, high winds, heavy rains, ice, snow, UV radiation and thermal
              expansion from prolonged sun exposure can damage a roof. Meanwhile,
              home and business owners across the U.S. face over{" "}
              <strong className="text-white">5,000 major hail storms per year</strong>,
              with annual losses averaging between{" "}
              <strong className="text-white">$8 billion and $14 billion</strong>.
            </p>
            <p className="mt-3 text-base leading-relaxed text-white/65">
              Besides unmatched Class 4 UL 2218 impact resistance, Euroshield&apos;s
              sophisticated locking system provides superior wind performance. The
              carbon black materials help absorb damaging ultraviolet rays — a
              genuinely game-changing level of protection.
            </p>

            <div className="mt-6 flex flex-wrap gap-2">
              {weather.map((item) => (
                <span
                  key={item}
                  className="rounded-full border border-white/12 bg-white/[0.05] px-3 py-1.5 text-[11px] font-semibold text-white/65"
                >
                  {item}
                </span>
              ))}
            </div>

            <div className="mt-8 grid grid-cols-3 gap-3">
              {[
                { value: "5,000+", label: "Major U.S. hail storms / year" },
                { value: "$8–14B", label: "Annual hail losses" },
                { value: "Class 4", label: "Highest impact rating" },
              ].map((stat) => (
                <div
                  key={stat.label}
                  className="rounded-2xl border border-white/10 bg-white/[0.04] p-4"
                >
                  <p className="font-display text-xl leading-none text-gold sm:text-2xl">
                    {stat.value}
                  </p>
                  <p className="mt-1.5 text-[9px] font-bold uppercase leading-relaxed tracking-[0.08em] text-white/40">
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <Reveal direction="right" className="relative mx-auto w-full max-w-lg lg:mx-0">
            <div className="relative aspect-[4/4.2] overflow-hidden rounded-[2rem] border border-white/15">
              <Image
                src="/images/Battle-Tested.jpg"
                alt="Euroshield roof tested against severe weather"
                fill
                sizes="(max-width: 1024px) 90vw, 42vw"
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-ink/70 via-transparent to-transparent" />
              <div className="absolute inset-x-5 bottom-5 flex items-center gap-3 rounded-2xl bg-white/95 p-4 text-ink backdrop-blur">
                <span className="grid size-11 shrink-0 place-items-center rounded-full bg-copper text-white">
                  <Icon name="shieldCheck" className="size-5" />
                </span>
                <div>
                  <p className="text-[10px] font-bold uppercase tracking-[0.12em] text-muted">
                    Exceeds the highest rating
                  </p>
                  <p className="font-display text-lg leading-tight">
                    Hail proof by design
                  </p>
                </div>
              </div>
            </div>
            <div className="absolute -left-3 -top-3 animate-float rounded-2xl bg-gold px-4 py-3 text-ink shadow-xl">
              <p className="text-[9px] font-bold uppercase tracking-[0.12em] text-ink/60">
                Tested for
              </p>
              <p className="font-display text-lg leading-none">Class 4</p>
            </div>
            <div className="absolute -bottom-5 right-3 animate-float-slow rounded-2xl border border-white/15 bg-ink/90 p-4 text-center backdrop-blur">
              <Icon name="wind" className="mx-auto size-5 text-gold" />
              <p className="mt-1 text-[9px] font-bold uppercase tracking-[0.12em] text-white/50">
                Superior wind
              </p>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
