import { createSlice } from "@reduxjs/toolkit";
import { Pagination } from "./type";

const initialState: Pagination = {
  active: 0,
  count: 5,
  start: 0,
  end: 5,
  total: 0,
};

export const paginationSlice = createSlice({
  name: "pagination",
  initialState,
  reducers: {
    addActivePage: (state, action: { payload: number }) => {
      state.active = action.payload;
    },
    addStartPage: (state) => {
      state.active = state.start - 1;

      state.start = state.start - 1;
      state.end = state.end - 1;
    },
    addEndPage: (state) => {
      debugger;

      state.active = state.end;

      state.start = state.start + 1;
      state.end = state.end + 1;
    },
  },
});

export const { addActivePage, addStartPage, addEndPage } =
  paginationSlice.actions;

export const paginationReducer = paginationSlice.reducer;
