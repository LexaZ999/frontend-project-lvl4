import React from 'react';
import { useDispatch } from 'react-redux';
import { Routes, Route, BrowserRouter } from 'react-router-dom';

import { login } from './slices/authUserSlice.js';
import Header from './components/Header.jsx';
import NotFound from './pages/NotFound.jsx';
import Login from './pages/Login.jsx';
import Home from './pages/Home.jsx';
import Signup from './pages/Signup.jsx';

const App = () => {
  const dispatch = useDispatch();
  const savedUser = JSON.parse(localStorage.getItem('user'));

  if (savedUser) dispatch(login(savedUser));

  return (
    <BrowserRouter>
      <div className="d-flex flex-column h-100">
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="login" element={<Login />} />
          <Route path="*" element={<NotFound />} />
          <Route path="signup" element={<Signup />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
};

export default App;
