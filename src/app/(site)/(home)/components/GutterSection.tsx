import Image from "next/image";
import Link from "next/link";
import Icon from "@/components/ui/Icon";
import Reveal from "@/components/ui/Reveal";

const points = [
  "Seamless new gutter installations",
  "Repairs, re-hanging and downspout work",
  "Gutter cleaning and seasonal maintenance",
  "Leaf protection to keep water moving",
];

export default function GutterSection() {
  return (
    <section className="section relative overflow-hidden bg-white">
      <div className="pointer-events-none absolute -left-24 top-1/4 size-72 rounded-full bg-sky/70 blur-3xl" />
      <div className="container-x relative grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
        <Reveal direction="left" className="relative mx-auto w-full max-w-lg lg:mx-0">
          <div className="relative aspect-[4/4.6] w-[78%] overflow-hidden rounded-[2rem] shadow-[0_30px_70px_-40px_rgba(8,28,46,0.55)]">
            <Image
              src="/images/Gutter-Install.jpg"
              alt="New gutter installation on a Carolina home"
              fill
              sizes="(max-width: 1024px) 70vw, 30vw"
              className="object-cover"
            />
          </div>
          <div className="absolute -bottom-6 right-0 aspect-square w-[52%] overflow-hidden rounded-[1.75rem] border-[6px] border-white shadow-xl">
            <Image
              src="/images/Gutter-Cleaning.jpg"
              alt="Gutter cleaning and maintenance"
              fill
              sizes="(max-width: 1024px) 44vw, 20vw"
              className="object-cover"
            />
          </div>
          <div className="absolute left-2 top-6 rotate-[-4deg] rounded-2xl bg-white/95 px-4 py-3 shadow-lg backdrop-blur">
            <p className="text-[10px] font-bold uppercase tracking-[0.14em] text-muted">
              Water managed
            </p>
            <p className="font-display text-lg text-ink">Roof → gutter → away</p>
          </div>
          <div className="absolute -right-2 top-1/3 grid size-16 place-items-center rounded-full bg-moss text-white shadow-xl">
            <Icon name="rain" className="size-7" />
          </div>
        </Reveal>

        <Reveal direction="right">
          <span className="eyebrow">
            <span className="h-px w-7 bg-copper/70" />
            Gutters & drainage
          </span>
          <h2 className="display-lg mt-4">
            Protect the roof.
            <br />
            <span className="text-gradient-dark italic">Protect the foundation.</span>
          </h2>
          <p className="mt-5 text-base leading-relaxed text-muted">
            Well-maintained gutters move water off the roof and away from your
            home&apos;s foundation, protecting your landscaping, siding and
            basement along the way.
          </p>
          <p className="mt-3 text-base leading-relaxed text-muted">
            Carolina Roof Repair offers a full range of new gutter installations,
            gutter repairs, gutter cleanings and ongoing maintenance.
          </p>

          <ul className="mt-6 grid gap-2.5 sm:grid-cols-2">
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
            <Link href="/services#gutters" className="btn btn-outline-dark">
              Gutter services
            </Link>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
