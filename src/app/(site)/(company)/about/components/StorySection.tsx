import Image from "next/image";
import Link from "next/link";
import Icon from "@/components/ui/Icon";
import Reveal from "@/components/ui/Reveal";

const highlights = [
  { value: "5,000+", label: "Major U.S. hail storms yearly" },
  { value: "Class 4", label: "UL 2218 impact rating" },
  { value: "50 yrs", label: "Potential Euroshield lifespan" },
  { value: "2", label: "Carolinas served, one local team" },
];

export default function StorySection() {
  return (
    <section className="section relative overflow-hidden">
      <div className="pointer-events-none absolute -left-24 top-24 size-80 rounded-full bg-sky/60 blur-3xl" />
      <div className="container-x relative grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
        <Reveal direction="left" className="relative mx-auto w-full max-w-lg lg:mx-0">
          <div className="relative aspect-[4/4.3] overflow-hidden rounded-[2rem] shadow-[0_30px_70px_-40px_rgba(8,28,46,0.55)]">
            <Image
              src="/images/roof-repair-update.jpg"
              alt="Completed roofing project in the Carolinas"
              fill
              sizes="(max-width: 1024px) 90vw, 44vw"
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-ink/55 via-transparent to-transparent" />
            <div className="absolute inset-x-5 bottom-5 rounded-2xl bg-white/95 p-4 backdrop-blur">
              <div className="flex items-center gap-3">
                <span className="grid size-10 shrink-0 place-items-center rounded-full bg-moss/10 text-moss">
                  <Icon name="home" className="size-5" />
                </span>
                <p className="text-xs font-bold leading-snug text-ink">
                  Built for Carolina weather
                  <span className="block text-[10px] font-medium text-muted">
                    Hail, wind, humidity and sun
                  </span>
                </p>
              </div>
            </div>
          </div>
          <div className="absolute -right-3 -top-4 rotate-3 rounded-2xl bg-ink px-4 py-3 text-white shadow-xl">
            <p className="text-[9px] font-bold uppercase tracking-[0.12em] text-gold">
              Local since
            </p>
            <p className="font-display text-xl leading-none">2015</p>
          </div>
          <div className="absolute -bottom-5 -left-3 hidden rotate-[-4deg] rounded-2xl border border-line bg-white px-4 py-3 shadow-xl sm:block">
            <p className="text-[9px] font-bold uppercase tracking-[0.12em] text-muted">
              Based in
            </p>
            <p className="font-display text-lg leading-none text-ink">
              Norwood, NC
            </p>
          </div>
        </Reveal>

        <Reveal direction="right">
          <span className="eyebrow">
            <span className="h-px w-7 bg-copper/70" />
            Our story
          </span>
          <h2 className="display-lg mt-4">
            We built the company
            <br />
            <span className="text-gradient-dark italic">we would want to hire.</span>
          </h2>
          <p className="mt-5 text-base leading-relaxed text-muted">
            Carolina Roof Repair proudly serves the Carolinas with comprehensive
            roof repair, replacement and inspection services designed to lengthen
            the life of your existing roof and keep it doing its one essential job
            — protecting the people underneath it.
          </p>
          <p className="mt-3 text-base leading-relaxed text-muted">
            We have deliberately aligned ourselves with the best people and
            products in the industry. That means certified, insured crews,
            manufacturer-backed systems like Euroshield, and a team that answers
            the phone after the project is finished. Our clients deserve
            world-class roofing solutions delivered by an expert and honest team.
          </p>

          <div className="mt-7 grid grid-cols-2 gap-3">
            {highlights.map((item) => (
              <div
                key={item.label}
                className="rounded-2xl border border-line/70 bg-white p-4"
              >
                <p className="font-display text-2xl leading-none text-ink">
                  {item.value}
                </p>
                <p className="mt-1.5 text-[10px] font-bold uppercase leading-relaxed tracking-[0.1em] text-muted">
                  {item.label}
                </p>
              </div>
            ))}
          </div>

          <div className="mt-7 flex flex-wrap gap-3">
            <Link href="/services" className="btn btn-primary">
              Explore our services
              <Icon name="arrowRight" className="size-4" />
            </Link>
            <Link href="/contact" className="btn btn-outline-dark">
              Talk to the team
            </Link>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
