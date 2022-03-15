import { configureStore } from '@reduxjs/toolkit';
import authUserReducer from './authUserSlice.js';
import errorReducer from './errorSlice.js';
import dataReducer from './dataSlice.js';

export default configureStore({
  reducer: {
    authUser: authUserReducer,
    errors: errorReducer,
    data: dataReducer,
  },
});
