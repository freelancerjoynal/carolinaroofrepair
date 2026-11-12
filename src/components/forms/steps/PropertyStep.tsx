"use client";

import { useAppDispatch, useAppSelector } from "@/store/hooks";
import { updateField } from "@/store/actions";
import type { QuoteField } from "@/store/types";
import { Field, inputClass } from "../fields";
import Icon from "@/components/ui/Icon";

const roofAges = [
  "Less than 5 years",
  "5–10 years",
  "11–20 years",
  "20+ years",
  "Not sure",
];

const roofMaterials = [
  "Architectural asphalt shingles",
  "3-tab asphalt shingles",
  "Standing seam metal",
  "R-panel metal",
  "Clay or concrete tile",
  "Euroshield rubber",
  "Cedar shake / wood",
  "Flat / low-slope membrane",
  "Not sure",
];

export default function PropertyStep() {
  const dispatch = useAppDispatch();
  const { data, errors } = useAppSelector((state) => state.quote);

  const set = (field: QuoteField, value: string) =>
    dispatch(updateField({ field, value }));

  return (
    <div className="space-y-6">
      <div>
        <h3 className="font-display text-2xl text-ink">Where is the property?</h3>
        <p className="mt-1 text-sm text-muted">
          We use this to confirm your service area and plan a convenient inspection.
        </p>
      </div>

      <Field label="Street address" htmlFor="street" required error={errors.street}>
        <input
          id="street"
          name="street"
          autoComplete="street-address"
          value={String(data.street)}
          onChange={(event) => set("street", event.target.value)}
          placeholder="123 Oak Street"
          className={inputClass(errors.street)}
        />
      </Field>

      <div className="grid gap-4 sm:grid-cols-[1.4fr_0.7fr_0.8fr]">
        <Field label="City" htmlFor="city" required error={errors.city}>
          <input
            id="city"
            name="city"
            autoComplete="address-level2"
            value={String(data.city)}
            onChange={(event) => set("city", event.target.value)}
            placeholder="Norwood"
            className={inputClass(errors.city)}
          />
        </Field>
        <Field label="State" htmlFor="state" required error={errors.state}>
          <select
            id="state"
            name="state"
            autoComplete="address-level1"
            value={String(data.state)}
            onChange={(event) => set("state", event.target.value)}
            className={inputClass(errors.state)}
          >
            <option value="NC">NC</option>
            <option value="SC">SC</option>
          </select>
        </Field>
        <Field label="ZIP" htmlFor="zip" required error={errors.zip}>
          <input
            id="zip"
            name="zip"
            inputMode="numeric"
            autoComplete="postal-code"
            maxLength={5}
            value={String(data.zip)}
            onChange={(event) => set("zip", event.target.value.replace(/\D/g, ""))}
            placeholder="28128"
            className={inputClass(errors.zip)}
          />
        </Field>
      </div>

      <div className="grid gap-4 sm:grid-cols-2">
        <Field label="Roof age" htmlFor="roofAge" hint="Optional">
          <select
            id="roofAge"
            name="roofAge"
            value={String(data.roofAge)}
            onChange={(event) => set("roofAge", event.target.value)}
            className={inputClass()}
          >
            <option value="">Select roof age</option>
            {roofAges.map((age) => (
              <option key={age} value={age}>
                {age}
              </option>
            ))}
          </select>
        </Field>
        <Field label="Roof material" htmlFor="roofMaterial" hint="Optional">
          <select
            id="roofMaterial"
            name="roofMaterial"
            value={String(data.roofMaterial)}
            onChange={(event) => set("roofMaterial", event.target.value)}
            className={inputClass()}
          >
            <option value="">Select material</option>
            {roofMaterials.map((material) => (
              <option key={material} value={material}>
                {material}
              </option>
            ))}
          </select>
        </Field>
      </div>

      <div className="flex items-start gap-3 rounded-2xl border border-sky-deep/70 bg-sky/60 p-4">
        <Icon name="shieldCheck" className="mt-0.5 size-5 shrink-0 text-ink-light" />
        <p className="text-xs leading-relaxed text-ink/70">
          Your address helps us check coverage and weather history. We never sell
          your information, and you will not be added to a spam list.
        </p>
      </div>
    </div>
  );
}
