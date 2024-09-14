import { User } from "../../shared/models";
import { baseApi } from "../../shared/api/baseApi";
import { USER_TAG } from "../../shared/api/tags";
import { REGISTER_PATH } from "../../shared/config";

interface RegisterArguments {
  email: string;
  password: string;
}

const signUpApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    register: build.mutation<User | undefined, RegisterArguments>({
      invalidatesTags: [USER_TAG],
      query: (payload) => ({
        url: REGISTER_PATH,
        method: "POST",
        body: payload,
      }),
      transformResponse: (data: User) => {
        return data;
      },
    }),
  }),
});

export const { useMutation } = signUpApi.endpoints.register;
