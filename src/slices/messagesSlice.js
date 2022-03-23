import { createSlice, createEntityAdapter } from '@reduxjs/toolkit';
import { removeChannel } from './channelsSlice.js';

const messagesAdapter = createEntityAdapter();

const initialState = messagesAdapter.getInitialState();

const messagesSlice = createSlice({
  name: 'messages',
  initialState,
  reducers: {
    addMessage: messagesAdapter.addOne,
    addMessages: messagesAdapter.addMany,
    removeMessages: messagesAdapter.removeMany,
  },
  extraReducers: (builder) => {
    builder.addCase(removeChannel, (state, action) => {
      const channelId = action.payload;
      const restEntities = Object.values(state.entities).filter(
        (e) => e.channelId !== channelId,
      );
      messagesAdapter.setAll(state, restEntities);
    });
  },
});

export const { addMessage, addMessages, removeMessages } = messagesSlice.actions;

export default messagesSlice.reducer;
