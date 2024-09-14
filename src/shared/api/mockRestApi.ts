import { API_REST_API, LOGIN_PATH } from "../config";

export const mockRoutes = {
  login: {
    path: `${API_REST_API}${LOGIN_PATH}`,
    mockData: [
      {
        id: "1",
        name: "John",
        email: "john@test.com",
        token: "johnToken",
      },
    ],
  },
};
