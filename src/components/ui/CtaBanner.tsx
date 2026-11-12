import Link from "next/link";
import Icon from "./Icon";
import Reveal from "./Reveal";
import { site } from "@/lib/site";

type CtaBannerProps = {
  eyebrow?: string;
  title?: string;
  description?: string;
  primaryHref?: string;
  primaryLabel?: string;
  secondaryHref?: string;
  secondaryLabel?: string;
};

export default function CtaBanner({
  eyebrow = "Ready when you are",
  title = "Let's put a stronger roof over your head.",
  description = "Book a free inspection with a local, certified team. We will document what we find, explain your options and give you a clear written estimate — no pressure, no surprise costs.",
  primaryHref = "/estimate",
  primaryLabel = "Get a free estimate",
  secondaryHref = site.phoneHref,
  secondaryLabel = site.phoneDisplay,
}: CtaBannerProps) {
  return (
    <section className="section-tight relative isolate overflow-hidden bg-ink">
      <div className="absolute inset-0 bg-grid-light opacity-40" />
      <div className="pointer-events-none absolute -left-20 top-0 size-80 rounded-full bg-copper/25 blur-3xl" />
      <div className="pointer-events-none absolute -right-10 bottom-0 size-72 rounded-full bg-moss/30 blur-3xl" />
      <div className="container-x relative">
        <Reveal>
          <div className="relative overflow-hidden rounded-[2.25rem] border border-white/10 bg-gradient-to-br from-white/[0.09] to-white/[0.02] px-6 py-10 sm:px-10 sm:py-12 lg:flex lg:items-center lg:justify-between lg:gap-12 lg:px-14">
            <div className="max-w-2xl">
              <span className="eyebrow eyebrow-light">
                <span className="h-px w-7 bg-gold/70" />
                {eyebrow}
              </span>
              <h2 className="display-md mt-4 text-white">{title}</h2>
              <p className="mt-4 text-sm leading-relaxed text-white/65 sm:text-base">
                {description}
              </p>
            </div>
            <div className="mt-8 flex shrink-0 flex-col gap-3 sm:flex-row lg:mt-0 lg:flex-col xl:flex-row">
              <Link href={primaryHref} className="btn btn-primary">
                {primaryLabel}
                <Icon name="arrowRight" className="size-4" />
              </Link>
              {secondaryHref.startsWith("tel:") ? (
                <a href={secondaryHref} className="btn btn-outline">
                  <Icon name="phone" className="size-4" />
                  {secondaryLabel}
                </a>
              ) : (
                <Link href={secondaryHref} className="btn btn-outline">
                  {secondaryLabel}
                  <Icon name="arrowUpRight" className="size-4" />
                </Link>
              )}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
