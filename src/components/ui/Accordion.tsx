"use client";

import { useState } from "react";
import type { Faq } from "@/lib/types";
import Icon from "./Icon";
import { cn } from "@/lib/utils";

type AccordionProps = {
  items: Faq[];
  defaultOpen?: number | null;
  className?: string;
};

export default function Accordion({
  items,
  defaultOpen = 0,
  className,
}: AccordionProps) {
  const [open, setOpen] = useState<number | null>(defaultOpen);

  return (
    <div className={cn("divide-y divide-line/70", className)}>
      {items.map((item, index) => {
        const isOpen = open === index;
        return (
          <div key={item.question} className="py-1">
            <button
              type="button"
              onClick={() => setOpen(isOpen ? null : index)}
              aria-expanded={isOpen}
              className="group flex w-full items-start justify-between gap-6 py-5 text-left"
            >
              <span
                className={cn(
                  "font-display text-lg leading-snug transition-colors sm:text-xl",
                  isOpen ? "text-copper" : "text-ink group-hover:text-copper",
                )}
              >
                {item.question}
              </span>
              <span
                className={cn(
                  "mt-0.5 grid size-9 shrink-0 place-items-center rounded-full border transition-all duration-300",
                  isOpen
                    ? "rotate-180 border-copper bg-copper text-white"
                    : "border-line bg-white text-ink group-hover:border-copper/50",
                )}
              >
                <Icon name="chevronDown" className="size-4" />
              </span>
            </button>
            <div
              className={cn(
                "grid transition-all duration-300 ease-out",
                isOpen
                  ? "grid-rows-[1fr] opacity-100"
                  : "grid-rows-[0fr] opacity-0",
              )}
            >
              <div className="overflow-hidden">
                <p className="max-w-3xl pb-5 pr-12 text-sm leading-relaxed text-muted sm:text-base">
                  {item.answer}
                </p>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
