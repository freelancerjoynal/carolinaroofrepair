import Image from "next/image";
import Link from "next/link";
import Icon from "@/components/ui/Icon";
import { services } from "@/lib/services";
import { navLinks, serviceAreas, site } from "@/lib/site";

export default function Footer() {
  const year = 2026;

  return (
    <footer className="relative isolate overflow-hidden bg-ink text-white">
      <div className="absolute inset-0 bg-grid-light opacity-30" />
      <div className="pointer-events-none absolute -left-24 top-0 size-96 rounded-full bg-copper/10 blur-3xl" />
      <div className="pointer-events-none absolute right-0 top-1/3 size-72 rounded-full bg-moss/20 blur-3xl" />

      <div className="container-x relative">
        <div className="grid gap-12 py-14 sm:py-16 lg:grid-cols-[1.3fr_0.8fr_0.7fr_1.1fr] lg:gap-10">
          <div>
            <Link href="/" aria-label={`${site.name} — home`} className="inline-flex">
              <Image
                src="/images/logo-1.png"
                alt={site.name}
                width={441}
                height={180}
                className="h-14 w-auto brightness-0 invert"
              />
            </Link>
            <p className="mt-5 max-w-sm text-sm leading-relaxed text-white/60">
              Hail-proof roofing, honest repairs and complete exterior protection
              for homes and businesses across the Carolinas. Local people,
              certified crews and workmanship that outlasts the weather.
            </p>
            <div className="mt-6 flex items-center gap-3">
              <a
                href={site.facebook}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Carolina Roof Repair on Facebook"
                className="grid size-10 place-items-center rounded-full border border-white/15 text-white/70 transition-colors hover:border-gold/60 hover:bg-white/5 hover:text-gold"
              >
                <Icon name="facebook" className="size-4" />
              </a>
              <a
                href={site.emailHref}
                aria-label="Email Carolina Roof Repair"
                className="grid size-10 place-items-center rounded-full border border-white/15 text-white/70 transition-colors hover:border-gold/60 hover:bg-white/5 hover:text-gold"
              >
                <Icon name="mail" className="size-4" />
              </a>
              <a
                href={site.phoneHref}
                aria-label="Call Carolina Roof Repair"
                className="grid size-10 place-items-center rounded-full border border-white/15 text-white/70 transition-colors hover:border-gold/60 hover:bg-white/5 hover:text-gold"
              >
                <Icon name="phone" className="size-4" />
              </a>
            </div>
          </div>

          <div>
            <h2 className="text-[11px] font-bold uppercase tracking-[0.18em] text-gold">
              Services
            </h2>
            <ul className="mt-5 space-y-2.5">
              {services.slice(0, 6).map((service) => (
                <li key={service.slug}>
                  <Link
                    href={`/services#${service.slug}`}
                    className="text-sm text-white/60 transition-colors hover:text-white"
                  >
                    {service.title}
                  </Link>
                </li>
              ))}
              <li>
                <Link
                  href="/services"
                  className="text-sm font-semibold text-gold transition-colors hover:text-white"
                >
                  All services →
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h2 className="text-[11px] font-bold uppercase tracking-[0.18em] text-gold">
              Company
            </h2>
            <ul className="mt-5 space-y-2.5">
              {navLinks.slice(1).map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-white/60 transition-colors hover:text-white"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
              <li>
                <Link
                  href="/estimate"
                  className="text-sm text-white/60 transition-colors hover:text-white"
                >
                  Estimate calculator
                </Link>
              </li>
              <li>
                <Link
                  href="/privacy"
                  className="text-sm text-white/60 transition-colors hover:text-white"
                >
                  Privacy policy
                </Link>
              </li>
              <li>
                <Link
                  href="/terms"
                  className="text-sm text-white/60 transition-colors hover:text-white"
                >
                  Terms of use
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h2 className="text-[11px] font-bold uppercase tracking-[0.18em] text-gold">
              Get in touch
            </h2>
            <ul className="mt-5 space-y-3.5 text-sm">
              <li>
                <a
                  href={site.phoneHref}
                  className="group flex items-start gap-3 text-white/75 transition-colors hover:text-white"
                >
                  <Icon name="phone" className="mt-0.5 size-4 text-gold" />
                  <span>
                    <span className="block font-semibold text-white">
                      {site.phoneDisplay}
                    </span>
                    <span className="text-xs text-white/45">Call or text</span>
                  </span>
                </a>
              </li>
              <li>
                <a
                  href={site.emailHref}
                  className="flex items-start gap-3 text-white/75 transition-colors hover:text-white"
                >
                  <Icon name="mail" className="mt-0.5 size-4 text-gold" />
                  <span className="break-all">{site.email}</span>
                </a>
              </li>
              <li className="flex items-start gap-3 text-white/75">
                <Icon name="mapPin" className="mt-0.5 size-4 text-gold" />
                <span>{site.address.full}</span>
              </li>
              <li className="flex items-start gap-3 text-white/75">
                <Icon name="clock" className="mt-0.5 size-4 text-gold" />
                <span>
                  Mon 10am–5pm · Tue–Thu 9am–6pm
                  <br />
                  <span className="text-xs text-white/45">
                    Email support available 24/7
                  </span>
                </span>
              </li>
            </ul>
            <a
              href={site.paymentUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-5 inline-flex items-center gap-2 rounded-full border border-gold/30 bg-gold/10 px-4 py-2 text-xs font-bold uppercase tracking-[0.12em] text-gold transition-colors hover:bg-gold/20"
            >
              Make a payment
              <Icon name="arrowUpRight" className="size-3.5" />
            </a>
          </div>
        </div>

        <div className="border-t border-white/10 py-6">
          <p className="text-xs leading-relaxed text-white/40">
            <span className="font-semibold text-white/60">Service area:</span>{" "}
            {serviceAreas.join(" · ")} and surrounding communities in North and
            South Carolina.
          </p>
        </div>

        <div className="flex flex-col gap-4 border-t border-white/10 py-6 text-xs text-white/45 sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {year} {site.name}. All rights reserved.
          </p>
          <div className="flex flex-wrap items-center gap-x-5 gap-y-2">
            <span className="flex items-center gap-1.5">
              <Icon name="shieldCheck" className="size-3.5 text-moss" />
              Licensed & insured
            </span>
            <Link href="/privacy" className="transition-colors hover:text-white">
              Privacy
            </Link>
            <Link href="/terms" className="transition-colors hover:text-white">
              Terms
            </Link>
            <span className="hidden sm:inline">NC & SC</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
