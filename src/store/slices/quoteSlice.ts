import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
import {
  initialQuoteState,
  TOTAL_STEPS,
  type QuoteData,
  type QuoteField,
  type QuoteState,
} from "../types";

export type { QuoteField, QuoteData, QuoteStatus, QuoteState } from "../types";
export { TOTAL_STEPS, initialQuoteData } from "../types";

function validateStep(step: number, data: QuoteData) {
  const errors: Partial<Record<QuoteField, string>> = {};

  if (step === 0) {
    if (!data.service) errors.service = "Choose the service you need.";
    if (!data.timeline) errors.timeline = "Let us know your timeline.";
    if (!data.propertyType) errors.propertyType = "Select a property type.";
  }

  if (step === 1) {
    if (!String(data.street).trim()) errors.street = "Street address is required.";
    if (!String(data.city).trim()) errors.city = "City is required.";
    if (!String(data.state).trim()) errors.state = "State is required.";
    if (!/^\d{5}$/.test(String(data.zip).trim()))
      errors.zip = "Enter a 5-digit ZIP code.";
  }

  if (step === 2) {
    if (!String(data.name).trim()) errors.name = "Please share your name.";
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(String(data.email).trim()))
      errors.email = "Enter a valid email address.";
    if (String(data.phone).replace(/\D/g, "").length < 10)
      errors.phone = "Enter a 10-digit phone number.";
    if (!data.contactMethod) errors.contactMethod = "Choose a contact preference.";
  }

  if (step === 3) {
    if (!data.consent)
      errors.consent = "Please confirm we may contact you about this request.";
  }

  return errors;
}

const quoteSlice = createSlice({
  name: "quote",
  initialState: initialQuoteState,
  reducers: {
    updateField(
      state,
      action: PayloadAction<{ field: QuoteField; value: string | boolean }>,
    ) {
      state.data[action.payload.field] = action.payload.value;
      delete state.errors[action.payload.field];
    },
    nextStep(state) {
      const errors = validateStep(state.step, state.data);
      state.errors = errors;
      if (Object.keys(errors).length === 0 && state.step < TOTAL_STEPS - 1) {
        state.step += 1;
      }
    },
    prevStep(state) {
      state.errors = {};
      if (state.step > 0) state.step -= 1;
    },
    goToStep(state, action: PayloadAction<number>) {
      const target = Math.max(0, Math.min(state.step, action.payload));
      state.step = target;
      state.errors = {};
    },
    submitStart(state) {
      const errors = validateStep(TOTAL_STEPS - 1, state.data);
      state.errors = errors;
      if (Object.keys(errors).length === 0) {
        state.status = "submitting";
      }
    },
    submitSuccess(state, action: PayloadAction<string>) {
      state.status = "success";
      state.reference = action.payload;
      state.errors = {};
    },
    resetQuote() {
      return initialQuoteState as QuoteState;
    },
  },
});

export const {
  updateField,
  nextStep,
  prevStep,
  goToStep,
  submitStart,
  submitSuccess,
  resetQuote,
} = quoteSlice.actions;

export default quoteSlice.reducer;
