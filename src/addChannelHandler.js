import { setCurrentChannel } from './slices/channelsSlice.js';

const addChannelSubmit = (socket, onHide, dispatch) => (channelName) => {
  socket
    .timeout(5000)
    .emit(
      'newChannel',
      channelName,
      (err, response) => {
        if (err) {
          console.log(101, err, 'connection error');
        } else {
          onHide();
          dispatch(setCurrentChannel(response.data.id));
          // console.log(102, response);
        }
      },
    );
};

export default addChannelSubmit;
