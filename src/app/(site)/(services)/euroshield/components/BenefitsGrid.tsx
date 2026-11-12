import Icon from "@/components/ui/Icon";
import Reveal from "@/components/ui/Reveal";
import SectionHeading from "@/components/ui/SectionHeading";

const benefits = [
  {
    title: "70% recycled materials",
    description:
      "Turning recycled tires into a functional, beautiful roof is a significant step toward less waste and better protection.",
    icon: "recycle" as const,
    accent: "bg-moss text-white",
  },
  {
    title: "Wind protection",
    description:
      "Euroshield roofs offer superior wind performance over traditional asphalt shingles thanks to a sophisticated locking system.",
    icon: "wind" as const,
    accent: "bg-ink text-gold",
  },
  {
    title: "Hail protection",
    description:
      "Euroshield provides unmatched hail protection as a result of its superior impact durability and Class 4 rating.",
    icon: "cloudHail" as const,
    accent: "bg-copper text-white",
  },
  {
    title: "Unbeatable warranty",
    description:
      "Euroshield roofs come with an unbeatable warranty, ensuring long-lasting protection and customer satisfaction.",
    icon: "award" as const,
    accent: "bg-gold text-ink",
  },
  {
    title: "North American made",
    description:
      "Euroshield products are all made in North America — supporting local manufacturing and dependable material sourcing.",
    icon: "mapPin" as const,
    accent: "bg-sky-deep text-ink",
  },
];

export default function BenefitsGrid() {
  return (
    <section className="section relative overflow-hidden bg-cream">
      <div className="container-x relative">
        <SectionHeading
          eyebrow="The top five benefits"
          title={
            <>
              Why homeowners choose
              <br />
              <span className="text-gradient-dark italic">Euroshield rubber.</span>
            </>
          }
          description="It is not just a different material. It is a different set of trade-offs — fewer repairs, less waste, more peace of mind."
          align="center"
        />

        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {benefits.map((benefit, index) => (
            <Reveal
              key={benefit.title}
              delay={(index % 3) * 80}
              className={index === 0 ? "sm:col-span-2 lg:col-span-1" : ""}
            >
              <div className="group h-full rounded-3xl border border-line/70 bg-white p-6 transition-all duration-300 hover:-translate-y-1 hover:border-copper/40 hover:shadow-[0_24px_55px_-35px_rgba(8,28,46,0.5)]">
                <div className="flex items-start justify-between">
                  <span
                    className={`grid size-12 place-items-center rounded-2xl ${benefit.accent}`}
                  >
                    <Icon name={benefit.icon} className="size-5" />
                  </span>
                  <span className="font-display text-3xl text-line">
                    0{index + 1}
                  </span>
                </div>
                <h3 className="mt-5 font-display text-xl text-ink">{benefit.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted">
                  {benefit.description}
                </p>
              </div>
            </Reveal>
          ))}

          <Reveal delay={200}>
            <div className="flex h-full flex-col justify-between rounded-3xl bg-ink p-6 text-white">
              <div>
                <Icon name="sparkles" className="size-6 text-gold" />
                <p className="mt-4 font-display text-xl leading-snug">
                  &ldquo;Almost indestructible&rdquo; is not marketing. It is the
                  material.
                </p>
              </div>
              <a
                href="/estimate"
                className="mt-6 inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.12em] text-gold hover:text-white"
              >
                Get my estimate
                <Icon name="arrowRight" className="size-3.5" />
              </a>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
