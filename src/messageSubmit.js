const messageSubmit = (socket, formMessage, authUser) => (message) => {
  socket
    .timeout(5000)
    .emit(
      'newMessage',
      { ...message, author: authUser.username },
      (err, response) => {
        if (err) {
          console.log(101, err, 'connection error');
        } else {
          console.log(102, response);
        }
      },
    );

  formMessage.current.reset();
};

export default messageSubmit;
