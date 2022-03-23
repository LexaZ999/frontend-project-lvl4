const removeChannelHandler = (socket, onHide, channelForChangeId) => () => {
  socket
    .timeout(5000)
    .emit(
      'removeChannel',
      { id: channelForChangeId },
      (err, response) => {
        if (err) {
          console.log(101, err, response, 'connection error');
        } else {
          onHide();
        }
      },
    );
};

export default removeChannelHandler;
