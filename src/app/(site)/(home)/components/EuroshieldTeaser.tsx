import Image from "next/image";
import Link from "next/link";
import Icon from "@/components/ui/Icon";
import Reveal from "@/components/ui/Reveal";

const highlights = [
  { icon: "cloudHail" as const, label: "Class 4 hail protection" },
  { icon: "wind" as const, label: "Superior wind performance" },
  { icon: "recycle" as const, label: "Recycled rubber core" },
  { icon: "leaf" as const, label: "Up to 95% recycled content" },
  { icon: "award" as const, label: "Up to 50-year lifespan" },
  { icon: "dollar" as const, label: "Possible insurance discounts" },
];

export default function EuroshieldTeaser() {
  return (
    <section id="euroshield" className="section relative isolate overflow-hidden bg-ink text-white">
      <div className="absolute inset-0 bg-grid-light opacity-40" />
      <div className="pointer-events-none absolute -left-20 top-0 size-96 rounded-full bg-copper/20 blur-3xl" />
      <div className="pointer-events-none absolute -right-24 bottom-0 size-96 rounded-full bg-moss/25 blur-3xl" />

      <div className="container-x relative">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <Reveal direction="left" className="relative mx-auto w-full max-w-lg lg:mx-0">
            <div className="relative aspect-[4/3.4] overflow-hidden rounded-[2rem] border border-white/15">
              <Image
                src="/images/Battle-Tested.jpg"
                alt="Euroshield roofing tested against severe weather"
                fill
                sizes="(max-width: 1024px) 90vw, 42vw"
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-ink/65 via-transparent to-transparent" />
              <div className="absolute left-4 top-4 rounded-full border border-white/20 bg-ink/70 px-3 py-1.5 text-[10px] font-bold uppercase tracking-[0.14em] text-gold backdrop-blur">
                Battle tested · Impact rated
              </div>
              <div className="absolute inset-x-4 bottom-4 flex items-center gap-3 rounded-2xl bg-white/95 p-3.5 text-ink backdrop-blur">
                <span className="grid size-10 place-items-center rounded-full bg-moss/10 text-moss">
                  <Icon name="leaf" className="size-5" />
                </span>
                <p className="text-xs font-bold leading-snug">
                  Made in North America
                  <span className="block text-[10px] font-medium text-muted">
                    From recycled tires, built to outlast storms
                  </span>
                </p>
              </div>
            </div>
            <div className="absolute -bottom-5 -right-3 aspect-square w-32 overflow-hidden rounded-[1.4rem] border-[5px] border-ink shadow-xl sm:w-40">
              <Image
                src="/images/ecofriendly.png"
                alt="Eco-friendly Euroshield roofing"
                fill
                sizes="160px"
                className="object-cover"
              />
            </div>
            <div className="absolute -right-2 top-1/2 grid size-20 -translate-y-1/2 place-items-center rounded-full border border-gold/30 bg-ink/80 text-center backdrop-blur sm:-right-5">
              <div>
                <p className="font-display text-xl leading-none text-gold">#1</p>
                <p className="mt-1 text-[8px] font-bold uppercase tracking-[0.12em] text-white/50">
                  Hail proof
                </p>
              </div>
            </div>
          </Reveal>

          <Reveal direction="right">
            <span className="eyebrow eyebrow-light">
              <span className="h-px w-7 bg-gold/70" />
              Euroshield® roofing
            </span>
            <h2 className="display-lg mt-4 text-white">
              Beauty and durability.
              <br />
              <span className="text-gradient italic">No trade-offs.</span>
            </h2>
            <p className="mt-5 text-base leading-relaxed text-white/65">
              The days of sacrificing beauty for toughness are over. Get the look
              of natural slate or wood shake without the fragility, waste or
              premium price — from a roofing system made from recycled materials
              and backed by an unbeatable warranty.
            </p>
            <p className="mt-3 text-base leading-relaxed text-white/65">
              Euroshield roofs can increase your home&apos;s value, may reduce
              insurance costs and provide the peace of mind that comes with an
              almost indestructible roof overhead.
            </p>

            <div className="mt-7 grid gap-2.5 sm:grid-cols-2">
              {highlights.map((item) => (
                <div
                  key={item.label}
                  className="flex items-center gap-2.5 rounded-xl border border-white/10 bg-white/[0.04] px-3 py-2.5"
                >
                  <Icon name={item.icon} className="size-4 shrink-0 text-gold" />
                  <span className="text-xs font-semibold text-white/75">
                    {item.label}
                  </span>
                </div>
              ))}
            </div>

            <div className="mt-8 flex flex-wrap gap-3">
              <Link href="/euroshield" className="btn btn-primary">
                Discover Euroshield
                <Icon name="arrowRight" className="size-4" />
              </Link>
              <Link href="/estimate" className="btn btn-outline">
                Get a free estimate
              </Link>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
