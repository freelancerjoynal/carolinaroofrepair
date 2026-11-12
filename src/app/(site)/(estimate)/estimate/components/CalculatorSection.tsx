import SectionHeading from "@/components/ui/SectionHeading";
import EstimationCalculator from "@/components/calculator/EstimationCalculator";
import Icon from "@/components/ui/Icon";

const notes = [
  "Ranges include materials, labor, tear-off and standard permits",
  "Adjust roof area, material, pitch, stories and extras",
  "Nothing is sent anywhere — the range updates instantly",
];

export default function CalculatorSection() {
  return (
    <section id="calculator" className="section scroll-mt-24 relative overflow-hidden">
      <div className="pointer-events-none absolute -left-24 top-24 size-80 rounded-full bg-sky/60 blur-3xl" />
      <div className="container-x relative">
        <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <SectionHeading
            eyebrow="Instant estimate calculator"
            title={
              <>
                Build a realistic
                <br />
                <span className="text-gradient-dark italic">roofing budget.</span>
              </>
            }
            description="This is a planning tool, not a quote — but it is built on the same installed-cost ranges we use every day. Move the sliders and watch the numbers respond."
          />
          <ul className="shrink-0 space-y-2 md:max-w-xs">
            {notes.map((note) => (
              <li key={note} className="flex items-start gap-2 text-xs text-muted">
                <Icon name="checkCircle" className="mt-0.5 size-4 shrink-0 text-moss" />
                {note}
              </li>
            ))}
          </ul>
        </div>

        <div className="mt-10">
          <EstimationCalculator />
        </div>
      </div>
    </section>
  );
}
