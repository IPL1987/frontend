import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { LoginRequest, LoginResponse, RegisterRequest, User, UserResponse } from '../interfaces/interfaces';

export const authAPI = createApi({
  reducerPath: 'authAPI',
  baseQuery: fetchBaseQuery({
    baseUrl: 'http://localhost:3000/api',
  }),
  tagTypes: ['User'],
  endpoints: (build) => ({
    
    getUser: build.query<User, void>({
      query: () => ({
        url: '/auth/get-user',
        method: 'get',
      }),
      transformResponse: (response: any) => {
        
        return response;
      },
      providesTags: ['User'],
    }),

    login: build.mutation<LoginResponse, LoginRequest>({
      query: (credentials) => ({
        url: '/auth/login',
        method: 'post',
        data: credentials,
      }),
      invalidatesTags: ['User'],
    }),

    register: build.mutation<UserResponse, RegisterRequest>({
      query: (credentials) => ({
        url: '/client/register',
        method: 'post',
        data: credentials,
      }),
      invalidatesTags: ['User'],
    }),
  }),
});

export const { 
  useLoginMutation, 
  useRegisterMutation, 
  useGetUserQuery, 
} = authAPI;