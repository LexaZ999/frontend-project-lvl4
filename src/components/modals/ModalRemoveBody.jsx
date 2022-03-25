import React, { useContext } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useTranslation } from 'react-i18next';
import { Button } from 'react-bootstrap';
import removeChannelHandler from '../../removeChannelHandler.js';
import SocketContext from '../../SocketContext.js';

const ModalRemoveBody = ({ onHide }) => {
  const socket = useContext(SocketContext);
  const { channelForChangeId } = useSelector((state) => state.channels);
  const dispatch = useDispatch();
  const { t } = useTranslation();
  return (
    <>
      <p className="lead">{t('modal.warning')}</p>
      <div className="d-flex justify-content-end">
        <Button variant="secondary" className="me-2" onClick={onHide}>
          {t('modal.cancel')}
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
          {t('modal.remove')}
        </Button>
      </div>
    </>
  );
};

export default ModalRemoveBody;
