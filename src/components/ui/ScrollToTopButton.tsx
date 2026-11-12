"use client";

import { useEffect, useState } from "react";
import Icon from "./Icon";
import { cn } from "@/lib/utils";

export default function ScrollToTopButton() {
  const [visible, setVisible] = useState(false);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const onScroll = () => {
      const scrollTop = window.scrollY;
      const height =
        document.documentElement.scrollHeight - window.innerHeight || 1;
      setProgress(Math.min(1, Math.max(0, scrollTop / height)));
      setVisible(scrollTop > 360);
    };

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, []);

  const radius = 20;
  const circumference = 2 * Math.PI * radius;

  return (
    <button
      type="button"
      aria-label="Scroll back to top"
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      className={cn(
        "group fixed bottom-5 right-4 z-50 grid size-14 place-items-center rounded-full bg-ink text-white shadow-[0_18px_45px_-16px_rgba(8,28,46,0.8)] transition-all duration-300 hover:-translate-y-1 hover:bg-ink-soft sm:bottom-7 sm:right-6",
        visible
          ? "pointer-events-auto translate-y-0 opacity-100"
          : "pointer-events-none translate-y-5 opacity-0",
      )}
    >
      <svg
        viewBox="0 0 48 48"
        className="absolute inset-0 size-full -rotate-90"
        aria-hidden="true"
      >
        <circle
          cx="24"
          cy="24"
          r={radius}
          fill="none"
          stroke="rgba(255,255,255,0.16)"
          strokeWidth="2.5"
        />
        <circle
          cx="24"
          cy="24"
          r={radius}
          fill="none"
          stroke="#f2b457"
          strokeWidth="2.5"
          strokeLinecap="round"
          strokeDasharray={circumference}
          strokeDashoffset={circumference * (1 - progress)}
          className="transition-[stroke-dashoffset] duration-150"
        />
      </svg>
      <Icon
        name="arrowUp"
        className="relative size-5 transition-transform duration-300 group-hover:-translate-y-0.5"
      />
    </button>
  );
}
