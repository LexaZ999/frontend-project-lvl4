import { toast } from 'react-toastify';
import { setCurrentChannel } from './slices/channelsSlice.js';

const addChannelHandler = (socket, onHide, dispatch, t) => (channelName) => {
  socket
    .timeout(5000)
    .emit(
      'newChannel',
      channelName,
      (err, response) => {
        if (err) {
          toast.error(t('popUp.networkError'));
        } else {
          onHide();
          dispatch(setCurrentChannel(response.data.id));
          toast.success(t('popUp.channelAdded'));
        }
      },
    );
};

export default addChannelHandler;
