import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import { resetModalShow } from '../slices/modalSlice.js';
import Channels from './Channels.jsx';
import MessageBox from './MessageBox.jsx';
import MessageBoxHeader from './MessageBoxHeader.jsx';
import MessageForm from './MessageForm.jsx';
import ChannelModal from './modals/ChannelModal.jsx';

const ChatBox = () => {
  const dispatch = useDispatch();
  return (
    <>
      <ChannelModal onHide={() => dispatch(resetModalShow())} />
      <Container className="h-100 my-4 overflow-hidden rounded shadow">
        <Row className="h-100 bg-white flex-md-row">
          <Col xs="4" md="3" className="border-end pt-5 px-0 bg-light">
            <Channels />
          </Col>
          <Col xs className="p-0 h-100">
            <div className="d-flex flex-column h-100">
              <MessageBoxHeader />
              <MessageBox />
              <MessageForm />
            </div>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default ChatBox;
