import socketErrorHandler from './socketErrorHandler.js';

const removeChannelHandler = (socket, onHide, channelForChangeId, t) => () => {
  socket
    .timeout(5000)
    .emit(
      'removeChannel',
      { id: channelForChangeId },
      (err) => {
        socketErrorHandler(err, onHide, t, 'Removed');
      },
    );
};

export default removeChannelHandler;
