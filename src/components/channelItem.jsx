import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Button } from 'react-bootstrap';
import { setCurrentChannel } from '../slices/channelsSlice';

const ChannelItem = ({ id }) => {
  const { currentChannelId, entities } = useSelector((state) => state.channels);
  const dispatch = useDispatch();

  return (
    <Button
      variant={currentChannelId === id ? 'secondary' : null}
      className="w-100 rounded-0 text-start text-truncate"
      onClick={() => dispatch(setCurrentChannel(id))}
    >
      <span className="me-1">#</span>
      {entities[id].name}
    </Button>
  );
};

export default ChannelItem;
