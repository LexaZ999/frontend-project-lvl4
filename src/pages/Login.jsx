import React from 'react';
import { Navigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { useTranslation } from 'react-i18next';
import LoginForm from '../components/LoginForm.jsx';

const Login = () => {
  const authUser = useSelector((state) => state.authUser);
  const { t } = useTranslation();

  if (authUser.status === 'login') return <Navigate to="/" />;

  return (
    <div className="container-fluid h-100">
      <div className="row justify-content-center align-content-center h-100">
        <div className="col-12 col-md-8 col-xxl-6">
          <div className="card shadow-sm">
            <div className="card-body row p-5">
              <div className="col-12 col-md-6 d-flex align-items-center justify-content-center">
                <img src="https://cdn.pixabay.com/photo/2020/03/25/16/01/children-4967808_960_720.jpg" className="rounded-circle" alt="Войти" style={{ width: '70%' }} />
              </div>
              <LoginForm />
            </div>
            <div className="card-footer p-4">
              <div className="text-center">
                <span>{t('loginForm.footer')}</span>
                <a href="/signup">
                  {t('loginForm.link to registration')}
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
