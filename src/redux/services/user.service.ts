import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

type User = {
  id: number;
  name: string;
    email: number;
  
};

export const userApi = createApi({
  reducerPath: 'userApi',
  refetchOnFocus: true,
  baseQuery: fetchBaseQuery({
    baseUrl: `${process.env.REACT_API_BASE_URL}`,
  }),
    endpoints: (builder) => ({
        registerUser: builder.query({
          query: () => `register`
      }),
    getUsers: builder.query<User[], null>({
      query: () => 'users',
    }),
    getUserById: builder.query<User, { id: string }>({
      query: ({ id }) => `users/${id}`,
    }),
  }),
});

export const { useGetUsersQuery, useGetUserByIdQuery, useRegisterUserQuery } = userApi;
