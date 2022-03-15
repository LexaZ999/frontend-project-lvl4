import React from 'react';
import { useSelector } from 'react-redux';

import { Button, Nav } from 'react-bootstrap';
import { PlusSquare } from 'react-bootstrap-icons';

const Channels = () => {
  const { data } = useSelector((state) => state);
  return (
    <>
      <div className="d-flex justify-content-between mb-2 ps-4 pe-2">
        <span>Каналы</span>
        <Button variant="" className="p-0 text-primary btn-group-vertical">
          <PlusSquare />
          <span className="visually-hidden">+</span>
        </Button>
      </div>
      <Nav fill variant="pills" as="ul" className="flex-column px-2">
        {data.channels.map((channel) => (
          <Nav.Item key={channel.id} as="li" className="w-100">
            <Button
              variant={
                data.currentChannelId === channel.id ? 'secondary' : null
              }
              className="w-100 rounded-0 text-start"
            >
              <span className="me-1">#</span>
              {channel.name}
            </Button>
          </Nav.Item>
        ))}
      </Nav>
    </>
  );
};

export default Channels;
