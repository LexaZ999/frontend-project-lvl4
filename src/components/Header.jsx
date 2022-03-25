import React from 'react';
import { Button } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import logoutHandler from '../logoutHandler.js';
import LanguageSwitch from './LanguageSwitch.jsx';

const Header = () => {
  const dispatch = useDispatch();
  const { status } = useSelector((state) => state.authUser);

  return (
    <nav className="shadow-sm navbar navbar-expand-lg navbar-light bg-white">
      <div className="container">
        <a className="navbar-brand" href="/">
          Hexlet Chat
        </a>
        <div>
          {status === 'login' ? (
            <Button variant="primary" onClick={logoutHandler(dispatch)}>
              Выйти
            </Button>
          ) : null}
          <LanguageSwitch />
        </div>
      </div>
    </nav>
  );
};
export default Header;
