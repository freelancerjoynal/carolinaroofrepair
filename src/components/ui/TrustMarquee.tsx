import Icon from "./Icon";
import { trustPoints } from "@/lib/site";

export default function TrustMarquee() {
  const items = [...trustPoints, ...trustPoints];

  return (
    <div className="group relative overflow-hidden border-y border-line/70 bg-white/70 py-3.5">
      <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-16 bg-gradient-to-r from-cream to-transparent" />
      <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-16 bg-gradient-to-l from-cream to-transparent" />
      <div className="flex w-max animate-marquee items-center gap-10 group-hover:[animation-play-state:paused]">
        {items.map((item, index) => (
          <span
            key={`${item}-${index}`}
            className="flex items-center gap-2.5 text-xs font-bold uppercase tracking-[0.16em] text-ink/65"
          >
            <Icon name="checkCircle" className="size-4 text-copper" />
            {item}
          </span>
        ))}
      </div>
    </div>
  );
}
