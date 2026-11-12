import Link from "next/link";
import type { Service } from "@/lib/types";
import Icon from "./Icon";
import { cn } from "@/lib/utils";

const accents = {
  copper: "bg-copper/10 text-copper group-hover:bg-copper",
  moss: "bg-moss/10 text-moss group-hover:bg-moss",
  sky: "bg-sky-deep/70 text-ink-light group-hover:bg-ink-light",
  gold: "bg-gold/15 text-[#a06a12] group-hover:bg-gold",
};

export default function ServiceCard({ service }: { service: Service }) {
  return (
    <Link
      href={`/services#${service.slug}`}
      className="card card-hover group flex h-full flex-col p-6 sm:p-7"
    >
      <div className="flex items-start justify-between gap-4">
        <span
          className={cn(
            "grid size-13 place-items-center rounded-2xl transition-colors duration-300 group-hover:text-white",
            accents[service.accent],
          )}
        >
          <Icon name={service.icon} className="size-6" />
        </span>
        <Icon
          name="arrowUpRight"
          className="size-5 text-muted/40 transition-all duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-copper"
        />
      </div>
      <h3 className="mt-5 font-display text-xl text-ink transition-colors group-hover:text-copper">
        {service.title}
      </h3>
      <p className="mt-3 text-sm leading-relaxed text-muted">{service.short}</p>
      <span className="mt-auto pt-5 text-xs font-bold uppercase tracking-[0.14em] text-copper">
        Explore service
      </span>
    </Link>
  );
}
