import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { USER_TAG, NEWS_TAG, HOME_TAG } from "./tags";

export const baseApi = createApi({
  tagTypes: [USER_TAG, NEWS_TAG, HOME_TAG],
  reducerPath: "api",
  baseQuery: fetchBaseQuery(),
  endpoints: () => ({}),
});
