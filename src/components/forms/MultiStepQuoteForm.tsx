"use client";

import { useEffect, useRef } from "react";
import { useAppDispatch, useAppSelector } from "@/store/hooks";
import {
  nextStep,
  prevStep,
  submitStart,
  submitSuccess,
  goToStep,
} from "@/store/actions";
import FormProgress from "./FormProgress";
import FormSuccess from "./FormSuccess";
import ProjectStep from "./steps/ProjectStep";
import PropertyStep from "./steps/PropertyStep";
import ContactStep from "./steps/ContactStep";
import ReviewStep from "./steps/ReviewStep";
import Icon from "@/components/ui/Icon";

const stepTitles = [
  { title: "Start with the project", subtitle: "Step 1 of 4" },
  { title: "Tell us about the property", subtitle: "Step 2 of 4" },
  { title: "Add your contact details", subtitle: "Step 3 of 4" },
  { title: "Review and send", subtitle: "Step 4 of 4" },
];

export default function MultiStepQuoteForm() {
  const dispatch = useAppDispatch();
  const { step, status, errors } = useAppSelector((state) => state.quote);
  const formRef = useRef<HTMLDivElement>(null);
  const hasMounted = useRef(false);

  useEffect(() => {
    if (status !== "submitting") return;
    const timer = window.setTimeout(() => {
      const reference = `CRR-${new Date().getFullYear()}-${Math.random()
        .toString(36)
        .slice(2, 6)
        .toUpperCase()}`;
      dispatch(submitSuccess(reference));
    }, 1400);
    return () => window.clearTimeout(timer);
  }, [status, dispatch]);

  useEffect(() => {
    if (!hasMounted.current) {
      hasMounted.current = true;
      return;
    }
    formRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
  }, [step, status]);

  if (status === "success") {
    return (
      <div className="card scroll-mt-28 p-6 sm:p-9" ref={formRef}>
        <FormSuccess />
      </div>
    );
  }

  return (
    <div className="card scroll-mt-28 p-5 sm:p-8" ref={formRef}>
      <div className="mb-6">
        <FormProgress
          current={step}
          onStepClick={(target) => dispatch(goToStep(target))}
        />
      </div>

      <div className="mb-6 flex items-end justify-between gap-4 border-t border-line/60 pt-5">
        <div>
          <p className="text-[10px] font-bold uppercase tracking-[0.16em] text-copper">
            {stepTitles[step].subtitle}
          </p>
          <h2 className="mt-1 font-display text-2xl text-ink sm:text-[1.7rem]">
            {stepTitles[step].title}
          </h2>
        </div>
        <span className="hidden shrink-0 items-center gap-1.5 text-[11px] font-semibold text-muted sm:flex">
          <Icon name="clock" className="size-3.5" />
          ~2 minutes
        </span>
      </div>

      <div aria-live="polite">
        {step === 0 ? <ProjectStep /> : null}
        {step === 1 ? <PropertyStep /> : null}
        {step === 2 ? <ContactStep /> : null}
        {step === 3 ? <ReviewStep /> : null}
      </div>

      {Object.keys(errors).length > 0 ? (
        <div className="mt-5 flex items-start gap-2 rounded-xl bg-[#fff4f1] px-4 py-3 text-xs font-semibold text-[#a83c2e]">
          <Icon name="alert" className="mt-0.5 size-4 shrink-0" />
          Please fix the highlighted fields to continue.
        </div>
      ) : null}

      <div className="mt-7 flex flex-col-reverse items-stretch gap-3 border-t border-line/60 pt-5 sm:flex-row sm:items-center sm:justify-between">
        <button
          type="button"
          onClick={() => dispatch(prevStep())}
          disabled={step === 0 || status === "submitting"}
          className="btn btn-outline-dark disabled:cursor-not-allowed disabled:opacity-40"
        >
          <Icon name="chevronLeft" className="size-4" />
          Back
        </button>

        <div className="flex flex-col items-stretch gap-3 sm:flex-row sm:items-center">
          <span className="hidden text-[11px] text-muted sm:block">
            No spam. No obligation.
          </span>
          {step < 3 ? (
            <button
              type="button"
              onClick={() => dispatch(nextStep())}
              className="btn btn-primary"
            >
              Continue
              <Icon name="arrowRight" className="size-4" />
            </button>
          ) : (
            <button
              type="button"
              onClick={() => dispatch(submitStart())}
              disabled={status === "submitting"}
              className="btn btn-primary disabled:cursor-wait disabled:opacity-80"
            >
              {status === "submitting" ? (
                <>
                  <span className="size-4 animate-spin rounded-full border-2 border-white/40 border-t-white" />
                  Sending request…
                </>
              ) : (
                <>
                  Submit request
                  <Icon name="send" className="size-4" />
                </>
              )}
            </button>
          )}
        </div>
      </div>
    </div>
  );
}
