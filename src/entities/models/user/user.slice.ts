import { createSlice } from "@reduxjs/toolkit";
import { User } from "../../../shared/models";

const initialState: {
  user: User | null;
} = {
  user: null,
};

export const userSlice = createSlice({
  name: "signIn",
  initialState,
  reducers: {
    addUser: (state, action: { type: string; payload: User }) => {
      state.user = action.payload;
    },
  },
});

export const { addUser } = userSlice.actions;

export const userReducer = userSlice.reducer;
