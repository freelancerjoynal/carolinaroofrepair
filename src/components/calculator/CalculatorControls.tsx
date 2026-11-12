"use client";

import Icon from "@/components/ui/Icon";
import { useAppDispatch, useAppSelector } from "@/store/hooks";
import {
  resetCalculator,
  setArea,
  setGutters,
  setMaterial,
  setPitch,
  setStories,
  setTearOff,
} from "@/store/actions";
import { materials, pitches } from "@/lib/estimate";
import { cn } from "@/lib/utils";

function Toggle({
  label,
  description,
  checked,
  onChange,
}: {
  label: string;
  description: string;
  checked: boolean;
  onChange: (next: boolean) => void;
}) {
  return (
    <button
      type="button"
      role="switch"
      aria-checked={checked}
      onClick={() => onChange(!checked)}
      className={cn(
        "flex w-full items-center justify-between gap-4 rounded-2xl border-2 p-4 text-left transition-all",
        checked
          ? "border-copper/50 bg-copper/[0.04]"
          : "border-line/70 bg-white hover:border-copper/30",
      )}
    >
      <span>
        <span className="block text-sm font-bold text-ink">{label}</span>
        <span className="mt-0.5 block text-xs text-muted">{description}</span>
      </span>
      <span
        className={cn(
          "relative h-6 w-11 shrink-0 rounded-full transition-colors",
          checked ? "bg-copper" : "bg-line",
        )}
      >
        <span
          className={cn(
            "absolute top-0.5 size-5 rounded-full bg-white shadow transition-all",
            checked ? "left-[22px]" : "left-0.5",
          )}
        />
      </span>
    </button>
  );
}

