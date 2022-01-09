import { createSlice } from "@reduxjs/toolkit";
import { AppState } from "../store";

interface SliceState {
  count: number;
}

const initialState = {
  count: 0,
} as SliceState;

export const appSlice = createSlice({
  name: "app",
  initialState,
  reducers: {
    increment(state) {
      state.count += 1;
    },
  },
  extraReducers: (builder) => {},
});

export const selectCount = (state: AppState) => state.app.count;

export const { increment } = appSlice.actions;
export default appSlice.reducer;
