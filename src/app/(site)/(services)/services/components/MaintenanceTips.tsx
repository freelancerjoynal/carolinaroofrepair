import Icon from "@/components/ui/Icon";
import Reveal from "@/components/ui/Reveal";
import SectionHeading from "@/components/ui/SectionHeading";
import { maintenanceTips } from "@/lib/services";

export default function MaintenanceTips() {
  return (
    <section className="section relative overflow-hidden bg-white">
      <div className="container-x relative">
        <SectionHeading
          align="center"
          eyebrow="Keep it healthy"
          title={
            <>
              Six small habits that
              <br />
              <span className="text-gradient-dark italic">add years to a roof.</span>
            </>
          }
          description="You do not need to climb onto the roof. These simple checks catch most problems while they are still inexpensive to fix."
        />

        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {maintenanceTips.map((tip, index) => (
            <Reveal key={tip.title} delay={(index % 3) * 80}>
              <div className="group relative h-full overflow-hidden rounded-3xl border border-line/70 bg-cream/60 p-6 transition-all duration-300 hover:-translate-y-1 hover:border-copper/30 hover:bg-white hover:shadow-[0_24px_55px_-35px_rgba(8,28,46,0.45)]">
                <div className="flex items-center justify-between">
                  <span className="grid size-11 place-items-center rounded-2xl bg-white text-copper shadow-sm transition-colors group-hover:bg-copper group-hover:text-white">
                    <Icon name={tip.icon} className="size-5" />
                  </span>
                  <span className="font-display text-3xl text-line/90">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                </div>
                <h3 className="mt-4 font-display text-lg text-ink">{tip.title}</h3>
                <p className="mt-1.5 text-sm leading-relaxed text-muted">
                  {tip.description}
                </p>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal delay={120}>
          <p className="mx-auto mt-8 max-w-xl text-center text-xs leading-relaxed text-muted">
            <strong className="text-ink">Safety first:</strong> never walk a steep
            or damaged roof. Call{" "}
            <a href="tel:+17044646118" className="font-bold text-copper">
              704-464-6118
            </a>{" "}
            and we will inspect it safely for you.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
