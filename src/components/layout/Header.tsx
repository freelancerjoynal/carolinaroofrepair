"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import Icon from "@/components/ui/Icon";
import { navLinks, site } from "@/lib/site";
import { cn } from "@/lib/utils";

export default function Header() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const progressRef = useRef<HTMLDivElement>(null);
  const [lastPathname, setLastPathname] = useState(pathname);

  // Close the mobile drawer whenever the route changes without an effect.
  if (lastPathname !== pathname) {
    setLastPathname(pathname);
    setOpen(false);
  }

  useEffect(() => {
    let frame = 0;

    const update = () => {
      frame = 0;
      const top = window.scrollY;
      const height =
        document.documentElement.scrollHeight - window.innerHeight || 1;

      // Hysteresis (200px on, 140px off) stops the compact header from
      // flickering while the page hovers around the trigger point.
      setScrolled((compact) => (compact ? top > 140 : top > 200));

      if (progressRef.current) {
        const progress = Math.min(1, Math.max(0, top / height));
        progressRef.current.style.transform = `scaleX(${progress})`;
      }
    };

    const onScroll = () => {
      if (frame) return;
      frame = window.requestAnimationFrame(update);
    };

    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      if (frame) window.cancelAnimationFrame(frame);
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  const isActive = (href: string) =>
    href === "/" ? pathname === "/" : pathname.startsWith(href);

  return (
    <>
      <div className="relative z-40 hidden bg-ink text-white lg:block">
        <div className="container-x flex h-10 items-center justify-between text-[11px] font-semibold tracking-wide">
          <p className="flex items-center gap-2 text-white/70">
            <Icon name="mapPin" className="size-3.5 text-gold" />
            Proudly serving homes & businesses across the Carolinas
          </p>
          <div className="flex items-center gap-6">
            <a
              href={site.phoneHref}
              className="flex items-center gap-2 text-white/80 transition-colors hover:text-gold"
            >
              <Icon name="phone" className="size-3.5" />
              {site.phoneDisplay}
            </a>
            <a
              href={site.emailHref}
              className="flex items-center gap-2 text-white/80 transition-colors hover:text-gold"
            >
              <Icon name="mail" className="size-3.5" />
              {site.email}
            </a>
            <a
              href={site.paymentUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 rounded-full border border-white/15 px-3 py-1 font-bold uppercase tracking-[0.12em] text-gold transition-colors hover:border-gold/60 hover:bg-white/5"
            >
              Make a payment
              <Icon name="arrowUpRight" className="size-3" />
            </a>
          </div>
        </div>
      </div>

      <header
        className={cn(
          "sticky top-0 z-50 border-b transition-all duration-300",
          scrolled
            ? "border-line/70 bg-cream/95 shadow-[0_10px_30px_-20px_rgba(8,28,46,0.45)] backdrop-blur-xl"
            : "border-transparent bg-cream/80 backdrop-blur-md",
        )}
      >
        <div className="container-x flex items-center justify-between gap-4">
          <Link
            href="/"
            aria-label={`${site.name} — home`}
            className={cn(
              "relative flex shrink-0 items-center transition-all duration-300",
              scrolled ? "py-2.5" : "py-4",
            )}
          >
            <Image
              src="/images/logo-1.png"
              alt={site.name}
              width={441}
              height={180}
              priority
              className={cn(
                "w-auto transition-all duration-300",
                scrolled ? "h-10 sm:h-11" : "h-11 sm:h-14",
              )}
            />
          </Link>

          <nav aria-label="Main navigation" className="hidden items-center gap-1 lg:flex">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={cn(
                  "relative rounded-full px-4 py-2 text-sm font-bold transition-colors",
                  isActive(link.href)
                    ? "text-copper"
                    : "text-ink/75 hover:text-copper",
                )}
              >
                {link.label}
                {isActive(link.href) ? (
                  <span className="absolute inset-x-4 -bottom-0.5 h-0.5 rounded-full bg-copper" />
                ) : null}
              </Link>
            ))}
          </nav>

          <div className="hidden items-center gap-3 lg:flex">
            <a
              href={site.phoneHref}
              className="group flex items-center gap-2.5 rounded-full border border-line/80 bg-white/60 py-2 pl-2.5 pr-4 transition-colors hover:border-copper/40"
            >
              <span className="grid size-9 place-items-center rounded-full bg-copper/10 text-copper transition-colors group-hover:bg-copper group-hover:text-white">
                <Icon name="phone" className="size-4" />
              </span>
              <span className="leading-tight">
                <span className="block text-[10px] font-bold uppercase tracking-[0.14em] text-muted">
                  Call us
                </span>
                <span className="block text-sm font-extrabold text-ink">
                  {site.phoneDisplay}
                </span>
              </span>
            </a>
            <Link href="/estimate" className="btn btn-primary !px-5 !py-3.5">
              Free estimate
              <Icon name="arrowRight" className="size-4" />
            </Link>
          </div>

          <div className="flex items-center gap-2 lg:hidden">
            <a
              href={site.phoneHref}
              aria-label={`Call ${site.phoneDisplay}`}
              className="grid size-10 place-items-center rounded-full bg-copper/10 text-copper"
            >
              <Icon name="phone" className="size-4.5" />
            </a>
            <button
              type="button"
              onClick={() => setOpen((value) => !value)}
              aria-label={open ? "Close menu" : "Open menu"}
              aria-expanded={open}
              className="grid size-10 place-items-center rounded-full bg-ink text-white"
            >
              <Icon name={open ? "close" : "menu"} className="size-5" />
            </button>
          </div>
        </div>

        <div className="absolute inset-x-0 bottom-0 h-0.5 bg-transparent">
          <div
            ref={progressRef}
            className="h-full origin-left bg-gradient-to-r from-copper via-gold to-copper will-change-transform"
            style={{ transform: "scaleX(0)" }}
          />
        </div>
      </header>

      <div
        className={cn(
          "fixed inset-0 z-[60] lg:hidden",
          open ? "pointer-events-auto" : "pointer-events-none",
        )}
        aria-hidden={!open}
      >
        <button
          type="button"
          aria-label="Close menu overlay"
          onClick={() => setOpen(false)}
          className={cn(
            "absolute inset-0 bg-ink/60 backdrop-blur-sm transition-opacity duration-300",
            open ? "opacity-100" : "opacity-0",
          )}
        />
        <div
          className={cn(
            "absolute right-0 top-0 flex h-full w-[86%] max-w-sm flex-col bg-cream shadow-2xl transition-transform duration-300 ease-out",
            open ? "translate-x-0" : "translate-x-full",
          )}
        >
          <div className="flex items-center justify-between border-b border-line/70 px-5 py-4">
            <Image
              src="/images/logo-1.png"
              alt={site.name}
              width={441}
              height={180}
              className="h-10 w-auto"
            />
            <button
              type="button"
              onClick={() => setOpen(false)}
              aria-label="Close menu"
              className="grid size-10 place-items-center rounded-full border border-line bg-white text-ink"
            >
              <Icon name="close" className="size-5" />
            </button>
          </div>

          <nav aria-label="Mobile navigation" className="flex-1 overflow-y-auto px-5 py-6">
            <ul className="space-y-1">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    onClick={() => setOpen(false)}
                    className={cn(
                      "flex items-center justify-between rounded-2xl px-4 py-3.5 font-display text-xl transition-colors",
                      isActive(link.href)
                        ? "bg-copper/10 text-copper"
                        : "text-ink hover:bg-white",
                    )}
                  >
                    {link.label}
                    <Icon name="arrowUpRight" className="size-4 opacity-50" />
                  </Link>
                </li>
              ))}
            </ul>

            <div className="mt-6 rounded-2xl bg-white p-5">
              <p className="text-[11px] font-bold uppercase tracking-[0.16em] text-muted">
                Talk to a local team
              </p>
              <a
                href={site.phoneHref}
                className="mt-2 flex items-center gap-2 font-display text-2xl text-ink"
              >
                <Icon name="phone" className="size-5 text-copper" />
                {site.phoneDisplay}
              </a>
              <a
                href={site.emailHref}
                className="mt-1 flex items-center gap-2 text-sm text-muted"
              >
                <Icon name="mail" className="size-4 text-copper" />
                {site.email}
              </a>
              <div className="mt-4 grid grid-cols-2 gap-2">
                <a
                  href={site.paymentUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-outline-dark !px-3 !py-2.5 !text-xs"
                >
                  Payment
                </a>
                <a
                  href={site.facebook}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-outline-dark !px-3 !py-2.5 !text-xs"
                >
                  <Icon name="facebook" className="size-3.5" />
                  Facebook
                </a>
              </div>
            </div>
          </nav>

          <div className="border-t border-line/70 p-5">
            <Link
              href="/estimate"
              onClick={() => setOpen(false)}
              className="btn btn-primary w-full"
            >
              Get a free estimate
              <Icon name="arrowRight" className="size-4" />
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
