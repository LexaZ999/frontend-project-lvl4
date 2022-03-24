import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  loginError: [],
  signupError: [],
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
    addSignupErr: (state, action) => {
      const { signupError } = state;
      const error = action.payload;
      state.signupError = [...signupError, error];
    },
    removeSignupErr: (state) => {
      state.signupError = [];
    },

  },
});

export const {
  addLoginErr,
  removeLoginErr,
  addSignupErr,
  removeSignupErr,
} = errorSlice.actions;

export default errorSlice.reducer;
