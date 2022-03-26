import { toast } from 'react-toastify';

const messageSubmit = (socket, formMessage, authUser, currentChannelId, t) => (message) => {
  socket
    .timeout(5000)
    .emit(
      'newMessage',
      { ...message, author: authUser.username, channelId: currentChannelId },
      (err) => {
        if (err) {
          toast.error(t('popUp.networkError'));
        }
      },
    );
  formMessage.current.reset();
};

export default messageSubmit;
