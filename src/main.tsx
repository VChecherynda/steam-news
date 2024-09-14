import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { Provider } from "react-redux";
import { RouterProvider } from "react-router-dom";
import { ThemeProvider } from "@material-tailwind/react";

import { createServer } from "miragejs";

import store from "./app/store";
import { Router } from "./app/router";
import "./index.css";

import { mockRoutes } from "./shared/api/mockRestApi.ts";

createServer({
  routes() {
    this.get(mockRoutes.login.path, () => mockRoutes.login.mockData);
  },
});

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <Provider store={store}>
      <ThemeProvider>
        <RouterProvider router={Router} />
      </ThemeProvider>
    </Provider>
  </StrictMode>
);
