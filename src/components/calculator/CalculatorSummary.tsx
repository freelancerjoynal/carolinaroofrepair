"use client";

import Link from "next/link";
import Icon from "@/components/ui/Icon";
import type { EstimateResult } from "@/lib/estimate";
import { formatUSD } from "@/lib/estimate";
import { site } from "@/lib/site";

export default function CalculatorSummary({ result }: { result: EstimateResult }) {
  return (
    <div className="relative overflow-hidden rounded-[1.75rem] bg-ink p-6 text-white shadow-[0_30px_70px_-40px_rgba(8,28,46,0.9)] sm:p-7">
      <div className="absolute inset-0 bg-grid-light opacity-30" />
      <div className="pointer-events-none absolute -right-16 -top-16 size-52 rounded-full bg-copper/25 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-20 -left-10 size-44 rounded-full bg-moss/30 blur-3xl" />

      <div className="relative">
        <div className="flex items-center justify-between gap-3">
          <span className="text-[10px] font-bold uppercase tracking-[0.18em] text-gold">
            Estimated installed cost
          </span>
          <span className="rounded-full border border-white/15 bg-white/5 px-2.5 py-1 text-[10px] font-bold text-white/60">
            {result.squares} squares
          </span>
        </div>

        <div key={result.low} className="mt-4 animate-fade-up">
          <div className="flex flex-wrap items-baseline gap-x-2 gap-y-1">
            <span className="font-display text-4xl leading-none tracking-tight text-white sm:text-[2.6rem]">
              {formatUSD(result.low)}
            </span>
            <span className="text-lg text-white/40">–</span>
            <span className="font-display text-4xl leading-none tracking-tight text-white sm:text-[2.6rem]">
              {formatUSD(result.high)}
            </span>
          </div>
          <p className="mt-2 text-xs font-semibold text-white/50">
            ${result.perSqFtLow.toFixed(2)} – ${result.perSqFtHigh.toFixed(2)} per
            sq ft installed
          </p>
        </div>

        <div className="mt-5 flex flex-wrap gap-1.5">
          <span className="rounded-full bg-white/10 px-2.5 py-1 text-[10px] font-bold uppercase tracking-[0.1em] text-white/75">
            {result.material.short}
          </span>
          <span className="rounded-full bg-white/10 px-2.5 py-1 text-[10px] font-bold uppercase tracking-[0.1em] text-white/75">
            {result.material.lifespan}
          </span>
          <span className="rounded-full bg-white/10 px-2.5 py-1 text-[10px] font-bold uppercase tracking-[0.1em] text-white/75">
            {result.storyFactor > 1 ? "Multi-story" : "Single story"}
          </span>
        </div>

        <div className="mt-5 space-y-2 border-t border-white/10 pt-4">
          <p className="text-[10px] font-bold uppercase tracking-[0.16em] text-white/40">
            Planning breakdown
          </p>
          {result.lineItems
            .filter((item) => item.high > 0)
            .map((item) => (
              <div
                key={item.label}
                className="flex items-center justify-between gap-3 text-xs"
              >
                <span className="text-white/55">{item.label}</span>
                <span className="font-semibold text-white/85">
                  {formatUSD(item.low)} – {formatUSD(item.high)}
                </span>
              </div>
            ))}
        </div>

        <div className="mt-5 space-y-1.5 border-t border-white/10 pt-4 text-[11px] text-white/55">
          {[
            "Materials, labor and standard permits",
            "Free inspection and written proposal",
            "Cleanup and haul-away included",
          ].map((item) => (
            <p key={item} className="flex items-center gap-2">
              <Icon name="checkCircle" className="size-3.5 shrink-0 text-moss-soft" />
              {item}
            </p>
          ))}
        </div>

        <div className="mt-6 grid gap-2">
          <Link href="#request" className="btn btn-primary w-full">
            Turn this into a free estimate
            <Icon name="arrowRight" className="size-4" />
          </Link>
          <a
            href={site.phoneHref}
            className="btn w-full border border-white/15 bg-white/5 text-white hover:bg-white/10"
          >
            <Icon name="phone" className="size-4" />
            {site.phoneDisplay}
          </a>
        </div>

        <p className="mt-4 text-[10px] leading-relaxed text-white/35">
          Planning estimate only. Final pricing depends on decking condition,
          access, code requirements, material availability and a physical
          inspection. No estimate is a binding offer.
        </p>
      </div>
    </div>
  );
}
