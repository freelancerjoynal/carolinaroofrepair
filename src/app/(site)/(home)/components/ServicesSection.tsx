import Link from "next/link";
import SectionHeading from "@/components/ui/SectionHeading";
import ServiceCard from "@/components/ui/ServiceCard";
import Reveal from "@/components/ui/Reveal";
import Icon from "@/components/ui/Icon";
import { services } from "@/lib/services";

export default function ServicesSection() {
  return (
    <section id="services" className="section relative overflow-hidden">
      <div className="pointer-events-none absolute right-0 top-20 size-80 rounded-full bg-sand/80 blur-3xl" />
      <div className="container-x relative">
        <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <SectionHeading
            eyebrow="What we offer"
            title={
              <>
                Complete roof care,{" "}
                <span className="text-gradient-dark italic">under one roof.</span>
              </>
            }
            description="From a single leak to a full hail-proof system, our crew handles the diagnosis, the repair and the paperwork — with the same local team from start to finish."
          />
          <Link
            href="/services"
            className="group flex shrink-0 items-center gap-2 text-sm font-bold text-ink transition-colors hover:text-copper"
          >
            Explore all services
            <span className="grid size-9 place-items-center rounded-full border border-line bg-white transition-all group-hover:border-copper group-hover:bg-copper group-hover:text-white">
              <Icon name="arrowRight" className="size-4" />
            </span>
          </Link>
        </div>

        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {services.map((service, index) => (
            <Reveal key={service.slug} delay={(index % 4) * 70}>
              <ServiceCard service={service} />
            </Reveal>
          ))}
        </div>

        <Reveal delay={120}>
          <div className="mt-8 flex flex-col items-center justify-between gap-4 rounded-2xl border border-line/70 bg-sand/40 px-5 py-4 sm:flex-row">
            <p className="flex items-center gap-3 text-sm text-ink/70">
              <span className="grid size-9 place-items-center rounded-full bg-white text-copper shadow-sm">
                <Icon name="search" className="size-4" />
              </span>
              Not sure what your roof needs? Start with a free inspection.
            </p>
            <Link
              href="/contact"
              className="text-sm font-bold text-copper underline-offset-4 hover:underline"
            >
              Book an inspection →
            </Link>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
