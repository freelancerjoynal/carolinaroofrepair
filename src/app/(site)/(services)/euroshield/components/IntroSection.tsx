import Image from "next/image";
import Link from "next/link";
import Icon from "@/components/ui/Icon";
import Reveal from "@/components/ui/Reveal";

const facts = [
  { value: "Class 4", label: "UL 2218 impact rating" },
  { value: "~95%", label: "Recycled materials" },
  { value: "50 yrs", label: "Potential lifespan" },
  { value: "1st", label: "Hail-proof rubber roof" },
];

export default function IntroSection() {
  return (
    <section className="section relative overflow-hidden">
      <div className="pointer-events-none absolute -right-20 top-20 size-80 rounded-full bg-sky/60 blur-3xl" />
      <div className="container-x relative grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
        <Reveal direction="left" className="relative order-2 lg:order-1">
          <div className="relative aspect-[4/4.4] overflow-hidden rounded-[2rem] shadow-[0_30px_70px_-40px_rgba(8,28,46,0.55)]">
            <Image
              src="/images/a96ae16f42d77c31b735fece82b1ed6f_1200_80.webp"
              alt="Euroshield roof profile with slate-like finish"
              fill
              sizes="(max-width: 1024px) 90vw, 44vw"
              className="object-cover"
            />
          </div>
          <div className="absolute -bottom-6 -right-3 w-[52%] overflow-hidden rounded-[1.5rem] border-[6px] border-cream shadow-xl sm:-right-5">
            <Image
              src="/images/eco-friendly-uroshield.webp"
              alt="Eco-friendly Euroshield roofing material"
              width={780}
              height={920}
              sizes="220px"
              className="h-auto w-full object-cover"
            />
          </div>
          <div className="absolute left-4 top-4 rounded-full border border-white/30 bg-ink/70 px-3 py-1.5 text-[10px] font-bold uppercase tracking-[0.14em] text-gold backdrop-blur">
            Slate · Shake · Tile
          </div>
        </Reveal>

        <Reveal direction="right" className="order-1 lg:order-2">
          <span className="eyebrow">
            <span className="h-px w-7 bg-copper/70" />
            What is Euroshield?
          </span>
          <h2 className="display-lg mt-4">
            Premium looks.
            <br />
            <span className="text-gradient-dark italic">Rubber toughness.</span>
          </h2>
          <p className="mt-5 text-base leading-relaxed text-muted">
            The days of sacrificing beauty and style for durability are over. Get
            luxurious natural slate or wood shake roofing style without the
            challenges, waste or expense of other premium shingle materials.
          </p>
          <p className="mt-3 text-base leading-relaxed text-muted">
            Euroshield roofs are made from recycled materials, come with an
            unbeatable warranty, can increase your home&apos;s value, may reduce
            insurance costs and provide peace of mind that comes with an almost
            indestructible roof protecting your family.
          </p>

          <div className="mt-7 grid grid-cols-2 gap-3">
            {facts.map((fact) => (
              <div
                key={fact.label}
                className="rounded-2xl border border-line/70 bg-white p-4"
              >
                <p className="font-display text-2xl leading-none text-ink">
                  {fact.value}
                </p>
                <p className="mt-1.5 text-[10px] font-bold uppercase leading-relaxed tracking-[0.1em] text-muted">
                  {fact.label}
                </p>
              </div>
            ))}
          </div>

          <div className="mt-7 flex flex-wrap gap-3">
            <Link href="/estimate" className="btn btn-primary">
              Estimate my Euroshield roof
              <Icon name="arrowRight" className="size-4" />
            </Link>
            <Link href="/services" className="btn btn-outline-dark">
              Compare services
            </Link>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
