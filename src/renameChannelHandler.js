import { toast } from 'react-toastify';

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
        if (err) {
          toast.error(t('popUp.networkError'));
        } else {
          onHide();
          toast.success(t('popUp.channelRenamed'));
        }
      },
    );
};

export default renameChannelHandler;
