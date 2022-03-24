import React from 'react';
import { Button } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import logoutHandler from '../logoutHandler.js';

const Header = () => {
  const dispatch = useDispatch();
  const { status } = useSelector((state) => state.authUser);

  return (
    <nav className="shadow-sm navbar navbar-expand-lg navbar-light bg-white">
      <div className="container">
        <a className="navbar-brand" href="/">
          Hexlet Chat
        </a>
        {status === 'login' ? (
          <Button variant="primary" onClick={logoutHandler(dispatch)}>
            Выйти
          </Button>
        ) : null}
      </div>
    </nav>
  );
};
export default Header;
