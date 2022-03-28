import socketErrorHandler from './socketErrorHandler.js';

const renameChannelHandler = (socket, onHide, channelForChangeId, t) => (
  { name },
) => {
  socket
    .timeout(5000)
    .emit(
      'renameChannel',
      {
        id: channelForChangeId,
        name,
      },
      (err) => {
        socketErrorHandler(err, onHide, t, 'Renamed');
      },
    );
};

export default renameChannelHandler;
