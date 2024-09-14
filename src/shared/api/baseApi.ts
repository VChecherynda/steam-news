import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { USER_TAG, DASHBOARD_TAG, HOME_TAG } from "./tags";
import { API_REST_API } from "../config";

export const baseApi = createApi({
  tagTypes: [USER_TAG, DASHBOARD_TAG, HOME_TAG],
  reducerPath: "api",
  baseQuery: fetchBaseQuery({ baseUrl: API_REST_API }),
  endpoints: () => ({}),
});
