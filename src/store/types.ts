import type { EstimateInput } from "@/lib/estimate";

export type QuoteField =
  | "service"
  | "propertyType"
  | "timeline"
  | "street"
  | "city"
  | "state"
  | "zip"
  | "roofAge"
  | "roofMaterial"
  | "name"
  | "email"
  | "phone"
  | "contactMethod"
  | "message"
  | "consent";

export type QuoteData = Record<QuoteField, string | boolean>;

export type QuoteStatus = "idle" | "submitting" | "success";

export type QuoteState = {
  step: number;
  status: QuoteStatus;
  reference: string | null;
  data: QuoteData;
  errors: Partial<Record<QuoteField, string>>;
};

export type CalculatorState = EstimateInput;

export type RootState = {
  calculator: CalculatorState;
  quote: QuoteState;
};

export type AppAction = {
  type: string;
  payload?: unknown;
};

export type AppDispatch = (action: AppAction) => unknown;

export type AppStore = {
  getState: () => RootState;
  dispatch: AppDispatch;
  subscribe: (listener: () => void) => () => void;
};

export const TOTAL_STEPS = 4;

export const initialQuoteData: QuoteData = {
  service: "",
  propertyType: "residential",
  timeline: "",
  street: "",
  city: "",
  state: "NC",
  zip: "",
  roofAge: "",
  roofMaterial: "",
  name: "",
  email: "",
  phone: "",
  contactMethod: "phone",
  message: "",
  consent: false,
};

export const initialQuoteState: QuoteState = {
  step: 0,
  status: "idle",
  reference: null,
  data: initialQuoteData,
  errors: {},
};

export const initialCalculatorState: CalculatorState = {
  area: 1800,
  material: "euroshield",
  pitch: "medium",
  stories: 1,
  tearOff: true,
  gutters: false,
};

/**
 * State used for the static prerender and the first client render. The real
 * Redux store is created on the client after hydration, so this snapshot must
 * match the reducers' initial state exactly.
 */
export const defaultRootState: RootState = {
  calculator: initialCalculatorState,
  quote: initialQuoteState,
};
