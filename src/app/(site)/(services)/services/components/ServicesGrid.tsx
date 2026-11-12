import Image from "next/image";
import Link from "next/link";
import Icon from "@/components/ui/Icon";
import Reveal from "@/components/ui/Reveal";
import SectionHeading from "@/components/ui/SectionHeading";
import { services } from "@/lib/services";

export default function ServicesGrid() {
  return (
    <section className="section relative overflow-hidden">
      <div className="pointer-events-none absolute -left-24 top-32 size-80 rounded-full bg-sky/60 blur-3xl" />
      <div className="container-x relative">
        <SectionHeading
          eyebrow="Full-service roofing"
          title={
            <>
              Built around the way
              <br />
              <span className="text-gradient-dark italic">roofs actually fail.</span>
            </>
          }
          description="Carolina weather attacks from every angle — hail, wind, sun, humidity and torrential rain. Each service below exists to solve a real failure point, not to sell you something you don't need."
        />

        <div className="mt-10 space-y-5">
          {services.map((service, index) => (
            <Reveal key={service.slug} delay={40}>
              <article
                id={service.slug}
                className="group grid scroll-mt-28 overflow-hidden rounded-[1.75rem] border border-line/70 bg-white shadow-[0_22px_55px_-45px_rgba(8,28,46,0.45)] transition-all duration-300 hover:border-copper/30 hover:shadow-[0_28px_60px_-40px_rgba(8,28,46,0.5)] lg:grid-cols-[0.82fr_1.18fr]"
              >
                <div
                  className={`relative min-h-56 overflow-hidden ${
                    index % 2 === 1 ? "lg:order-2" : ""
                  }`}
                >
                  {service.image ? (
                    <Image
                      src={service.image}
                      alt={service.imageAlt ?? service.title}
                      fill
                      sizes="(max-width: 1024px) 100vw, 38vw"
                      className="object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                  ) : (
                    <div className="absolute inset-0 bg-ink" />
                  )}
                  <div className="absolute inset-0 bg-gradient-to-t from-ink/70 via-ink/10 to-transparent lg:bg-gradient-to-r lg:from-ink/40 lg:to-transparent" />
                  <div className="absolute left-4 top-4 flex size-12 items-center justify-center rounded-2xl bg-white/95 text-copper shadow-lg backdrop-blur">
                    <Icon name={service.icon} className="size-5" />
                  </div>
                  <span className="absolute bottom-4 left-4 rounded-full border border-white/20 bg-ink/60 px-3 py-1 text-[10px] font-bold uppercase tracking-[0.14em] text-gold backdrop-blur">
                    {String(index + 1).padStart(2, "0")} · Service
                  </span>
                </div>

                <div className="p-6 sm:p-8">
                  <div className="flex flex-wrap items-start justify-between gap-3">
                    <h3 className="font-display text-2xl text-ink">{service.title}</h3>
                    <Link
                      href="/estimate"
                      className="inline-flex items-center gap-1.5 rounded-full bg-copper/10 px-3 py-1.5 text-[10px] font-bold uppercase tracking-[0.1em] text-copper transition-colors hover:bg-copper hover:text-white"
                    >
                      Get estimate
                      <Icon name="arrowUpRight" className="size-3" />
                    </Link>
                  </div>
                  <p className="mt-3 text-sm leading-relaxed text-muted">
                    {service.description}
                  </p>
                  <ul className="mt-4 grid gap-2 sm:grid-cols-2">
                    {service.features.map((feature) => (
                      <li
                        key={feature}
                        className="flex items-start gap-2 text-xs leading-relaxed text-ink/70"
                      >
                        <Icon
                          name="checkCircle"
                          className="mt-0.5 size-3.5 shrink-0 text-moss"
                        />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
