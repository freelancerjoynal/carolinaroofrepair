"use client";

import { useState } from "react";
import Icon from "@/components/ui/Icon";
import { cn, formatPhone } from "@/lib/utils";

type Fields = {
  name: string;
  email: string;
  phone: string;
  topic: string;
  message: string;
};

const topics = [
  "Roof repair",
  "Roof replacement",
  "Euroshield",
  "Roof inspection",
  "Leak diagnosis",
  "Emergency tarping",
  "Gutters",
  "Something else",
];

const initial: Fields = {
  name: "",
  email: "",
  phone: "",
  topic: "Roof repair",
  message: "",
};

export default function ContactForm() {
  const [fields, setFields] = useState<Fields>(initial);
  const [errors, setErrors] = useState<Partial<Record<keyof Fields, string>>>({});
  const [status, setStatus] = useState<"idle" | "sending" | "sent">("idle");

  const set = (key: keyof Fields, value: string) => {
    setFields((prev) => ({ ...prev, [key]: value }));
    setErrors((prev) => ({ ...prev, [key]: undefined }));
  };

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    const next: Partial<Record<keyof Fields, string>> = {};
    if (!fields.name.trim()) next.name = "Please share your name.";
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(fields.email.trim()))
      next.email = "Enter a valid email address.";
    if (fields.phone.replace(/\D/g, "").length < 10)
      next.phone = "Enter a 10-digit phone number.";
    if (fields.message.trim().length < 10)
      next.message = "Tell us a little about the project (10+ characters).";
    setErrors(next);
    if (Object.keys(next).length > 0) return;

    setStatus("sending");
    window.setTimeout(() => setStatus("sent"), 1200);
  };

  if (status === "sent") {
    return (
      <div className="flex h-full flex-col items-center justify-center py-10 text-center">
        <div className="relative grid size-20 place-items-center rounded-full bg-moss/10">
          <span className="absolute inset-0 animate-ring rounded-full border-2 border-moss/30" />
          <span className="grid size-14 place-items-center rounded-full bg-moss text-white">
            <Icon name="check" className="size-7" strokeWidth={2.5} />
          </span>
        </div>
        <h3 className="mt-6 font-display text-2xl text-ink">Message sent — thank you.</h3>
        <p className="mt-2 max-w-sm text-sm leading-relaxed text-muted">
          We will read your note and get back to you, usually within one business
          day. For an active leak, please call so we can prioritize it.
        </p>
        <button
          type="button"
          onClick={() => {
            setFields(initial);
            setStatus("idle");
          }}
          className="btn btn-outline-dark mt-6"
        >
          Send another message
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4" noValidate>
      <div className="grid gap-4 sm:grid-cols-2">
        <div>
          <label
            htmlFor="c-name"
            className="mb-1.5 block text-xs font-bold uppercase tracking-[0.12em] text-ink/70"
          >
            Full name <span className="text-copper">*</span>
          </label>
          <input
            id="c-name"
            autoComplete="name"
            value={fields.name}
            onChange={(event) => set("name", event.target.value)}
            placeholder="Jordan Smith"
            className={cn("input-base", errors.name && "input-error")}
          />
          {errors.name ? (
            <p className="mt-1.5 text-xs font-semibold text-[#c24c3c]">{errors.name}</p>
          ) : null}
        </div>
        <div>
          <label
            htmlFor="c-email"
            className="mb-1.5 block text-xs font-bold uppercase tracking-[0.12em] text-ink/70"
          >
            Email <span className="text-copper">*</span>
          </label>
          <input
            id="c-email"
            type="email"
            autoComplete="email"
            value={fields.email}
            onChange={(event) => set("email", event.target.value)}
            placeholder="you@example.com"
            className={cn("input-base", errors.email && "input-error")}
          />
          {errors.email ? (
            <p className="mt-1.5 text-xs font-semibold text-[#c24c3c]">{errors.email}</p>
          ) : null}
        </div>
      </div>

      <div className="grid gap-4 sm:grid-cols-2">
        <div>
          <label
            htmlFor="c-phone"
            className="mb-1.5 block text-xs font-bold uppercase tracking-[0.12em] text-ink/70"
          >
            Phone <span className="text-copper">*</span>
          </label>
          <input
            id="c-phone"
            type="tel"
            autoComplete="tel"
            value={fields.phone}
            onChange={(event) => set("phone", formatPhone(event.target.value))}
            placeholder="(704) 555-0123"
            className={cn("input-base", errors.phone && "input-error")}
          />
          {errors.phone ? (
            <p className="mt-1.5 text-xs font-semibold text-[#c24c3c]">{errors.phone}</p>
          ) : null}
        </div>
        <div>
          <label
            htmlFor="c-topic"
            className="mb-1.5 block text-xs font-bold uppercase tracking-[0.12em] text-ink/70"
          >
            What can we help with?
          </label>
          <select
            id="c-topic"
            value={fields.topic}
            onChange={(event) => set("topic", event.target.value)}
            className="input-base"
          >
            {topics.map((topic) => (
              <option key={topic} value={topic}>
                {topic}
              </option>
            ))}
          </select>
        </div>
      </div>

      <div>
        <label
          htmlFor="c-message"
          className="mb-1.5 block text-xs font-bold uppercase tracking-[0.12em] text-ink/70"
        >
          Message <span className="text-copper">*</span>
        </label>
        <textarea
          id="c-message"
          rows={5}
          value={fields.message}
          onChange={(event) => set("message", event.target.value)}
          placeholder="Tell us what the roof is doing, the property address, and the best way to reach you..."
          className={cn("input-base", errors.message && "input-error")}
        />
        {errors.message ? (
          <p className="mt-1.5 text-xs font-semibold text-[#c24c3c]">{errors.message}</p>
        ) : null}
      </div>

      <button
        type="submit"
        disabled={status === "sending"}
        className="btn btn-primary w-full disabled:cursor-wait disabled:opacity-80"
      >
        {status === "sending" ? (
          <>
            <span className="size-4 animate-spin rounded-full border-2 border-white/40 border-t-white" />
            Sending message…
          </>
        ) : (
          <>
            Send message
            <Icon name="send" className="size-4" />
          </>
        )}
      </button>

      <p className="text-[11px] leading-relaxed text-muted">
        By submitting this form you agree to be contacted about your request.
        Message and data rates may apply. We never sell your information.
      </p>
    </form>
  );
}
