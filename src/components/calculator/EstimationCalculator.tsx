"use client";

import { useMemo } from "react";
import { useAppSelector } from "@/store/hooks";
import { calculateEstimate } from "@/lib/estimate";
import CalculatorControls from "./CalculatorControls";
import CalculatorSummary from "./CalculatorSummary";
import Icon from "@/components/ui/Icon";
import Reveal from "@/components/ui/Reveal";

export default function EstimationCalculator() {
  const input = useAppSelector((state) => state.calculator);
  const result = useMemo(() => calculateEstimate(input), [input]);

  return (
    <div className="grid items-start gap-8 lg:grid-cols-[1.35fr_0.9fr] lg:gap-10">
      <Reveal className="card p-5 sm:p-8">
        <div className="mb-6 flex items-center gap-3">
          <span className="grid size-11 place-items-center rounded-2xl bg-copper/10 text-copper">
            <Icon name="calculator" className="size-5" />
          </span>
          <div>
            <h2 className="font-display text-xl text-ink sm:text-2xl">
              Build your roof estimate
            </h2>
            <p className="text-xs text-muted">
              Adjust the details — the range updates instantly.
            </p>
          </div>
        </div>
        <CalculatorControls />
      </Reveal>

      <Reveal delay={120} className="lg:sticky lg:top-28">
        <CalculatorSummary result={result} />
      </Reveal>
    </div>
  );
}
