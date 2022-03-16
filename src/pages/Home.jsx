import React, { useEffect } from 'react';
import { Navigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import axios from 'axios';
import { Container, Row, Col } from 'react-bootstrap';
import routes from '../routes';
import { setState } from '../slices/dataSlice.js';
import Channels from '../components/Channels.jsx';
import ChannelHeader from '../components/ChannelHeader.jsx';
import MessageBox from '../components/MessageBox.jsx';
import MessageForm from '../components/MessageForm.jsx';
import { addMessages } from '../slices/messagesSlice.js';

const Home = () => {
  const { authUser, messages } = useSelector((state) => state);
  if (authUser.status !== 'login') return <Navigate to="/login" />;
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchData = async () => {
      const res = await axios.get(routes.dataPath(), {
        headers: {
          Authorization: `Bearer ${authUser.token}`,
        },
      });
      dispatch(setState(res.data));
      dispatch(addMessages(res.data.messages));
    };
    fetchData();
  }, []);

  console.log(26, messages);

  return (
    <Container className="h-100 my-4 overflow-hidden rounded shadow">
      <Row className="h-100 bg-white flex-md-row">
        <Col xs="4" md="2" className="border-end pt-5 px-0 bg-light">
          <Channels />
        </Col>
        <Col xs className="p-0 h-100">
          <div className="d-flex flex-column h-100">
            <ChannelHeader />
            <MessageBox />
            <MessageForm />
          </div>
        </Col>
      </Row>
    </Container>
  );
};
export default Home;
