import Image from "next/image";
import Link from "next/link";
import Icon from "@/components/ui/Icon";
import Reveal from "@/components/ui/Reveal";
import { site, serviceAreas } from "@/lib/site";

const communityPoints = [
  "Local crews who live and work in the same communities they serve",
  "Detailed reports for buyers, sellers and real estate professionals",
  "Storm-response support when neighbors need it most",
  "Recycling-minded roofing options like Euroshield",
];

export default function CommunitySection() {
  return (
    <section className="section relative overflow-hidden bg-cream">
      <div className="container-x relative grid items-center gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:gap-16">
        <Reveal>
          <span className="eyebrow">
            <span className="h-px w-7 bg-copper/70" />
            Part of the community
          </span>
          <h2 className="display-lg mt-4">
            Not a storm chaser.
            <br />
            <span className="text-gradient-dark italic">Your neighbor.</span>
          </h2>
          <p className="mt-5 text-base leading-relaxed text-muted">
            After a major hail or wind event, out-of-town crews tend to appear
            quickly and disappear just as fast. We are based in Norwood and we are
            here year-round — for repairs, maintenance, warranty questions and the
            next project.
          </p>
          <p className="mt-3 text-base leading-relaxed text-muted">
            That local accountability changes how we work. We see the roofs we
            install every day on the drive to the office. We want them to look good
            in five years, not just on the day of installation.
          </p>

          <ul className="mt-6 space-y-2.5">
            {communityPoints.map((point) => (
              <li key={point} className="flex items-start gap-2.5 text-sm text-ink/75">
                <Icon name="checkCircle" className="mt-0.5 size-4 shrink-0 text-moss" />
                {point}
              </li>
            ))}
          </ul>

          <div className="mt-7 flex flex-wrap gap-3">
            <Link href="/contact" className="btn btn-primary">
              Meet the team
              <Icon name="arrowRight" className="size-4" />
            </Link>
            <a
              href={site.facebook}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-outline-dark"
            >
              <Icon name="facebook" className="size-4" />
              See our work
            </a>
          </div>
        </Reveal>

        <Reveal direction="right" className="relative mx-auto w-full max-w-lg lg:mx-0">
          <div className="relative aspect-[4/4.2] overflow-hidden rounded-[2rem] shadow-[0_30px_70px_-40px_rgba(8,28,46,0.55)]">
            <Image
              src="/images/Gutter-Install.jpg"
              alt="Local crew installing gutters on a Carolina home"
              fill
              sizes="(max-width: 1024px) 90vw, 44vw"
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-ink/60 via-transparent to-transparent" />
            <div className="absolute inset-x-5 bottom-5 rounded-2xl bg-white/95 p-4 backdrop-blur">
              <p className="text-[10px] font-bold uppercase tracking-[0.14em] text-muted">
                Based in Norwood, NC
              </p>
              <p className="mt-0.5 font-display text-lg leading-tight text-ink">
                Serving the Carolinas year-round
              </p>
            </div>
          </div>

          <div className="absolute -right-3 top-6 rounded-2xl bg-moss px-4 py-3 text-white shadow-xl">
            <p className="text-[9px] font-bold uppercase tracking-[0.12em] text-white/60">
              Local team
            </p>
            <p className="font-display text-lg leading-none">Here after the storm</p>
          </div>

          <div className="mt-4 rounded-2xl border border-line/70 bg-white p-4">
            <p className="text-[10px] font-bold uppercase tracking-[0.14em] text-muted">
              Service area
            </p>
            <p className="mt-2 text-xs leading-relaxed text-ink/70">
              {serviceAreas.slice(0, 10).join(" · ")} and surrounding communities.
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
