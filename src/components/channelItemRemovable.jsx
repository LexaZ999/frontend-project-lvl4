import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Dropdown, ButtonGroup } from 'react-bootstrap';
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
          Удалить
        </Dropdown.Item>
        <Dropdown.Item
          as="button"
          onClick={handler(dispatch, 'renameChannel', id)}
        >
          Переименовать
        </Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
  );
};

export default ChannelItemRemovable;
