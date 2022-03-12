import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  loginError: [],
};

const errorSlice = createSlice({
  name: 'errors',
  initialState,
  reducers: {
    addLoginErr: (state, action) => {
      const { loginError } = state;
      const error = action.payload;
      state.loginError = [...loginError, error];
    },
    removeLoginErr: (state) => {
      state.loginError = [];
    },
  },
});

export const { addLoginErr, removeLoginErr } = errorSlice.actions;

export default errorSlice.reducer;
