import React, { useContext } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { Button } from 'react-bootstrap';
import removeChannelHandler from '../../removeChannelHandler.js';
import SocketContext from '../../SocketContext.js';

const ModalRemoveBody = ({ onHide }) => {
  const socket = useContext(SocketContext);
  const { channelForChangeId } = useSelector((state) => state.channels);
  const dispatch = useDispatch();
  return (
    <>
      <p className="lead">Уверены?</p>
      <div className="d-flex justify-content-end">
        <Button variant="secondary" className="me-2" onClick={onHide}>
          Отменить
        </Button>
        <Button
          variant="danger"
          onClick={removeChannelHandler(
            socket,
            onHide,
            channelForChangeId,
            dispatch,
          )}
        >
          Удалить
        </Button>
      </div>
    </>
  );
};

export default ModalRemoveBody;
