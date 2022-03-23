const messageSubmit = (socket, formMessage, authUser, currentChannelId) => (message) => {
  socket
    .timeout(5000)
    .emit(
      'newMessage',
      { ...message, author: authUser.username, channelId: currentChannelId },
      (err, response) => {
        if (err) {
          console.log(101, err, response, 'connection error');
        } else {
          // console.log(102, response);
        }
      },
    );
  formMessage.current.reset();
};

export default messageSubmit;
