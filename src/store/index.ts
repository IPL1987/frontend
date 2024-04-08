import { configureStore } from "@reduxjs/toolkit"
import authReducer from '../features/authSlice'
import { authAPI } from "../api/authApi";
import { userAPI } from "../api/userApi";


export const store = configureStore({
  reducer: {
    auth: authReducer,
    [authAPI.reducerPath]: authAPI.reducer,
    [userAPI.reducerPath]: userAPI.reducer,
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware().concat(authAPI.middleware,),
  devTools: true
})

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;