import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Dropdown, ButtonGroup } from 'react-bootstrap';
import { useTranslation } from 'react-i18next';
import ChannelItem from './channelItem.jsx';
import { setModalShow } from '../slices/modalSlice.js';
import { setChannelForChange } from '../slices/channelsSlice.js';

const handler = (dispatch, type, id) => () => {
  dispatch(setModalShow(type));
  dispatch(setChannelForChange(id));
};

const ChannelItemRemovable = ({ id }) => {
  const { currentChannelId } = useSelector((state) => state.channels);
  const dispatch = useDispatch();
  const { t } = useTranslation();

  return (
    <Dropdown
      as={ButtonGroup}
      className="d-flex"
    >
      <ChannelItem id={id} />

      <Dropdown.Toggle
        split
        variant={currentChannelId === id ? 'secondary' : null}
      />
      <Dropdown.Menu>
        <Dropdown.Item
          as="button"
          onClick={handler(dispatch, 'removeChannel', id)}
        >
          {t('dropdown.remove')}
        </Dropdown.Item>
        <Dropdown.Item
          as="button"
          onClick={handler(dispatch, 'renameChannel', id)}
        >
          {t('dropdown.rename')}
        </Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
  );
};

export default ChannelItemRemovable;
