import { toast } from 'react-toastify';
import { setCurrentChannel } from './slices/channelsSlice.js';

const addChannelSubmit = (socket, onHide, dispatch) => (channelName) => {
  socket
    .timeout(5000)
    .emit(
      'newChannel',
      channelName,
      (err, response) => {
        if (err) {
          toast.error('Ошибка соединения');
        } else {
          onHide();
          dispatch(setCurrentChannel(response.data.id));
          toast.success('Канал создан');
        }
      },
    );
};

export default addChannelSubmit;
