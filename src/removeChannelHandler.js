import { toast } from 'react-toastify';

const removeChannelHandler = (socket, onHide, channelForChangeId, t) => () => {
  socket
    .timeout(5000)
    .emit(
      'removeChannel',
      { id: channelForChangeId },
      (err) => {
        if (err) {
          toast.error(t('popUp.networkError'));
        } else {
          onHide();
          toast.success(t('popUp.channelRemoved'));
        }
      },
    );
};

export default removeChannelHandler;
