import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { AuthState, User, UserResponse } from '../interfaces/interfaces';
import { RootState } from '../store/index';
import { authAPI } from '../api/authApi';

const initialState: AuthState = {
  user: null,
  token: null,
  isAuth: false,
  error: null,
};

export const slice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    logout: () => {
      localStorage.removeItem('token');
      return initialState;
    },
    clearError: (state: AuthState): void => {
      state.error = null;
    },
  },
  extraReducers: (build) => {
    build
      .addMatcher(authAPI.endpoints.getUser.matchPending, (state, action) => {})
      .addMatcher(authAPI.endpoints.getUser.matchFulfilled, (state, { payload: user }: PayloadAction<User>) => {
        const token = localStorage.getItem('token');
        state.user = user;
        state.token = token;
        state.isAuth = !!user; 
      })
      .addMatcher(authAPI.endpoints.getUser.matchRejected, (state, action) => {
        localStorage.removeItem('token');
        state = { ...initialState };
      })
      .addMatcher(authAPI.endpoints.login.matchPending, (state, action) => {})
      .addMatcher(authAPI.endpoints.login.matchFulfilled, (state, { payload }: PayloadAction<UserResponse>) => {
        const { user, token } = payload;
        localStorage.setItem('token', token);
        state.user = user;
        state.token = token;
        state.isAuth = !!user; 
      })
      .addMatcher(authAPI.endpoints.login.matchRejected, (state, { payload }: any) => {
        state.error = payload;         
      })
      .addMatcher(authAPI.endpoints.register.matchPending, (state, action) => {})
      .addMatcher(authAPI.endpoints.register.matchFulfilled, (state, action) => {
        const { payload: { user, token } }: PayloadAction<UserResponse> = action;
        state.user = user;
        state.token = token;
        state.isAuth = !!user;
      })
      .addMatcher(authAPI.endpoints.register.matchRejected, (state, { payload }: any) => {
        state.error = payload;
      });
  },
});

export const { logout, clearError } = slice.actions;
export const selectAuth = (state: RootState) => state.auth;
export const selectIsAuth = (state: RootState) => state.auth.isAuth;
export const selectUser = (state: RootState) => state.auth.user;
export const selectError = (state: RootState) => state.auth.error;
export const selectCurrentToken = (state: RootState) => state.auth.token
export default slice.reducer;