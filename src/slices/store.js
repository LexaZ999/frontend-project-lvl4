import { configureStore } from '@reduxjs/toolkit';
import authUserReducer from './authUserSlice.js';
import errorReducer from './errorSlice.js';
import messagesReducer from './messagesSlice.js';
import channelsReducer from './channelsSlice.js';
import modalReducer from './modalSlice.js';

export default configureStore({
  reducer: {
    authUser: authUserReducer,
    errors: errorReducer,
    messages: messagesReducer,
    channels: channelsReducer,
    modal: modalReducer,
  },
});