export default function CalculatorControls() {
  const dispatch = useAppDispatch();
  const state = useAppSelector((selector) => selector.calculator);

  return (
    <div className="space-y-7">
      <div>
        <div className="flex flex-wrap items-end justify-between gap-3">
          <div>
            <label htmlFor="roof-area" className="text-sm font-bold text-ink">
              Approximate roof area
            </label>
            <p className="mt-0.5 text-xs text-muted">
              Include overhangs. Most homes are 1,200–3,000 sq ft of roof surface.
            </p>
          </div>
          <div className="flex items-center gap-2 rounded-xl border border-line bg-white px-3 py-1.5">
            <input
              id="roof-area-number"
              type="number"
              min={400}
              max={12000}
              step={50}
              value={state.area}
              onChange={(event) => dispatch(setArea(Number(event.target.value)))}
              className="w-20 bg-transparent text-right text-sm font-extrabold text-ink outline-none"
              aria-label="Roof area in square feet"
            />
            <span className="text-xs font-semibold text-muted">sq ft</span>
          </div>
        </div>
        <input
          id="roof-area"
          type="range"
          min={400}
          max={8000}
          step={50}
          value={state.area}
          onChange={(event) => dispatch(setArea(Number(event.target.value)))}
          className="mt-4 h-2 w-full cursor-pointer appearance-none rounded-full bg-line accent-copper"
          style={{
            background: `linear-gradient(to right, #e8642c 0%, #e8642c ${
              ((state.area - 400) / (8000 - 400)) * 100
            }%, #e3d9ca ${((state.area - 400) / (8000 - 400)) * 100}%, #e3d9ca 100%)`,
          }}
        />
        <div className="mt-2 flex justify-between text-[10px] font-semibold uppercase tracking-[0.1em] text-muted/70">
          <span>400</span>
          <span>~ {Math.round((state.area / 100) * 10) / 10} squares</span>
          <span>8,000+</span>
        </div>
      </div>

      <fieldset>
        <legend className="text-sm font-bold text-ink">Roofing material</legend>
        <p className="mt-0.5 text-xs text-muted">
          Installed cost ranges vary by complexity, access and material.
        </p>
        <div className="mt-3 grid gap-2.5 sm:grid-cols-2">
          {materials.map((material) => {
            const checked = state.material === material.id;
            return (
              <label
                key={material.id}
                className={cn(
                  "relative cursor-pointer rounded-2xl border-2 p-3.5 transition-all",
                  checked
                    ? "border-copper bg-copper/[0.04]"
                    : "border-line/70 bg-white hover:border-copper/30",
                )}
              >
                <input
                  type="radio"
                  name="material"
                  value={material.id}
                  checked={checked}
                  onChange={() => dispatch(setMaterial(material.id))}
                  className="sr-only"
                />
                <span className="flex items-center gap-2">
                  <Icon
                    name={material.icon}
                    className={cn("size-4", checked ? "text-copper" : "text-muted")}
                  />
                  <span className="text-xs font-extrabold text-ink">
                    {material.short}
                  </span>
                  {checked ? (
                    <Icon name="checkCircle" className="ml-auto size-4 text-copper" />
                  ) : null}
                </span>
                <span className="mt-1.5 block text-[11px] leading-snug text-muted">
                  {material.lifespan} · ${material.lowPerSqFt.toFixed(2)}–
                  {material.highPerSqFt.toFixed(2)}/sq ft
                </span>
              </label>
            );
          })}
        </div>
      </fieldset>

      <div className="grid gap-6 sm:grid-cols-2">
        <fieldset>
          <legend className="text-sm font-bold text-ink">Roof pitch</legend>
          <div className="mt-3 grid grid-cols-2 gap-2">
            {pitches.map((pitch) => {
              const checked = state.pitch === pitch.id;
              return (
                <label
                  key={pitch.id}
                  className={cn(
                    "cursor-pointer rounded-xl border-2 px-3 py-2.5 text-center transition-all",
                    checked
                      ? "border-copper bg-copper text-white"
                      : "border-line/70 bg-white text-ink hover:border-copper/30",
                  )}
                >
                  <input
                    type="radio"
                    name="pitch"
                    value={pitch.id}
                    checked={checked}
                    onChange={() => dispatch(setPitch(pitch.id))}
                    className="sr-only"
                  />
                  <span className="block text-xs font-extrabold">{pitch.label}</span>
                  <span
                    className={cn(
                      "mt-0.5 block text-[10px]",
                      checked ? "text-white/70" : "text-muted",
                    )}
                  >
                    {pitch.note}
                  </span>
                </label>
              );
            })}
          </div>
        </fieldset>

        <fieldset>
          <legend className="text-sm font-bold text-ink">Stories</legend>
          <div className="mt-3 grid grid-cols-3 gap-2">
            {([1, 2, 3] as const).map((story) => {
              const checked = state.stories === story;
              return (
                <label
                  key={story}
                  className={cn(
                    "cursor-pointer rounded-xl border-2 px-2 py-3 text-center transition-all",
                    checked
                      ? "border-copper bg-copper text-white"
                      : "border-line/70 bg-white text-ink hover:border-copper/30",
                  )}
                >
                  <input
                    type="radio"
                    name="stories"
                    value={story}
                    checked={checked}
                    onChange={() => dispatch(setStories(story))}
                    className="sr-only"
                  />
                  <span className="block font-display text-lg leading-none">
                    {story}
                  </span>
                  <span
                    className={cn(
                      "mt-1 block text-[10px] font-bold uppercase tracking-[0.1em]",
                      checked ? "text-white/70" : "text-muted",
                    )}
                  >
                    {story === 1 ? "Story" : "Stories"}
                  </span>
                </label>
              );
            })}
          </div>
        </fieldset>
      </div>

      <div className="grid gap-2.5 sm:grid-cols-2">
        <Toggle
          label="Full tear-off & disposal"
          description="Remove the old roof down to the deck"
          checked={state.tearOff}
          onChange={(next) => dispatch(setTearOff(next))}
        />
        <Toggle
          label="Add a gutter package"
          description="Seamless gutters and downspouts"
          checked={state.gutters}
          onChange={(next) => dispatch(setGutters(next))}
        />
      </div>

      <button
        type="button"
        onClick={() => dispatch(resetCalculator())}
        className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.12em] text-muted transition-colors hover:text-copper"
      >
        <Icon name="recycle" className="size-3.5" />
        Reset calculator
      </button>
    </div>
  );
}
