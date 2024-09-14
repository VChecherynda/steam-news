import { configureStore } from "@reduxjs/toolkit";

import { homeReducer } from "../pages/home";
import { dashboardReducer } from "../pages/dashboard";
import { userReducer } from "../entities/models/user";

import { baseApi } from "../shared/api/baseApi";

const appStore = configureStore({
  reducer: {
    home: homeReducer,
    user: userReducer,
    dashboard: dashboardReducer,
    [baseApi.reducerPath]: baseApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(baseApi.middleware),
  devTools: true,
});

export default appStore;

export type RootState = ReturnType<typeof appStore.getState>;
