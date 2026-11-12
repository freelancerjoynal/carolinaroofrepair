import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

type BadgeProps = {
  children: ReactNode;
  theme?: "light" | "dark" | "copper" | "moss";
  className?: string;
};

const variants = {
  light: "bg-white/80 text-ink border-line/70",
  dark: "bg-white/10 text-white border-white/20",
  copper: "bg-copper/10 text-copper border-copper/20",
  moss: "bg-moss/10 text-moss border-moss/20",
};

export default function Badge({
  children,
  theme = "copper",
  className,
}: BadgeProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center gap-2 rounded-full border px-3.5 py-1.5 text-xs font-bold uppercase tracking-[0.14em]",
        variants[theme],
        className,
      )}
    >
      {children}
    </span>
  );
}
