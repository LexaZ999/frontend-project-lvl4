import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  channels: [],
  messages: [],
  currentChannelId: null,
};

const dataSlice = createSlice({
  name: 'data',
  initialState,
  reducers: {
    setState: (state, action) => {
      const { channels, messages, currentChannelId } = action.payload;
      state.channels = channels;
      state.messages = messages;
      state.currentChannelId = currentChannelId;
      console.log(1, action.payload);
    },
  },
});

export const { setState } = dataSlice.actions;

export default dataSlice.reducer;
