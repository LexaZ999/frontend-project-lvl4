import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useTranslation } from 'react-i18next';
import { Button, Nav } from 'react-bootstrap';
import { PlusSquare } from 'react-bootstrap-icons';
import ChannelItem from './channelItem.jsx';
import ChannelItemRemovable from './channelItemRemovable.jsx';
import { setModalShow } from '../slices/modalSlice.js';

const Channels = () => {
  const { ids, entities } = useSelector((state) => state.channels);
  const dispatch = useDispatch();
  const { t } = useTranslation();

  return (
    <>
      <div className="d-flex justify-content-between mb-2 ps-4 pe-2">
        <span>{t('channels')}</span>
        <Button
          variant=""
          className="p-0 text-primary btn-group-vertical"
          onClick={() => dispatch(setModalShow('addChannel'))}
        >
          <PlusSquare />
          <span className="visually-hidden">+</span>
        </Button>
      </div>
      <Nav fill variant="pills" as="ul" className="flex-column px-2">
        {ids.map((id) => (
          <Nav.Item key={id} as="li" className="w-100">
            {entities[id].removable ? (
              <ChannelItemRemovable id={id} />
            ) : (
              <ChannelItem id={id} />
            )}
          </Nav.Item>
        ))}
      </Nav>
    </>
  );
};

export default Channels;
