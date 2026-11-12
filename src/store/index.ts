import { configureStore } from "@reduxjs/toolkit";
import calculatorReducer from "./slices/calculatorSlice";
import quoteReducer from "./slices/quoteSlice";
import type { AppStore } from "./types";

export const makeStore = (): AppStore =>
  configureStore({
    reducer: {
      calculator: calculatorReducer,
      quote: quoteReducer,
    },
  }) as unknown as AppStore;
