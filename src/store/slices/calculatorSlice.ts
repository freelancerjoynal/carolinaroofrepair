import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
import type { MaterialId, PitchId } from "@/lib/estimate";
import { initialCalculatorState, type CalculatorState } from "../types";

const calculatorSlice = createSlice({
  name: "calculator",
  initialState: initialCalculatorState,
  reducers: {
    setArea(state, action: PayloadAction<number>) {
      const area = Number.isFinite(action.payload) ? action.payload : 1800;
      state.area = Math.min(12000, Math.max(400, Math.round(area)));
    },
    setMaterial(state, action: PayloadAction<MaterialId>) {
      state.material = action.payload;
    },
    setPitch(state, action: PayloadAction<PitchId>) {
      state.pitch = action.payload;
    },
    setStories(state, action: PayloadAction<1 | 2 | 3>) {
      state.stories = action.payload;
    },
    setTearOff(state, action: PayloadAction<boolean>) {
      state.tearOff = action.payload;
    },
    setGutters(state, action: PayloadAction<boolean>) {
      state.gutters = action.payload;
    },
    resetCalculator() {
      return initialCalculatorState as CalculatorState;
    },
  },
});

export const {
  setArea,
  setMaterial,
  setPitch,
  setStories,
  setTearOff,
  setGutters,
  resetCalculator,
} = calculatorSlice.actions;

export default calculatorSlice.reducer;
