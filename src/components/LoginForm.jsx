import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { Formik, Field, Form } from 'formik';
import * as Yup from 'yup';
import cn from 'classnames';
import loginSubmit from '../loginSubmit.js';

const LoginForm = () => {
  const authUser = useSelector((state) => state.authUser);
  const dispatch = useDispatch();

  const { loginError } = useSelector((state) => state.errors);

  const isUnauthorizedErr = loginError.includes(401);

  const inputClass = cn('form-control', {
    'is-invalid': isUnauthorizedErr,
  });
  return (
    <Formik
      initialValues={{ username: '', password: '' }}
      validationSchema={Yup.object({
        username: Yup.string()
          .max(15, 'Must be 15 characters or less')
          .required('Required'),
        password: Yup.string()
          .required('Password is required'),
      })}
      onSubmit={loginSubmit(dispatch, authUser)}
    >
      <Form className="col-12 col-md-6 mt-3 mt-mb-0">
        <h1 className="text-center mb-4">
          Войти
        </h1>
        <div className="form-floating mb-3">
          <Field
            name="username"
            type="text"
            id="username"
            className={inputClass}
            placeholder="Ваш ник"
          />
          <label htmlFor="username">Ваш ник</label>
        </div>

        <div className="form-floating mb-4">
          <Field
            name="password"
            type="password"
            id="password"
            className={inputClass}
            placeholder="Пароль"
          />
          <label htmlFor="username">Пароль</label>
          {isUnauthorizedErr ? <div className="invalid-feedback">Неверные имя пользователя или пароль</div> : null }
        </div>
        <button className="w-100 mb-3 btn btn-outline-primary" type="submit">Войти</button>
      </Form>
    </Formik>
  );
};

export default LoginForm;
