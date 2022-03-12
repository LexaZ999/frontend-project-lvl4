import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  token: '',
  username: '',
  status: 'logout',
};

const authUserSlice = createSlice({
  name: 'authUser',
  initialState,
  reducers: {
    login: (state, action) => {
      state.token = action.payload.token;
      state.username = action.payload.username;
      state.status = 'login';
    },
    logout: (state) => {
      state.token = '';
      state.username = '';
      state.status = 'logout';
    },
  },
});

export const { login, logout } = authUserSlice.actions;
export default authUserSlice.reducer;
