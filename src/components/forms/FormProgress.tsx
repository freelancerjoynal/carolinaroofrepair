"use client";

import Icon from "@/components/ui/Icon";
import { cn } from "@/lib/utils";

const steps = ["Project", "Property", "Contact", "Review"];

type FormProgressProps = {
  current: number;
  onStepClick?: (step: number) => void;
};

export default function FormProgress({ current, onStepClick }: FormProgressProps) {
  return (
    <ol className="flex items-center gap-1.5 sm:gap-3">
      {steps.map((label, index) => {
        const complete = index < current;
        const active = index === current;
        const clickable = Boolean(onStepClick) && index < current;

        return (
          <li key={label} className="flex min-w-0 flex-1 items-center gap-1.5 sm:gap-2">
            <button
              type="button"
              onClick={() => clickable && onStepClick?.(index)}
              disabled={!clickable}
              aria-current={active ? "step" : undefined}
              className={cn(
                "flex min-w-0 items-center gap-2 rounded-full text-left",
                clickable ? "cursor-pointer" : "cursor-default",
              )}
            >
              <span
                className={cn(
                  "grid size-8 shrink-0 place-items-center rounded-full border-2 text-xs font-extrabold transition-all duration-300 sm:size-9",
                  active
                    ? "border-copper bg-copper text-white shadow-[0_8px_20px_-10px_rgba(232,100,44,0.9)]"
                    : complete
                      ? "border-moss bg-moss text-white"
                      : "border-line bg-white text-muted",
                )}
              >
                {complete ? (
                  <Icon name="check" className="size-4" strokeWidth={3} />
                ) : (
                  index + 1
                )}
              </span>
              <span
                className={cn(
                  "hidden truncate text-xs font-bold uppercase tracking-[0.08em] sm:block",
                  active ? "text-ink" : complete ? "text-moss" : "text-muted/70",
                )}
              >
                {label}
              </span>
            </button>
            {index < steps.length - 1 ? (
              <span className="h-0.5 min-w-2 flex-1 rounded-full bg-line/80">
                <span
                  className={cn(
                    "block h-full rounded-full bg-moss transition-all duration-500",
                    index < current ? "w-full" : "w-0",
                  )}
                />
              </span>
            ) : null}
          </li>
        );
      })}
    </ol>
  );
}
