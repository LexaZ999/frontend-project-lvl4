import React from 'react';
import { Provider } from 'react-redux';
import { io } from 'socket.io-client';
import App from './App.jsx';
import store from './slices/index.js';
import SocketContext from './SocketContext.js';

const init = () => {
  const socket = io();

  socket.on('connect', () => {
    console.log(socket);
  });

  return (
    <SocketContext.Provider value={socket}>
      <Provider store={store}>
        <App />
      </Provider>
    </SocketContext.Provider>
  );
};
export default init;
