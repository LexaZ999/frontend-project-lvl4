import React, { useEffect } from 'react';
import { Navigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { useTranslation } from 'react-i18next';
import { Spinner } from 'react-bootstrap';
import { toast } from 'react-toastify';
import fetchData from '../fetchData.js';
import ChatBox from '../components/ChatBox.jsx';

const Home = () => {
  const { authUser, channels } = useSelector((state) => state);
  const dispatch = useDispatch();
  const { t } = useTranslation();
  console.log(3, channels.loading);
  useEffect(() => {
    if (authUser.status === 'login') dispatch(fetchData(authUser));
  }, []);

  if (authUser.status !== 'login') return <Navigate to="/login" />;

  switch (channels.loading) {
    case 'idle':
      return <ChatBox />;

    case 'loading':
      return (
        <div className="d-flex justify-content-center align-items-center h-100">
          <Spinner animation="border" variant="primary" role="status">
            <span className="visually-hidden">Loading...</span>
          </Spinner>
        </div>
      );

    case 'failed':
      toast.error(t('popUp.networkError'));
      return null;

    default:
      throw new Error(`Unknown order state: '${channels.loading}'!`);
  }
};
export default Home;
