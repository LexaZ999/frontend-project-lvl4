import React from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';

const MessageBoxHeader = () => {
  const { channels, messages } = useSelector((state) => state);
  const { t } = useTranslation();
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
      <span className="text-muted">
        {t('messages.key', { count: messagesCount })}
      </span>
    </div>
  );
};

export default MessageBoxHeader;
