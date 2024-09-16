import { createSlice } from "@reduxjs/toolkit";
import { User } from "./model";

const initialState: {
  user: User | null;
} = {
  user: null,
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    addUser: (state, action: { type: string; payload: User }) => {
      state.user = action.payload;
    },
  },
});

export const { addUser } = userSlice.actions;

export const userReducer = userSlice.reducer;
