import Image from "next/image";
import Icon from "@/components/ui/Icon";
import Reveal from "@/components/ui/Reveal";

const points = [
  "Extreme durability",
  "Extreme hail resistance",
  "Insulating, quiet sound-deadening qualities",
  "Increases home value",
  "Eligible for maximum insurance discounts",
  "Virtually maintenance free",
];

export default function EcoSection() {
  return (
    <section className="section relative overflow-hidden bg-moss/[0.06]">
      <div className="absolute inset-0 bg-grid opacity-40" />
      <div className="pointer-events-none absolute -right-20 top-10 size-80 rounded-full bg-moss/15 blur-3xl" />
      <div className="container-x relative grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
        <Reveal className="order-2 lg:order-1">
          <span className="eyebrow text-moss">
            <span className="h-px w-7 bg-moss/70" />
            Eco-friendly by design
          </span>
          <h2 className="display-lg mt-4">
            A roof made from
            <br />
            <span className="text-gradient-dark italic">what others throw away.</span>
          </h2>
          <p className="mt-5 text-base leading-relaxed text-muted">
            Euroshield roofing products were created over 20 years ago with the
            goal of diverting and recycling the tremendous deluge of used tires
            destined for landfill. Years of research led to a unique formula
            containing approximately 95% recycled materials.
          </p>
          <p className="mt-3 text-base leading-relaxed text-muted">
            For an average-sized home, <strong className="text-ink">250 to 1,000 rubber tires</strong> are
            used in the production of your Euroshield roof. Scrap material from
            installation can be collected and recycled again — virtually
            eliminating environmentally harmful waste.
          </p>

          <ul className="mt-6 grid gap-2.5 sm:grid-cols-2">
            {points.map((point) => (
              <li key={point} className="flex items-start gap-2.5 text-sm text-ink/75">
                <Icon name="checkCircle" className="mt-0.5 size-4 shrink-0 text-moss" />
                {point}
              </li>
            ))}
          </ul>

          <div className="mt-7 grid grid-cols-2 gap-3">
            <div className="rounded-2xl border border-moss/20 bg-white p-4">
              <p className="font-display text-2xl leading-none text-moss">~95%</p>
              <p className="mt-1 text-[10px] font-bold uppercase tracking-[0.1em] text-muted">
                Recycled materials
              </p>
            </div>
            <div className="rounded-2xl border border-moss/20 bg-white p-4">
              <p className="font-display text-2xl leading-none text-moss">250–1,000</p>
              <p className="mt-1 text-[10px] font-bold uppercase tracking-[0.1em] text-muted">
                Tires per average roof
              </p>
            </div>
          </div>
        </Reveal>

        <Reveal direction="right" className="order-1 mx-auto w-full max-w-lg lg:order-2 lg:mx-0">
          <div className="relative aspect-[4/3.4] overflow-hidden rounded-[2rem] border border-moss/15 shadow-[0_30px_70px_-45px_rgba(8,28,46,0.5)]">
            <Image
              src="/images/ecofriendly.png"
              alt="Eco-friendly Euroshield roofing materials"
              fill
              sizes="(max-width: 1024px) 90vw, 44vw"
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-moss/50 via-transparent to-transparent" />
            <div className="absolute inset-x-5 bottom-5 flex items-center gap-3 rounded-2xl bg-white/95 p-4 backdrop-blur">
              <span className="grid size-11 place-items-center rounded-full bg-moss text-white">
                <Icon name="recycle" className="size-5" />
              </span>
              <p className="text-xs font-bold leading-snug text-ink">
                Old tires. New life.
                <span className="block text-[10px] font-medium text-muted">
                  Diverted from landfill, engineered for your roof
                </span>
              </p>
            </div>
          </div>
          <div className="absolute -left-3 -top-3 rotate-[-5deg] rounded-2xl bg-moss px-4 py-3 text-white shadow-xl">
            <p className="text-[9px] font-bold uppercase tracking-[0.12em] text-white/60">
              North American made
            </p>
            <p className="font-display text-base leading-none">Recycled & local</p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
