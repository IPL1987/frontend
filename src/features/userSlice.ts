import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { UserDto } from '../interfaces/interfaces';

interface UsersState {
  loading: boolean;
  offset: number,
  limit: number,
  email: string,
  name: string,
  contactPhone: string,
  list: UserDto[],
  render: boolean,
}

const userSlice = createSlice({
  name: 'users',
  initialState:{
    loading: false,
    offset: 0,
    limit: 10,
    email: '',
    name: '',
    contactPhone: '',
    list: [],
    render: true,
  },
  reducers: {
    setUsersState: (state, action: PayloadAction<Partial<UsersState>>) => {
      Object.assign(state, action.payload);
    },
  }
})

export const { setUsersState } = userSlice.actions;
export default userSlice.reducer;