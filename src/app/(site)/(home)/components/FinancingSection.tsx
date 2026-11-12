import Link from "next/link";
import Icon from "@/components/ui/Icon";
import Reveal from "@/components/ui/Reveal";
import { site } from "@/lib/site";

export default function FinancingSection() {
  return (
    <section id="financing" className="section-tight relative overflow-hidden bg-sky/60">
      <div className="absolute inset-0 bg-grid opacity-40" />
      <div className="pointer-events-none absolute -right-16 top-0 size-72 rounded-full bg-copper/10 blur-3xl" />
      <div className="container-x relative">
        <div className="grid items-center gap-8 rounded-[2rem] border border-white/70 bg-white/70 p-6 shadow-[0_30px_70px_-50px_rgba(8,28,46,0.5)] backdrop-blur sm:p-9 lg:grid-cols-[1.15fr_0.85fr] lg:p-10">
          <div>
            <span className="eyebrow">
              <span className="h-px w-7 bg-copper/70" />
              Roof financing
            </span>
            <h2 className="display-md mt-4">
              Start the roof now.
              <br />
              <span className="text-gradient-dark italic">Pay over time.</span>
            </h2>
            <p className="mt-4 max-w-xl text-sm leading-relaxed text-muted sm:text-base">
              Got a big roofing project in mind but don&apos;t have the funds yet?
              Don&apos;t pull money out of your savings or take out a high-interest
              short-term loan. Carolina Roof Repair is proud to offer financing
              through <strong className="text-ink">EnerBank USA</strong>.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <a href={site.phoneHref} className="btn btn-primary">
                <Icon name="phone" className="size-4" />
                Call {site.phoneDisplay}
              </a>
              <a href={site.emailHref} className="btn btn-outline-dark">
                <Icon name="mail" className="size-4" />
                Ask about financing
              </a>
            </div>
            <p className="mt-4 text-[11px] text-muted">
              Financing subject to credit approval. Ask our office for current
              terms and details.
            </p>
          </div>

          <Reveal direction="right">
            <div className="rounded-3xl bg-ink p-6 text-white">
              <div className="flex items-center gap-3">
                <span className="grid size-11 place-items-center rounded-2xl bg-gold/15 text-gold">
                  <Icon name="dollar" className="size-5" />
                </span>
                <div>
                  <p className="text-[10px] font-bold uppercase tracking-[0.16em] text-white/45">
                    Home improvement loan
                  </p>
                  <p className="font-display text-xl text-white">EnerBank USA</p>
                </div>
              </div>
              <div className="mt-5 space-y-3 border-t border-white/10 pt-4">
                {[
                  { title: "Keep your savings intact", icon: "shieldCheck" as const },
                  { title: "Simple application process", icon: "fileText" as const },
                  { title: "Decisions without the high-interest detour", icon: "bolt" as const },
                ].map((item) => (
                  <p key={item.title} className="flex items-start gap-2.5 text-xs text-white/70">
                    <Icon name={item.icon} className="mt-0.5 size-4 shrink-0 text-moss-soft" />
                    {item.title}
                  </p>
                ))}
              </div>
              <Link
                href="/estimate"
                className="mt-5 flex items-center justify-between rounded-2xl border border-white/15 bg-white/5 px-4 py-3 text-xs font-bold text-white transition-colors hover:bg-white/10"
              >
                Get an estimate first
                <Icon name="arrowRight" className="size-4 text-gold" />
              </Link>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
