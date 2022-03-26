import { toast } from 'react-toastify';

const removeChannelHandler = (socket, onHide, channelForChangeId) => () => {
  socket
    .timeout(5000)
    .emit(
      'removeChannel',
      { id: channelForChangeId },
      (err) => {
        if (err) {
          toast.error('Ошибка соединения');
        } else {
          onHide();
          toast.success('Канал удален');
        }
      },
    );
};

export default removeChannelHandler;
