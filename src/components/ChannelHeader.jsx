import React from 'react';
import { useSelector } from 'react-redux';

const ChannelHeader = () => {
  const { data } = useSelector((state) => state);
  const currentChannel = data.channels
    .find((channel) => channel.id === data.currentChannelId);

  return (
    <div className="bg-light mb-4 p-3 shadow-sm small">
      <p className="m-0">
        <b>{`# ${currentChannel?.name}`}</b>
      </p>
      <span className="text-muted">3 сообщения</span>
    </div>
  );
};

export default ChannelHeader;
