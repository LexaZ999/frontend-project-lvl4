import { createSlice, createEntityAdapter } from '@reduxjs/toolkit';
import fetchData from '../fetchData.js';

const channelsAdapter = createEntityAdapter();

const initialState = channelsAdapter.getInitialState({
  currentChannelId: 1,
  channelForChangeId: null,
  defaultChannel: 1,
  loading: 'idle',
  error: null,
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
  extraReducers: (builder) => {
    builder
      .addCase(fetchData.pending, (state) => {
        state.loading = 'loading';
        state.error = null;
      })
      .addCase(fetchData.fulfilled, (state, action) => {
        const { channels } = action.payload;
        channelsAdapter.addMany(state, channels);
        state.loading = 'idle';
        state.error = null;
      })
      .addCase(fetchData.rejected, (state, action) => {
        state.loading = 'failed';
        state.error = action.error;
      });
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
