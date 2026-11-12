import type { MaterialId, PitchId } from "@/lib/estimate";
import type { QuoteField } from "./types";

/**
 * Plain action creators. They mirror the Redux Toolkit slices but do not import
 * `@reduxjs/toolkit`, so client components can stay free of the library during
 * the static prerender. The real store is loaded lazily on the client.
 */

export const setArea = (payload: number) => ({
  type: "calculator/setArea" as const,
  payload,
});

export const setMaterial = (payload: MaterialId) => ({
  type: "calculator/setMaterial" as const,
  payload,
});

export const setPitch = (payload: PitchId) => ({
  type: "calculator/setPitch" as const,
  payload,
});

export const setStories = (payload: 1 | 2 | 3) => ({
  type: "calculator/setStories" as const,
  payload,
});

export const setTearOff = (payload: boolean) => ({
  type: "calculator/setTearOff" as const,
  payload,
});

export const setGutters = (payload: boolean) => ({
  type: "calculator/setGutters" as const,
  payload,
});

export const resetCalculator = () => ({
  type: "calculator/resetCalculator" as const,
});

export const updateField = (payload: {
  field: QuoteField;
  value: string | boolean;
}) => ({
  type: "quote/updateField" as const,
  payload,
});

export const nextStep = () => ({ type: "quote/nextStep" as const });

export const prevStep = () => ({ type: "quote/prevStep" as const });

export const goToStep = (payload: number) => ({
  type: "quote/goToStep" as const,
  payload,
});

export const submitStart = () => ({ type: "quote/submitStart" as const });

export const submitSuccess = (payload: string) => ({
  type: "quote/submitSuccess" as const,
  payload,
});

export const resetQuote = () => ({ type: "quote/resetQuote" as const });
