import React from 'react';
import { Link, Navigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

const Home = () => {
  const authUser = useSelector((state) => state.authUser);
  if (authUser.status !== 'login') return <Navigate to="/login" />;

  return (
    <>
      <main>
        <h2>Welcome to the homepage!</h2>
        <p>You can do this, I believe in you.</p>
      </main>
      <nav>
        <Link to="/login">Login</Link>
      </nav>
    </>
  );
};
export default Home;
