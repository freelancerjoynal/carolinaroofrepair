import Icon from "@/components/ui/Icon";
import Reveal from "@/components/ui/Reveal";
import { site } from "@/lib/site";

const hours = [
  { day: "Monday", time: "10:00 am – 5:00 pm" },
  { day: "Tuesday", time: "9:00 am – 6:00 pm" },
  { day: "Wednesday", time: "9:00 am – 6:00 pm" },
  { day: "Thursday", time: "9:00 am – 6:00 pm" },
  { day: "Friday", time: "By appointment" },
  { day: "Saturday", time: "By appointment" },
  { day: "Sunday", time: "Closed" },
];

export default function HoursSection() {
  return (
    <section className="section-tight relative overflow-hidden bg-cream">
      <div className="container-x relative">
        <div className="grid gap-6 lg:grid-cols-[1fr_1fr] lg:gap-10">
          <Reveal>
            <div className="card h-full p-6 sm:p-8">
              <div className="flex items-center gap-3">
                <span className="grid size-11 place-items-center rounded-2xl bg-copper/10 text-copper">
                  <Icon name="clock" className="size-5" />
                </span>
                <div>
                  <p className="text-[10px] font-bold uppercase tracking-[0.16em] text-muted">
                    Office hours
                  </p>
                  <h2 className="font-display text-2xl text-ink">When to reach us</h2>
                </div>
              </div>
              <dl className="mt-6 divide-y divide-line/70">
                {hours.map((row) => (
                  <div
                    key={row.day}
                    className="flex items-center justify-between py-2.5 text-sm"
                  >
                    <dt className="font-semibold text-ink/75">{row.day}</dt>
                    <dd
                      className={
                        row.time === "Closed"
                          ? "text-muted/60"
                          : "font-semibold text-ink"
                      }
                    >
                      {row.time}
                    </dd>
                  </div>
                ))}
              </dl>
              <p className="mt-4 rounded-xl bg-cream px-3 py-2.5 text-[11px] leading-relaxed text-muted">
                <strong className="text-ink">Email support is available 24/7.</strong>{" "}
                Messages sent outside office hours are answered the next business
                day, with storm emergencies prioritized.
              </p>
            </div>
          </Reveal>

          <Reveal direction="right" delay={100}>
            <div className="relative h-full overflow-hidden rounded-[1.65rem] bg-ink p-6 text-white sm:p-8">
              <div className="absolute inset-0 bg-grid-light opacity-40" />
              <div className="pointer-events-none absolute -right-10 -top-10 size-52 rounded-full bg-copper/25 blur-3xl" />
              <div className="pointer-events-none absolute -bottom-16 -left-8 size-48 rounded-full bg-moss/25 blur-3xl" />
              <div className="relative flex h-full flex-col">
                <Icon name="phone" className="size-7 text-gold" />
                <h2 className="display-md mt-4 text-white">
                  Storm damage does not
                  <br />
                  keep office hours.
                </h2>
                <p className="mt-3 max-w-sm text-sm leading-relaxed text-white/60">
                  Leave a message or send an email any time. We monitor requests
                  around the clock during severe weather and respond as quickly as
                  it is safe to do so.
                </p>
                <div className="mt-6 space-y-2.5">
                  <a
                    href={site.phoneHref}
                    className="flex items-center justify-between rounded-xl border border-white/15 bg-white/5 px-4 py-3 text-sm font-bold transition-colors hover:bg-white/10"
                  >
                    {site.phoneDisplay}
                    <Icon name="arrowUpRight" className="size-4 text-gold" />
                  </a>
                  <a
                    href={site.phoneAltHref}
                    className="flex items-center justify-between rounded-xl border border-white/15 bg-white/5 px-4 py-3 text-sm font-bold transition-colors hover:bg-white/10"
                  >
                    {site.phoneAltDisplay}
                    <span className="text-[10px] font-semibold uppercase tracking-[0.1em] text-white/40">
                      Alt line
                    </span>
                  </a>
                  <a
                    href={site.emailHref}
                    className="flex items-center justify-between rounded-xl border border-white/15 bg-white/5 px-4 py-3 text-xs font-bold transition-colors hover:bg-white/10"
                  >
                    <span className="break-all">{site.email}</span>
                    <Icon name="mail" className="size-4 shrink-0 text-gold" />
                  </a>
                </div>
                <p className="mt-auto pt-6 text-[10px] leading-relaxed text-white/35">
                  For life-threatening emergencies, call 911. Roofing emergencies
                  are handled in order of severity and weather safety.
                </p>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
