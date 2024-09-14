import { Home, SignIn, Dashboard } from "../../pages";

import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from "react-router-dom";

import { Protected } from "./Protected";

const Router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/'>
      <Route element={<Protected />}>
        <Route index element={<Home />} />
        <Route path='dashboard' element={<Dashboard />} />
      </Route>
      <Route path='sign-in' element={<SignIn />} />
      <Route path='*' element={<h1>Page not found</h1>} />
    </Route>
  )
);

export { Router };
