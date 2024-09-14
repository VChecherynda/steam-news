import appStore from "../store";

import { Navigate, Outlet } from "react-router-dom";

export const Protected = () => {
  const { user } = appStore.getState().user;

  return user?.email ? <Outlet /> : <Navigate to='/sign-in' />;
};
