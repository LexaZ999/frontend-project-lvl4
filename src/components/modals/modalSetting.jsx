import React from 'react';
import ChannelForm from './ChannelForm.jsx';
import ModalRemoveBody from './ModalRemoveBody.jsx';

export default {
  addChannel: {
    title: 'Добавить канал',
    body: (onHide) => <ChannelForm onHide={onHide} />,
  },
  removeChannel: {
    title: 'Удалить канал',
    body: (onHide) => <ModalRemoveBody onHide={onHide} />,
  },
  renameChannel: {
    title: 'Переименовать канал',
    body: (onHide, channelName) => (
      <ChannelForm onHide={onHide} initialValue={channelName} />
    ),
  },
};
