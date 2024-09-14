import { API_REST_API, LOGIN_PATH, REGISTER_PATH } from "../config";

export const mockUser = {
  id: "1",
  name: "John",
  email: "john@test.com",
  token: "johnToken",
};

export const mockRoutes = {
  login: {
    path: `${API_REST_API}${LOGIN_PATH}`,
  },
  register: {
    path: `${API_REST_API}${REGISTER_PATH}`,
  },
};
