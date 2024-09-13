import { configureStore } from "@reduxjs/toolkit";

import { appReducer } from "./pages/app";
import { dashboardReducer } from "./pages/dashboard";

export default configureStore({
  reducer: {
    app: appReducer,
    dashboard: dashboardReducer,
  },
});
