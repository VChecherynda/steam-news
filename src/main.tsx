import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { Provider } from "react-redux";
import { RouterProvider } from "react-router-dom";
import { ThemeProvider } from "@material-tailwind/react";

import { createServer } from "miragejs";

import store from "./app/store";
import { Router } from "./app/router";
import "./index.css";

import { mockRoutes, mockUser } from "./shared/api/mockRestApi.ts";
import { STEAM_WEB_API } from "./shared/config/backend.ts";

createServer({
  routes() {
    this.passthrough(`https://${STEAM_WEB_API}/**`);

    this.get(`http:/${mockRoutes.login.path}`, () => {
      return [mockUser];
    });
    this.post(`http:/${mockRoutes.register.path}`, (_, request) => {
      return JSON.parse(request.requestBody);
    });
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
