import Image from "next/image";
import Link from "next/link";
import type { ReactNode } from "react";
import Icon from "./Icon";

type Crumb = { label: string; href?: string };

type PageHeroProps = {
  eyebrow: string;
  title: ReactNode;
  description: string;
  image: string;
  imageAlt: string;
  crumbs: Crumb[];
  children?: ReactNode;
  align?: "left" | "center";
};

export default function PageHero({
  eyebrow,
  title,
  description,
  image,
  imageAlt,
  crumbs,
  children,
  align = "left",
}: PageHeroProps) {
  return (
    <section className="relative isolate overflow-hidden bg-ink text-white">
      <Image
        src={image}
        alt={imageAlt}
        fill
        priority
        sizes="100vw"
        className="object-cover opacity-40"
      />
      <div className="absolute inset-0 bg-gradient-to-r from-ink via-ink/92 to-ink/35" />
      <div className="absolute inset-0 bg-gradient-to-t from-ink via-transparent to-ink/40" />
      <div className="absolute inset-0 bg-grid-light opacity-50" />
      <div className="pointer-events-none absolute -right-24 top-10 size-72 rounded-full bg-copper/25 blur-3xl" />
      <div className="pointer-events-none absolute -left-16 bottom-0 size-56 rounded-full bg-gold/15 blur-3xl" />

      <div className="container-x relative pb-16 pt-12 sm:pb-20 sm:pt-14 lg:pb-24 lg:pt-16">
        <nav aria-label="Breadcrumb" className="mb-8">
          <ol className="flex flex-wrap items-center gap-2 text-xs font-semibold uppercase tracking-[0.14em] text-white/55">
            {crumbs.map((crumb, index) => (
              <li key={`${crumb.label}-${index}`} className="flex items-center gap-2">
                {crumb.href ? (
                  <Link
                    href={crumb.href}
                    className="transition-colors hover:text-gold"
                  >
                    {crumb.label}
                  </Link>
                ) : (
                  <span className="text-gold">{crumb.label}</span>
                )}
                {index < crumbs.length - 1 ? (
                  <Icon name="chevronRight" className="size-3 text-white/30" />
                ) : null}
              </li>
            ))}
          </ol>
        </nav>

        <div
          className={
            align === "center"
              ? "mx-auto max-w-3xl text-center"
              : "max-w-3xl text-left"
          }
        >
          <span className="eyebrow eyebrow-light">
            <span className="h-px w-7 bg-gold/70" />
            {eyebrow}
          </span>
          <h1 className="display-xl mt-5 text-white [text-wrap:balance]">
            {title}
          </h1>
          <p className="mt-6 max-w-2xl text-base leading-relaxed text-white/75 sm:text-lg">
            {description}
          </p>
          {children ? (
            <div
              className={
                align === "center"
                  ? "mt-8 flex flex-wrap items-center justify-center gap-3"
                  : "mt-8 flex flex-wrap items-center gap-3"
              }
            >
              {children}
            </div>
          ) : null}
        </div>
      </div>
    </section>
  );
}
