import React from 'react';
import { useSelector } from 'react-redux';
import { Modal } from 'react-bootstrap';
import modalSettingByEnv from './modalSetting.jsx';

const ChannelModal = ({ onHide }) => {
  const { modalShow } = useSelector((state) => state.modal);
  const {
    channelForChangeId,
    entities,
  } = useSelector((state) => state.channels);
  const channelForChange = Object.values(entities)
    .find((channel) => channel.id === channelForChangeId);

  const modalConfiguration = modalSettingByEnv[modalShow];

  return (
    <Modal
      show={modalShow}
      onHide={onHide}
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          {modalConfiguration?.title}
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        {modalConfiguration?.body(onHide, channelForChange?.name)}
      </Modal.Body>
    </Modal>
  );
};

export default ChannelModal;
