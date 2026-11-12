import Image from "next/image";
import Link from "next/link";
import Icon from "@/components/ui/Icon";
import Reveal from "@/components/ui/Reveal";

const points = [
  "Free inspection and written proposal",
  "Dozens of shingle colors and styles",
  "Standing seam metal and tile options",
  "Euroshield hail-proof rubber systems",
];

export default function ReplacementSection() {
  return (
    <section className="section relative overflow-hidden">
      <div className="pointer-events-none absolute -right-20 bottom-0 size-80 rounded-full bg-gold/15 blur-3xl" />
      <div className="container-x relative grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
        <Reveal className="order-2 lg:order-1">
          <span className="eyebrow">
            <span className="h-px w-7 bg-copper/70" />
            Full roof replacements
          </span>
          <h2 className="display-lg mt-4">
            A fresh start for
            <br />
            <span className="text-gradient-dark italic">the whole roof system.</span>
          </h2>
          <p className="mt-5 text-base leading-relaxed text-muted">
            When repairs no longer make financial sense, we prepare a proposal
            that shows you every option — from dozens of shingle varieties to
            standing seam metal and lifetime-warranty Euroshield.
          </p>
          <p className="mt-3 text-base leading-relaxed text-muted">
            Our free roof inspection checks the decking, flashing, ventilation
            and drainage so the new roof is built on a sound foundation, not just
            a fresh layer of shingles.
          </p>

          <ul className="mt-6 space-y-2.5">
            {points.map((point) => (
              <li key={point} className="flex items-start gap-2.5 text-sm text-ink/75">
                <Icon name="checkCircle" className="mt-0.5 size-4 shrink-0 text-moss" />
                {point}
              </li>
            ))}
          </ul>

          <div className="mt-8 flex flex-wrap gap-3">
            <Link href="/contact" className="btn btn-primary">
              Book a call
              <Icon name="arrowRight" className="size-4" />
            </Link>
            <Link href="/services#roof-replacements" className="btn btn-outline-dark">
              Replacement details
            </Link>
          </div>
        </Reveal>

        <Reveal direction="right" delay={100} className="relative order-1 mx-auto w-full max-w-lg lg:order-2 lg:mx-0">
          <div className="relative aspect-[4/4.1] overflow-hidden rounded-[2rem] shadow-[0_30px_70px_-40px_rgba(8,28,46,0.55)]">
            <Image
              src="/images/roof-repair-update.jpg"
              alt="Completed roof replacement on a Carolina home"
              fill
              sizes="(max-width: 1024px) 90vw, 42vw"
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-ink/50 via-transparent to-transparent" />
            <div className="absolute inset-x-5 bottom-5 rounded-2xl bg-white/95 p-4 backdrop-blur">
              <div className="flex items-center justify-between gap-4">
                <div>
                  <p className="text-[10px] font-bold uppercase tracking-[0.14em] text-muted">
                    Every install includes
                  </p>
                  <p className="mt-0.5 font-display text-lg leading-tight text-ink">
                    Tear-off, deck check & cleanup
                  </p>
                </div>
                <span className="grid size-11 shrink-0 place-items-center rounded-full bg-copper text-white">
                  <Icon name="hammer" className="size-5" />
                </span>
              </div>
            </div>
          </div>
          <div className="absolute -right-3 -top-5 aspect-square w-36 overflow-hidden rounded-[1.5rem] border-[6px] border-cream shadow-xl sm:w-44">
            <Image
              src="/images/roof-repairing-update.jpg"
              alt="Roof repair craftsmanship detail"
              fill
              sizes="180px"
              className="object-cover"
            />
          </div>
          <div className="absolute -bottom-4 -left-3 flex items-center gap-2.5 rounded-2xl bg-ink px-4 py-3 text-white shadow-xl">
            <Icon name="award" className="size-5 text-gold" />
            <span className="text-xs font-bold">
              Up to 50 years
              <span className="block text-[10px] font-medium text-white/50">
                Euroshield lifespan
              </span>
            </span>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
