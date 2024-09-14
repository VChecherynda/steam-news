import { configureStore } from "@reduxjs/toolkit";

import { homeReducer } from "../pages/home";
import { dashboardReducer } from "../pages/dashboard";
import { signInReducer } from "../pages/sign-in";

import { baseApi } from "../shared/api/baseApi";

const appStore = configureStore({
  reducer: {
    home: homeReducer,
    signIn: signInReducer,
    dashboard: dashboardReducer,
    [baseApi.reducerPath]: baseApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(baseApi.middleware),
  devTools: true,
});

export default appStore;

export type RootState = ReturnType<typeof appStore.getState>;
