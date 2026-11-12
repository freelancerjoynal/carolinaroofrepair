import Link from "next/link";
import Image from "next/image";
import SiteShell from "@/components/layout/SiteShell";
import Icon from "@/components/ui/Icon";
import { navLinks, site } from "@/lib/site";

export const metadata = {
  title: "Page not found",
  robots: { index: false, follow: false },
};

export default function NotFound() {
  return (
    <SiteShell>
      <section className="relative isolate overflow-hidden bg-cream">
        <div className="absolute inset-0 bg-grid opacity-70" />
        <div className="pointer-events-none absolute -left-20 top-10 size-72 rounded-full bg-copper/10 blur-3xl" />
        <div className="pointer-events-none absolute -right-16 bottom-0 size-72 rounded-full bg-sky/70 blur-3xl" />

        <div className="container-x relative grid items-center gap-12 py-16 sm:py-20 lg:grid-cols-2 lg:py-24">
          <div>
            <span className="eyebrow">
              <span className="h-px w-7 bg-copper/70" />
              Error 404
            </span>
            <h1 className="display-xl mt-5">
              This shingle
              <br />
              <span className="text-gradient-dark italic">slipped off.</span>
            </h1>
            <p className="mt-6 max-w-lg text-base leading-relaxed text-muted">
              The page you are looking for was moved, renamed or never existed. No
              leaks here, though — use one of the links below and we will get you
              back under a solid roof.
            </p>

            <div className="mt-7 flex flex-wrap gap-3">
              <Link href="/" className="btn btn-primary">
                Back to home
                <Icon name="arrowRight" className="size-4" />
              </Link>
              <Link href="/estimate" className="btn btn-outline-dark">
                Get a free estimate
                <Icon name="calculator" className="size-4" />
              </Link>
            </div>

            <div className="mt-8 flex flex-wrap items-center gap-x-6 gap-y-2 text-xs font-semibold text-ink/65">
              <a
                href={site.phoneHref}
                className="flex items-center gap-1.5 hover:text-copper"
              >
                <Icon name="phone" className="size-4 text-copper" />
                {site.phoneDisplay}
              </a>
              <a
                href={site.emailHref}
                className="flex items-center gap-1.5 hover:text-copper"
              >
                <Icon name="mail" className="size-4 text-copper" />
                {site.email}
              </a>
            </div>
          </div>

          <div className="relative mx-auto w-full max-w-md">
            <div className="relative aspect-square overflow-hidden rounded-[2rem] border border-white/50 shadow-[0_30px_70px_-40px_rgba(8,28,46,0.55)]">
              <Image
                src="/images/roof-pic.jpg"
                alt="Carolina Roof Repair"
                fill
                sizes="(max-width: 1024px) 90vw, 40vw"
                className="object-cover"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-ink/75 via-ink/10 to-transparent" />
              <div className="absolute inset-x-5 bottom-5">
                <p className="font-display text-6xl leading-none text-white/95">
                  404
                </p>
                <p className="mt-1 text-[10px] font-bold uppercase tracking-[0.16em] text-gold">
                  Nothing to fix here
                </p>
              </div>
            </div>

            <div className="mt-4 grid grid-cols-2 gap-2">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="flex items-center justify-between rounded-xl border border-line/70 bg-white px-4 py-3 text-xs font-bold text-ink transition-colors hover:border-copper/40 hover:text-copper"
                >
                  {link.label}
                  <Icon name="arrowUpRight" className="size-3.5 opacity-50" />
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>
    </SiteShell>
  );
}
