import Image from "next/image";
import Link from "next/link";
import Icon from "@/components/ui/Icon";
import Badge from "@/components/ui/Badge";
import { site, stats } from "@/lib/site";

export default function Hero() {
  return (
    <section className="relative isolate overflow-hidden bg-cream pb-10 pt-10 sm:pt-14 lg:pb-16 lg:pt-16">
      <div className="absolute inset-0 bg-grid opacity-70" />
      <div className="pointer-events-none absolute -left-24 top-12 size-80 animate-blob bg-copper/10 blur-2xl" />
      <div className="pointer-events-none absolute right-0 top-0 size-[26rem] rounded-full bg-sky/70 blur-3xl" />
      <div className="pointer-events-none absolute bottom-0 left-1/3 size-64 rounded-full bg-gold/15 blur-3xl" />

      <div className="container-x relative">
        <div className="grid items-center gap-12 lg:grid-cols-[1.06fr_0.94fr] lg:gap-14">
          <div className="animate-fade-up">
            <Badge theme="copper">
              <Icon name="shieldCheck" className="size-3.5" />
              Hail-proof roofing system
            </Badge>

            <h1 className="display-xl mt-6 text-ink">
              Carolina tough.
              <br />
              <span className="text-gradient-dark italic">Hail proof.</span>
            </h1>

            <p className="mt-6 max-w-xl text-base leading-relaxed text-muted sm:text-lg">
              Carolina Roof Repair proudly serves the Carolinas with
              comprehensive roof repair, replacement and inspection services —
              plus Euroshield, the rubber roofing system built to shrug off hail
              and last for decades.
            </p>

            <div className="mt-7 flex flex-col gap-3 sm:flex-row sm:items-center">
              <Link href="/estimate" className="btn btn-primary">
                Get a free estimate
                <Icon name="arrowRight" className="size-4" />
              </Link>
              <Link href="/euroshield" className="btn btn-outline-dark">
                Explore Euroshield
                <Icon name="arrowUpRight" className="size-4" />
              </Link>
            </div>

            <div className="mt-7 flex flex-wrap items-center gap-x-6 gap-y-2.5 text-xs font-semibold text-ink/65">
              <span className="flex items-center gap-1.5">
                <Icon name="checkCircle" className="size-4 text-moss" />
                Free on-site inspection
              </span>
              <span className="flex items-center gap-1.5">
                <Icon name="checkCircle" className="size-4 text-moss" />
                Certified & insured
              </span>
              <span className="flex items-center gap-1.5">
                <Icon name="checkCircle" className="size-4 text-moss" />
                Financing available
              </span>
            </div>

            <div className="mt-8 flex items-center gap-4 rounded-2xl border border-line/70 bg-white/70 p-3.5 backdrop-blur-sm sm:max-w-md">
              <span className="grid size-11 shrink-0 place-items-center rounded-xl bg-ink text-gold">
                <Icon name="phone" className="size-5" />
              </span>
              <div className="min-w-0">
                <p className="text-[10px] font-bold uppercase tracking-[0.16em] text-muted">
                  Storm damage? Call us
                </p>
                <a
                  href={site.phoneHref}
                  className="block font-display text-xl leading-tight text-ink transition-colors hover:text-copper"
                >
                  {site.phoneDisplay}
                </a>
              </div>
              <a
                href={site.emailHref}
                className="ml-auto hidden shrink-0 rounded-full border border-line px-3.5 py-2 text-[11px] font-bold uppercase tracking-[0.1em] text-ink/70 transition-colors hover:border-copper/40 hover:text-copper sm:block"
              >
                24/7 email
              </a>
            </div>
          </div>

          <div className="relative mx-auto w-full max-w-lg animate-fade-up animation-delay-200 lg:max-w-none">
            <div className="relative aspect-[4/4.35] overflow-hidden rounded-[2.5rem] border border-white/40 shadow-[0_40px_90px_-50px_rgba(8,28,46,0.7)] sm:aspect-[4/3.7]">
              <Image
                src="/images/heroBg.webp"
                alt="Residential roof installed by Carolina Roof Repair"
                fill
                priority
                sizes="(max-width: 1024px) 90vw, 46vw"
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-ink/70 via-ink/5 to-transparent" />
              <div className="absolute inset-x-0 bottom-0 p-5 sm:p-6">
                <div className="flex items-center gap-2 text-[10px] font-bold uppercase tracking-[0.16em] text-gold">
                  <span className="size-1.5 rounded-full bg-gold" />
                  Euroshield certified installer
                </div>
                <p className="mt-1.5 max-w-xs font-display text-xl leading-snug text-white sm:text-2xl">
                  The last roof your home may ever need.
                </p>
              </div>
            </div>

            <div className="absolute -left-3 top-5 animate-float rounded-2xl bg-white/95 p-4 shadow-[0_20px_45px_-25px_rgba(8,28,46,0.65)] backdrop-blur sm:-left-6">
              <div className="flex items-center gap-3">
                <span className="grid size-10 place-items-center rounded-full bg-moss/10 text-moss">
                  <Icon name="shieldCheck" className="size-5" />
                </span>
                <div>
                  <p className="text-[10px] font-bold uppercase tracking-[0.12em] text-muted">
                    Impact rating
                  </p>
                  <p className="font-display text-lg leading-none text-ink">
                    Class 4
                  </p>
                </div>
              </div>
            </div>

            <div className="absolute -bottom-5 right-3 animate-float-slow rounded-2xl bg-ink/95 p-4 text-white shadow-2xl backdrop-blur sm:-right-5">
              <div className="flex items-center gap-3">
                <span className="grid size-10 place-items-center rounded-full bg-gold/15 text-gold">
                  <Icon name="leaf" className="size-5" />
                </span>
                <div>
                  <p className="text-[10px] font-bold uppercase tracking-[0.12em] text-white/50">
                    Recycled content
                  </p>
                  <p className="font-display text-lg leading-none text-gold">
                    Up to 95%
                  </p>
                </div>
              </div>
            </div>

            <div className="absolute -right-2 top-24 hidden rotate-90 text-[10px] font-bold uppercase tracking-[0.4em] text-ink/30 lg:block">
              Shelter solutions
            </div>
          </div>
        </div>

        <div className="mt-14 grid grid-cols-2 gap-px overflow-hidden rounded-3xl border border-ink/10 bg-ink shadow-[0_30px_60px_-40px_rgba(8,28,46,0.8)] sm:mt-16 sm:grid-cols-4">
          {stats.map((stat) => (
            <div
              key={stat.label}
              className="group relative bg-ink px-5 py-6 transition-colors hover:bg-ink-soft sm:px-6 sm:py-7"
            >
              <Icon
                name={stat.icon}
                className="size-5 text-gold transition-transform duration-300 group-hover:scale-110"
              />
              <p className="mt-3 font-display text-2xl leading-none text-white sm:text-3xl">
                {stat.value}
              </p>
              <p className="mt-1.5 text-[10px] font-semibold uppercase leading-relaxed tracking-[0.12em] text-white/45">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
