import { configureStore } from '@reduxjs/toolkit';
import authUserReducer from './authUserSlice.js';
import errorReducer from './errorSlice.js';

export default configureStore({
  reducer: {
    authUser: authUserReducer,
    errors: errorReducer,
  },
});
