import { User } from "../../entities/models/user";
import { baseApi } from "../../shared/api/baseApi";
import { USER_TAG } from "../../shared/api/tags";
import { API_REST_API, REGISTER_PATH } from "../../shared/config";

interface RegisterArguments {
  email: string;
  password: string;
}

const signUpApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    register: build.mutation<User | undefined, RegisterArguments>({
      invalidatesTags: [USER_TAG],
      query: (payload) => ({
        url: `http:/${API_REST_API}${REGISTER_PATH}`,
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
