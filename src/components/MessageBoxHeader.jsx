import React from 'react';
import { useSelector } from 'react-redux';

const MessageBoxHeader = () => {
  const { channels, messages } = useSelector((state) => state);
  const { entities, currentChannelId } = channels;
  const currentChannelName = entities[currentChannelId]?.name;
  const messagesCurrentChannel = messages.ids.filter(
    (id) => messages.entities[id].channelId === currentChannelId,
  );
  const messagesCount = messagesCurrentChannel.length;
  return (
    <div className="bg-light mb-4 p-3 shadow-sm small">
      <p className="m-0">
        <b>{`# ${currentChannelName}`}</b>
      </p>
      <span className="text-muted">{`${messagesCount} сообщения`}</span>
    </div>
  );
};

export default MessageBoxHeader;
