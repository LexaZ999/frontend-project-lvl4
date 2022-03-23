import {
  addChannel,
  removeChannel,
  setChannel,
  setCurrentChannel,
} from './slices/channelsSlice.js';
import { addMessage } from './slices/messagesSlice.js';
import store from './slices/store.js';

const socketEventHandlers = (socket) => {
  socket.on('newChannel', (channel) => {
    store.dispatch(addChannel(channel));
  });
  socket.on('removeChannel', ({ id }) => {
    const { currentChannelId, defaultChannel } = store.getState().channels;
    const newId = id === currentChannelId ? defaultChannel : currentChannelId;
    store.dispatch(removeChannel(id));
    store.dispatch(setCurrentChannel(newId));
  });
  socket.on('renameChannel', (channel) => {
    store.dispatch(setChannel(channel));
  });
  socket.on('newMessage', (msg) => {
    store.dispatch(addMessage(msg));
  });
};

export default socketEventHandlers;
