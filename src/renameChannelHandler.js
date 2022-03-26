import { toast } from 'react-toastify';

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
      (err) => {
        if (err) {
          toast.error('Ошибка соединения');
        } else {
          onHide();
          toast.success('Канал переименован');
        }
      },
    );
};

export default renameChannelHandler;
