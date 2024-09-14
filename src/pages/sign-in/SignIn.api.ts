import { User } from "../../shared/models";
import { baseApi } from "../../shared/api/baseApi";
import { USER_TAG } from "../../shared/api/tags";
import { LOGIN_PATH } from "../../shared/config";

interface LoginArguments {
  email: string;
  password: string;
}

const signInApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    login: build.query<User | undefined, LoginArguments>({
      providesTags: [USER_TAG],
      query: () => ({
        url: LOGIN_PATH,
      }),
      transformResponse: (data: User[], _, arg) => {
        const { email, password } = arg;

        if (password === "123456") {
          const user = data.find((user) => user.email === email);

          if (user) {
            return user;
          }
        }
      },
    }),
  }),
});

export const { useLazyQuery } = signInApi.endpoints.login;
