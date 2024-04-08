import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { CreateUserRequest, SearchUsersDto, User, UserDto } from '../interfaces/interfaces';

export const userAPI = createApi({
  reducerPath: 'userAPI',
  baseQuery: fetchBaseQuery({
    baseUrl: 'api',
  }),
  tagTypes: ['User'],
  endpoints: (build) => ({
    getUsers: build.query<SearchUsersDto, UserDto>({
      query: ({ role, ...params }) => ({
        url: `/${requestRole}/users`,
        method: 'get',
        params,
      }),
      providesTags: ['User'],
    }),

    createUser: build.mutation<User, CreateUserRequest>({
      query: ({ requestRole, ...data }) => ({
        url: `/${requestRole}/users`,
        method: 'post',
        headers: { 'Content-Type': 'multipart/form-data' },
        data,
      }),
      invalidatesTags: ['User'],
    }),
  }),
});

export const { 
  useGetUsersQuery,
  useCreateUserMutation,
} = userAPI;