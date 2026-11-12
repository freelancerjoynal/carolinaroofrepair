import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

type SectionHeadingProps = {
  eyebrow?: string;
  title: ReactNode;
  description?: ReactNode;
  align?: "left" | "center";
  theme?: "light" | "dark";
  className?: string;
  children?: ReactNode;
};

export default function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
  theme = "light",
  className,
  children,
}: SectionHeadingProps) {
  return (
    <div
      className={cn(
        "max-w-2xl",
        align === "center" && "mx-auto text-center",
        className,
      )}
    >
      {eyebrow ? (
        <span className={cn("eyebrow", theme === "dark" && "eyebrow-light")}>
          <span
            className={cn(
              "h-px w-7",
              theme === "dark" ? "bg-gold/70" : "bg-copper/70",
            )}
          />
          {eyebrow}
        </span>
      ) : null}
      <h2
        className={cn(
          "display-lg mt-4",
          theme === "dark" ? "text-white" : "text-ink",
        )}
      >
        {title}
      </h2>
      {description ? (
        <p
          className={cn(
            "mt-5 text-base leading-relaxed sm:text-lg",
            theme === "dark" ? "text-white/70" : "text-muted",
          )}
        >
          {description}
        </p>
      ) : null}
      {children}
    </div>
  );
}
