import appStore from "../store";

import { Navigate, Outlet } from "react-router-dom";

export const Protected = () => {
  const { user } = appStore.getState().signIn;

  return user?.token ? <Outlet /> : <Navigate to='/sign-in' />;
};
