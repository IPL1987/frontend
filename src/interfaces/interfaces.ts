import { ErrorResponse } from 'react-router-dom';
import { Role } from '../interfaces/rolesEnum';

export interface User {
  _id: string,
  name: string,
  email: string,
  role: Role,
  contactPhone: string
}

export interface AuthState {
  user: User | null
  token: string | null
  isAuth: boolean,
  error: ErrorResponse | null
}

export interface LoginResponse {
  user: User
  token: string
}

export interface UserResponse {
  user: User
  token: string
}

export interface LogoutResponse {
  success: boolean
}


export interface LoginRequest {
  email: string
  password: string
}

export interface RegisterRequest {
  email: string, 
  name: string, 
  password: string, 
  contactPhone: string
}
export interface LoginResponse {
  user: User
  token: string
}

export interface UserResponse {
  user: User
  token: string
}

export interface LogoutResponse {
  success: boolean
}


export interface LoginRequest {
  email: string
  password: string
}

export interface RegisterRequest {
  email: string, 
  name: string, 
  password: string, 
  contactPhone: string
}

export interface CreateUserRequest {
  email: string,
  password: string,
  name: string,
  contactPhone: string,
  role: Role,
  requestRole: Role | null
}

export interface GetUsersRequest {
  limit: number,
  offset: number,
  filter: string,
  requestRole: Role | null
}

export interface GetUsersDto {
  users: User[],
  count: number
}

export interface SearchUsersDto {
  limit: number;
  offset: number;
  email: string;
  name: string;
  contactPhone: string;
}

export interface UserDto {
  _id: string;
  name: string;
  email: string;
  role: string,
  contactPhone?: string;
}