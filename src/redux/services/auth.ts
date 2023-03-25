import { getBaseQuery } from 'utils/config';
import { createApi } from '@reduxjs/toolkit/query/react';
import { AuthResponse, LoginRequest, SignUpRequest } from 'types/auth.type';

const authApi = createApi({
  reducerPath: 'authApi',
  baseQuery: getBaseQuery(),
  endpoints: (builder) => ({
    login: builder.mutation<AuthResponse, LoginRequest>({
      query: (body) => ({
        url: '/auth',
        body,
        method: 'POST',
      }),
    }),
    signUp: builder.mutation<AuthResponse, SignUpRequest>({
      query: (body) => ({
        url: '/user',
        body,
        method: 'POST',
      }),
    }),
    logout: builder.mutation<void, void>({
      query: (body) => ({
        url: '/auth',
        body,
        method: 'POST',
      }),
    }),
  }),
});

export const { useLoginMutation, useSignUpMutation, useLogoutMutation } =
  authApi;

export default authApi;
