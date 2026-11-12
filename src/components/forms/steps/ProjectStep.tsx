"use client";

import { useAppDispatch, useAppSelector } from "@/store/hooks";
import { updateField } from "@/store/actions";
import { ChoiceCard, ChoicePill, Field } from "../fields";
import { serviceOptions } from "@/lib/services";
import type { IconName } from "@/lib/types";

const serviceIcons: Record<string, IconName> = {
  "roof-repair": "wrench",
  "roof-replacement": "home",
  euroshield: "shieldCheck",
  inspection: "search",
  leak: "droplets",
  tarping: "alert",
  gutters: "rain",
  "not-sure": "sparkles",
};

const timelines = [
  { value: "emergency", label: "Emergency", description: "Active leak or storm damage", icon: "alert" as IconName },
  { value: "2-weeks", label: "Within 2 weeks", description: "Ready to schedule soon", icon: "calendar" as IconName },
  { value: "1-3-months", label: "1–3 months", description: "Planning the project", icon: "clock" as IconName },
  { value: "researching", label: "Just researching", description: "Gathering information", icon: "search" as IconName },
];

export default function ProjectStep() {
  const dispatch = useAppDispatch();
  const { data, errors } = useAppSelector((state) => state.quote);

  const set = (field: "service" | "propertyType" | "timeline", value: string) =>
    dispatch(updateField({ field, value }));

  return (
    <div className="space-y-8">
      <div>
        <h3 className="font-display text-2xl text-ink">What can we help with?</h3>
        <p className="mt-1 text-sm text-muted">
          Pick the closest match — we will confirm the details during your free inspection.
        </p>
        <div className="mt-5 grid gap-2.5 sm:grid-cols-2">
          {serviceOptions.map((option) => (
            <ChoiceCard
              key={option.value}
              name="service"
              value={option.value}
              checked={data.service === option.value}
              onChange={(value) => set("service", value)}
              label={option.label}
              icon={serviceIcons[option.value]}
            />
          ))}
        </div>
        {errors.service ? (
          <p className="mt-2 text-xs font-semibold text-[#c24c3c]">{errors.service}</p>
        ) : null}
      </div>

      <div className="grid gap-6 sm:grid-cols-2">
        <Field label="Property type" required error={errors.propertyType}>
          <div className="grid grid-cols-2 gap-2.5">
            <ChoicePill
              name="propertyType"
              value="residential"
              checked={data.propertyType === "residential"}
              onChange={(value) => set("propertyType", value)}
              label="Residential"
              icon="home"
            />
            <ChoicePill
              name="propertyType"
              value="commercial"
              checked={data.propertyType === "commercial"}
              onChange={(value) => set("propertyType", value)}
              label="Commercial"
              icon="building"
            />
          </div>
        </Field>

        <Field label="Timeline" required error={errors.timeline}>
          <div className="grid grid-cols-2 gap-2.5">
            {timelines.map((item) => (
              <ChoicePill
                key={item.value}
                name="timeline"
                value={item.value}
                checked={data.timeline === item.value}
                onChange={(value) => set("timeline", value)}
                label={item.label}
                icon={item.icon}
              />
            ))}
          </div>
        </Field>
      </div>
    </div>
  );
}
