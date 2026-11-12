"use client";

import { useAppDispatch, useAppSelector } from "@/store/hooks";
import { updateField } from "@/store/actions";
import type { QuoteField } from "@/store/types";
import { ChoicePill, Field, inputClass } from "../fields";
import { formatPhone } from "@/lib/utils";

export default function ContactStep() {
  const dispatch = useAppDispatch();
  const { data, errors } = useAppSelector((state) => state.quote);

  const set = (field: QuoteField, value: string) =>
    dispatch(updateField({ field, value }));

  return (
    <div className="space-y-6">
      <div>
        <h3 className="font-display text-2xl text-ink">How should we reach you?</h3>
        <p className="mt-1 text-sm text-muted">
          A real member of our team will follow up — usually within one business day.
        </p>
      </div>

      <div className="grid gap-4 sm:grid-cols-2">
        <Field label="Full name" htmlFor="name" required error={errors.name}>
          <input
            id="name"
            name="name"
            autoComplete="name"
            value={String(data.name)}
            onChange={(event) => set("name", event.target.value)}
            placeholder="Jordan Smith"
            className={inputClass(errors.name)}
          />
        </Field>
        <Field label="Email" htmlFor="email" required error={errors.email}>
          <input
            id="email"
            name="email"
            type="email"
            autoComplete="email"
            value={String(data.email)}
            onChange={(event) => set("email", event.target.value)}
            placeholder="you@example.com"
            className={inputClass(errors.email)}
          />
        </Field>
      </div>

      <div className="grid gap-4 sm:grid-cols-2">
        <Field label="Phone" htmlFor="phone" required error={errors.phone}>
          <input
            id="phone"
            name="phone"
            type="tel"
            autoComplete="tel"
            value={String(data.phone)}
            onChange={(event) => set("phone", formatPhone(event.target.value))}
            placeholder="(704) 555-0123"
            className={inputClass(errors.phone)}
          />
        </Field>
        <Field label="Preferred contact" required error={errors.contactMethod}>
          <div className="grid grid-cols-3 gap-2">
            {[
              { value: "phone", label: "Phone", icon: "phone" as const },
              { value: "email", label: "Email", icon: "mail" as const },
              { value: "text", label: "Text", icon: "send" as const },
            ].map((option) => (
              <ChoicePill
                key={option.value}
                name="contactMethod"
                value={option.value}
                checked={data.contactMethod === option.value}
                onChange={(value) => set("contactMethod", value)}
                label={option.label}
                icon={option.icon}
              />
            ))}
          </div>
        </Field>
      </div>

      <Field
        label="Tell us about the project"
        htmlFor="message"
        hint="Optional"
      >
        <textarea
          id="message"
          name="message"
          rows={4}
          value={String(data.message)}
          onChange={(event) => set("message", event.target.value)}
          placeholder="I noticed a water stain on the ceiling after last week's storm. The roof is about 15 years old..."
          className={inputClass()}
        />
      </Field>

      <p className="rounded-2xl bg-cream px-4 py-3 text-xs leading-relaxed text-muted">
        By providing your number you agree to be contacted about your roofing
        request. Message and data rates may apply. We do not sell or share your
        information with unrelated third parties.
      </p>
    </div>
  );
}
