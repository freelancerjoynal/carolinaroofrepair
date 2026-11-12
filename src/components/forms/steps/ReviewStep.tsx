"use client";

import Icon from "@/components/ui/Icon";
import { useAppDispatch, useAppSelector } from "@/store/hooks";
import { goToStep, updateField } from "@/store/actions";
import { serviceOptions } from "@/lib/services";
import { cn } from "@/lib/utils";

const timelineLabels: Record<string, string> = {
  emergency: "Emergency",
  "2-weeks": "Within 2 weeks",
  "1-3-months": "1–3 months",
  researching: "Just researching",
};

const propertyLabels: Record<string, string> = {
  residential: "Residential",
  commercial: "Commercial",
};

const contactLabels: Record<string, string> = {
  phone: "Phone call",
  email: "Email",
  text: "Text message",
};

function SummaryRow({
  label,
  value,
  onEdit,
}: {
  label: string;
  value: string;
  onEdit: () => void;
}) {
  return (
    <div className="flex items-start justify-between gap-4 border-b border-line/60 py-2.5 last:border-0">
      <div className="min-w-0">
        <dt className="text-[10px] font-bold uppercase tracking-[0.14em] text-muted">
          {label}
        </dt>
        <dd className="mt-0.5 text-sm font-semibold text-ink break-words">
          {value || "Not provided"}
        </dd>
      </div>
      <button
        type="button"
        onClick={onEdit}
        className="shrink-0 text-[11px] font-bold uppercase tracking-[0.1em] text-copper underline-offset-4 hover:underline"
      >
        Edit
      </button>
    </div>
  );
}

export default function ReviewStep() {
  const dispatch = useAppDispatch();
  const { data, errors } = useAppSelector((state) => state.quote);

  const serviceLabel =
    serviceOptions.find((option) => option.value === data.service)?.label ??
    "Not selected";

  const address = [data.street, data.city, `${data.state} ${data.zip}`]
    .filter(Boolean)
    .join(", ");

  return (
    <div className="space-y-6">
      <div>
        <h3 className="font-display text-2xl text-ink">Review your request</h3>
        <p className="mt-1 text-sm text-muted">
          One last look — then we will get to work on your free estimate.
        </p>
      </div>

      <div className="grid gap-4 sm:grid-cols-2">
        <div className="rounded-2xl border border-line/70 bg-cream/50 p-4">
          <div className="flex items-center gap-2">
            <Icon name="hammer" className="size-4 text-copper" />
            <h4 className="text-xs font-bold uppercase tracking-[0.12em] text-ink/70">
              Project
            </h4>
          </div>
          <dl className="mt-1">
            <SummaryRow label="Service" value={serviceLabel} onEdit={() => dispatch(goToStep(0))} />
            <SummaryRow
              label="Property"
              value={propertyLabels[String(data.propertyType)] ?? ""}
              onEdit={() => dispatch(goToStep(0))}
            />
            <SummaryRow
              label="Timeline"
              value={timelineLabels[String(data.timeline)] ?? ""}
              onEdit={() => dispatch(goToStep(0))}
            />
          </dl>
        </div>

        <div className="rounded-2xl border border-line/70 bg-cream/50 p-4">
          <div className="flex items-center gap-2">
            <Icon name="home" className="size-4 text-copper" />
            <h4 className="text-xs font-bold uppercase tracking-[0.12em] text-ink/70">
              Property
            </h4>
          </div>
          <dl className="mt-1">
            <SummaryRow label="Address" value={address} onEdit={() => dispatch(goToStep(1))} />
            <SummaryRow
              label="Roof age"
              value={String(data.roofAge) || "Not sure"}
              onEdit={() => dispatch(goToStep(1))}
            />
            <SummaryRow
              label="Material"
              value={String(data.roofMaterial) || "Not sure"}
              onEdit={() => dispatch(goToStep(1))}
            />
          </dl>
        </div>
      </div>

      <div className="rounded-2xl border border-line/70 bg-cream/50 p-4">
        <div className="flex items-center gap-2">
          <Icon name="users" className="size-4 text-copper" />
          <h4 className="text-xs font-bold uppercase tracking-[0.12em] text-ink/70">
            Contact
          </h4>
        </div>
        <dl className="mt-1 grid gap-x-8 sm:grid-cols-2">
          <SummaryRow label="Name" value={String(data.name)} onEdit={() => dispatch(goToStep(2))} />
          <SummaryRow label="Email" value={String(data.email)} onEdit={() => dispatch(goToStep(2))} />
          <SummaryRow label="Phone" value={String(data.phone)} onEdit={() => dispatch(goToStep(2))} />
          <SummaryRow
            label="Preferred contact"
            value={contactLabels[String(data.contactMethod)] ?? ""}
            onEdit={() => dispatch(goToStep(2))}
          />
        </dl>
        {data.message ? (
          <div className="mt-2 rounded-xl bg-white p-3">
            <p className="text-[10px] font-bold uppercase tracking-[0.14em] text-muted">
              Project notes
            </p>
            <p className="mt-1 text-sm leading-relaxed text-ink/80">
              {String(data.message)}
            </p>
          </div>
        ) : null}
      </div>

      <label
        className={cn(
          "flex cursor-pointer items-start gap-3 rounded-2xl border-2 p-4 transition-colors",
          data.consent ? "border-moss/60 bg-moss/5" : "border-line/70 bg-white",
          errors.consent && !data.consent && "border-[#c24c3c]/60 bg-[#fff7f5]",
        )}
      >
        <input
          type="checkbox"
          checked={Boolean(data.consent)}
          onChange={(event) =>
            dispatch(updateField({ field: "consent", value: event.target.checked }))
          }
          className="sr-only"
        />
        <span
          className={cn(
            "mt-0.5 grid size-5 shrink-0 place-items-center rounded-md border-2 transition-colors",
            data.consent ? "border-moss bg-moss text-white" : "border-line bg-white",
          )}
        >
          {data.consent ? <Icon name="check" className="size-3" strokeWidth={3} /> : null}
        </span>
        <span className="text-xs leading-relaxed text-ink/75">
          I agree to be contacted by Carolina Roof Repair about this estimate
          request, and I have reviewed the{" "}
          <a href="/privacy" className="font-semibold text-copper underline underline-offset-2">
            privacy policy
          </a>
          .
        </span>
      </label>
      {errors.consent ? (
        <p className="text-xs font-semibold text-[#c24c3c]">{errors.consent}</p>
      ) : null}

      <div className="flex items-start gap-3 rounded-2xl bg-sky/60 p-4">
        <Icon name="shieldCheck" className="mt-0.5 size-5 shrink-0 text-ink-light" />
        <p className="text-xs leading-relaxed text-ink/70">
          Submitting this form does not obligate you to purchase anything. It
          simply starts a conversation about your roof.
        </p>
      </div>
    </div>
  );
}
