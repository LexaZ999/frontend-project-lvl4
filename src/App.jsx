import * as React from 'react';
import {
  Routes,
  Route,
  BrowserRouter,
} from 'react-router-dom';
import Header from './components/Header.jsx';
import NotFound from './pages/NotFound.jsx';
import Login from './pages/Login.jsx';
import Home from './pages/Home.jsx';

export default function App() {
  return (
    <BrowserRouter>
      <div className="d-flex flex-column h-100">
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="login" element={<Login />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}
