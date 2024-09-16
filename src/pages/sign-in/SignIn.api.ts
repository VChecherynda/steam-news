import { User } from "../../entities/models/user";
import { baseApi } from "../../shared/api/baseApi";
import { USER_TAG } from "../../shared/api/tags";
import { API_REST_API, LOGIN_PATH } from "../../shared/config";

interface LoginArguments {
  email: string;
  password: string;
}

const signInApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    login: build.query<User | undefined, LoginArguments>({
      providesTags: [USER_TAG],
      query: () => ({
        url: `http:/${API_REST_API}${LOGIN_PATH}`,
      }),
      transformResponse: (data: User[], _, arg) => {
        const { email, password } = arg;

        if (password === "123456") {
          const user = data.find((user) => user.email === email);

          if (user) {
            return user;
          }

          throw new Error("User doesnt exist");
        }

        throw new Error("Password incorect");
      },
    }),
  }),
});

export const { useLazyQuery } = signInApi.endpoints.login;
