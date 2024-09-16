import { configureStore } from "@reduxjs/toolkit";

import { homeReducer } from "../pages/home";
import { newsReducer } from "../entities/models/news";
import { userReducer } from "../entities/models/user";

import { baseApi } from "../shared/api/baseApi";
import { paginationReducer } from "../widget/pagination/model/pagination.slice";

const appStore = configureStore({
  reducer: {
    home: homeReducer,
    user: userReducer,
    news: newsReducer,
    pagination: paginationReducer,
    [baseApi.reducerPath]: baseApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(baseApi.middleware),
  devTools: true,
});

export default appStore;

export type RootState = ReturnType<typeof appStore.getState>;
