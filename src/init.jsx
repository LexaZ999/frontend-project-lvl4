import React from 'react';
import { Provider } from 'react-redux';
import { io } from 'socket.io-client';
import App from './App.jsx';
import store from './slices/store.js';
import SocketContext from './SocketContext.js';
import socketEventHandlers from './socketEventHandlers.js';

const init = () => {
  const socket = io();
  socketEventHandlers(socket);

  return (
    <SocketContext.Provider value={socket}>
      <Provider store={store}>
        <App />
      </Provider>
    </SocketContext.Provider>
  );
};
export default init;
