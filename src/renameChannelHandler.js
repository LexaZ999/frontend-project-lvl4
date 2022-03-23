const renameChannelHandler = (socket, onHide, channelForChangeId) => (
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
      (err, response) => {
        if (err) {
          console.log(101, err, response, 'connection error');
        } else {
          onHide();
        }
      },
    );
};

export default renameChannelHandler;
