import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  login: [],
  signup: [],
};

const errorSlice = createSlice({
  name: 'errors',
  initialState,
  reducers: {
    addErr: (state, action) => {
      const { code, type } = action.payload;
      const loginError = state[type];
      state[type] = [...loginError, code];
    },
    removeErr: (state, action) => {
      const { type } = action.payload;
      state[type] = [];
    },
  },
});

export const { addErr, removeErr } = errorSlice.actions;

export default errorSlice.reducer;
