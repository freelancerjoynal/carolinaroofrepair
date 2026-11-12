import type { ReactNode } from "react";
import Icon from "@/components/ui/Icon";
import { cn } from "@/lib/utils";
import type { IconName } from "@/lib/types";

type FieldProps = {
  label: string;
  htmlFor?: string;
  error?: string;
  hint?: string;
  required?: boolean;
  children: ReactNode;
  className?: string;
};

export function Field({
  label,
  htmlFor,
  error,
  hint,
  required,
  children,
  className,
}: FieldProps) {
  return (
    <div className={className}>
      <label
        htmlFor={htmlFor}
        className="mb-1.5 flex items-center gap-1.5 text-xs font-bold uppercase tracking-[0.12em] text-ink/70"
      >
        {label}
        {required ? <span className="text-copper">*</span> : null}
        {hint ? (
          <span className="ml-auto text-[10px] font-medium normal-case tracking-normal text-muted">
            {hint}
          </span>
        ) : null}
      </label>
      {children}
      {error ? (
        <p className="mt-1.5 flex items-center gap-1.5 text-xs font-semibold text-[#c24c3c]">
          <Icon name="alert" className="size-3.5" />
          {error}
        </p>
      ) : null}
    </div>
  );
}

type ChoiceCardProps = {
  name: string;
  value: string;
  checked: boolean;
  onChange: (value: string) => void;
  label: string;
  description?: string;
  icon?: IconName;
};

export function ChoiceCard({
  name,
  value,
  checked,
  onChange,
  label,
  description,
  icon,
}: ChoiceCardProps) {
  return (
    <label
      className={cn(
        "group relative flex cursor-pointer items-start gap-3 rounded-2xl border-2 bg-white p-4 transition-all duration-200",
        checked
          ? "border-copper bg-copper/[0.04] shadow-[0_10px_30px_-22px_rgba(232,100,44,0.7)]"
          : "border-line/80 hover:border-copper/40 hover:bg-cream/50",
      )}
    >
      <input
        type="radio"
        name={name}
        value={value}
        checked={checked}
        onChange={() => onChange(value)}
        className="sr-only"
      />
      {icon ? (
        <span
          className={cn(
            "grid size-9 shrink-0 place-items-center rounded-xl transition-colors",
            checked ? "bg-copper text-white" : "bg-cream text-ink/60",
          )}
        >
          <Icon name={icon} className="size-[18px]" />
        </span>
      ) : null}
      <span className="min-w-0">
        <span className="block text-sm font-bold text-ink">{label}</span>
        {description ? (
          <span className="mt-0.5 block text-xs leading-relaxed text-muted">
            {description}
          </span>
        ) : null}
      </span>
      <span
        className={cn(
          "ml-auto mt-0.5 grid size-5 shrink-0 place-items-center rounded-full border-2 transition-colors",
          checked ? "border-copper bg-copper" : "border-line",
        )}
      >
        {checked ? <Icon name="check" className="size-3 text-white" strokeWidth={3} /> : null}
      </span>
    </label>
  );
}

type ChoicePillProps = {
  name: string;
  value: string;
  checked: boolean;
  onChange: (value: string) => void;
  label: string;
  icon?: IconName;
};

export function ChoicePill({
  name,
  value,
  checked,
  onChange,
  label,
  icon,
}: ChoicePillProps) {
  return (
    <label
      className={cn(
        "flex cursor-pointer items-center justify-center gap-2 rounded-xl border-2 px-3 py-2.5 text-center text-xs font-bold transition-all duration-200",
        checked
          ? "border-copper bg-copper text-white shadow-[0_10px_24px_-16px_rgba(232,100,44,0.9)]"
          : "border-line/80 bg-white text-ink/70 hover:border-copper/40",
      )}
    >
      <input
        type="radio"
        name={name}
        value={value}
        checked={checked}
        onChange={() => onChange(value)}
        className="sr-only"
      />
      {icon ? <Icon name={icon} className="size-3.5" /> : null}
      {label}
    </label>
  );
}

export const inputClass = (error?: string) =>
  cn("input-base", error && "input-error");
