import React from 'react';
import ChannelForm from './ChannelForm.jsx';
import ModalRemoveBody from './ModalRemoveBody.jsx';

export default {
  addChannel: {
    title: (t) => t('modal.addChannel'),
    body: (onHide) => <ChannelForm onHide={onHide} />,
  },
  removeChannel: {
    title: (t) => t('modal.removeChannel'),
    body: (onHide) => <ModalRemoveBody onHide={onHide} />,
  },
  renameChannel: {
    title: (t) => t('modal.renameChannel'),
    body: (onHide, channelName) => (
      <ChannelForm onHide={onHide} initialValue={channelName} />
    ),
  },
};
