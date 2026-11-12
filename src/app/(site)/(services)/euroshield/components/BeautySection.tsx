import Image from "next/image";
import Link from "next/link";
import Icon from "@/components/ui/Icon";
import Reveal from "@/components/ui/Reveal";

const points = [
  "Wide variety of styles and colors",
  "Premium luxury looks at affordable prices",
  "Extreme durability to hail, wind, heat, rain and snow",
  "Virtually indestructible",
  "First to offer a hail-proof roofing system",
  "Installed by trained, certified experts",
];

export default function BeautySection() {
  return (
    <section className="section relative overflow-hidden bg-white">
      <div className="pointer-events-none absolute -left-24 bottom-0 size-80 rounded-full bg-sand/80 blur-3xl" />
      <div className="container-x relative grid items-center gap-12 lg:grid-cols-[0.95fr_1.05fr] lg:gap-16">
        <Reveal direction="left" className="relative mx-auto w-full max-w-lg lg:mx-0">
          <div className="relative aspect-[4/3.5] overflow-hidden rounded-[2rem] shadow-[0_30px_70px_-45px_rgba(8,28,46,0.5)]">
            <Image
              src="/images/UROBUILDING.jpg"
              alt="Euroshield roof installed on a North American home"
              fill
              sizes="(max-width: 1024px) 90vw, 44vw"
              className="object-cover"
            />
          </div>
          <div className="absolute -bottom-5 -right-3 aspect-square w-36 overflow-hidden rounded-[1.5rem] border-[6px] border-cream shadow-xl sm:w-44">
            <Image
              src="/images/uroshield-section.webp"
              alt="Euroshield roofing style detail"
              fill
              sizes="180px"
              className="object-cover"
            />
          </div>
          <div className="absolute -left-3 top-5 animate-float rounded-2xl bg-white px-4 py-3 shadow-xl">
            <p className="text-[9px] font-bold uppercase tracking-[0.12em] text-muted">
              Looks like
            </p>
            <p className="font-display text-lg leading-none text-ink">
              Slate · Shake · Tile
            </p>
          </div>
        </Reveal>

        <Reveal direction="right">
          <span className="eyebrow">
            <span className="h-px w-7 bg-copper/70" />
            Beauty + durability
          </span>
          <h2 className="display-lg mt-4">
            All the character.
            <br />
            <span className="text-gradient-dark italic">None of the fragility.</span>
          </h2>
          <p className="mt-5 text-base leading-relaxed text-muted">
            Wood or slate shingles create curb appeal and old-world European
            elegance, but real slate is susceptible to damage and cracking, while
            wood and asphalt can be compromised by moisture and mold.
          </p>
          <p className="mt-3 text-base leading-relaxed text-muted">
            Euroshield gives you the look of tile, shake and slate without the high
            cost or the risk. It is lightweight too, making it ideal for
            residential and commercial projects regardless of the deck or
            substrate layers a property has.
          </p>

          <ul className="mt-6 grid gap-2.5 sm:grid-cols-2">
            {points.map((point) => (
              <li key={point} className="flex items-start gap-2.5 text-sm text-ink/75">
                <Icon name="checkCircle" className="mt-0.5 size-4 shrink-0 text-copper" />
                {point}
              </li>
            ))}
          </ul>

          <div className="mt-8 flex flex-wrap gap-3">
            <Link href="/estimate" className="btn btn-primary">
              Price my roof
              <Icon name="calculator" className="size-4" />
            </Link>
            <Link href="/contact" className="btn btn-outline-dark">
              Ask a question
            </Link>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
