import React from 'react';
import { Provider } from 'react-redux';
import { I18nextProvider } from 'react-i18next';
import { io } from 'socket.io-client';
import { Provider as RollBarProvider, ErrorBoundary } from '@rollbar/react';
import App from './App.jsx';
import store from './slices/store.js';
import SocketContext from './SocketContext.js';
import socketEventHandlers from './socketEventHandlers.js';
import i18n from './i18n.js';

const init = () => {
  const socket = io();
  socketEventHandlers(socket);

  const rollbarConfig = {
    accessToken: 'dcbb1b987efe4482aea087a97d027b5d',
    captureUncaught: true,
    captureUnhandledRejections: true,
    payload: {
      environment: 'production',
    },
  };

  return (
    <RollBarProvider config={rollbarConfig}>
      <ErrorBoundary>
        <I18nextProvider i18n={i18n}>
          <SocketContext.Provider value={socket}>
            <Provider store={store}>
              <App />
            </Provider>
          </SocketContext.Provider>
        </I18nextProvider>
      </ErrorBoundary>
    </RollBarProvider>
  );
};
export default init;
