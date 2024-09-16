import { createSlice } from "@reduxjs/toolkit";
import { News } from "./model";

const initialState: {
  news: News | null;
} = {
  news: null,
};

export const newsSlice = createSlice({
  name: "signIn",
  initialState,
  reducers: {
    addNews: (state, action: { type: string; payload: News }) => {
      state.news = action.payload;
    },
  },
});

export const { addNews } = newsSlice.actions;

export const newsReducer = newsSlice.reducer;
