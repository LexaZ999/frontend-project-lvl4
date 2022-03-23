import { createSlice, createEntityAdapter } from '@reduxjs/toolkit';

const channelsAdapter = createEntityAdapter();

const initialState = channelsAdapter.getInitialState({
  currentChannelId: 1,
  channelForChangeId: null,
  defaultChannel: 1,
});

const channelsSlice = createSlice({
  name: 'channels',
  initialState,
  reducers: {
    addChannel: channelsAdapter.addOne,
    addChannels: channelsAdapter.addMany,
    setChannel: channelsAdapter.setOne,
    removeChannel: channelsAdapter.removeOne,
    setCurrentChannel: (state, action) => {
      state.currentChannelId = action.payload;
    },
    setChannelForChange: (state, action) => {
      state.channelForChangeId = action.payload;
    },
  },
});

export const {
  addChannel,
  addChannels,
  setChannel,
  removeChannel,
  setCurrentChannel,
  setChannelForChange,
} = channelsSlice.actions;

export default channelsSlice.reducer;
