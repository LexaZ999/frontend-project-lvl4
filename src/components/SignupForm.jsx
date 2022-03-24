import React, { useEffect, useRef } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { Formik, Field, Form } from 'formik';
import * as Yup from 'yup';
import cn from 'classnames';
import signupHandler from '../signupHandler.js';

const SignupForm = () => {
  const dispatch = useDispatch();

  const { signupError } = useSelector((state) => state.errors);

  const isConflict = signupError.includes(409);

  const inputUsername = useRef();
  useEffect(() => {
    inputUsername.current.focus();
  });

  return (
    <Formik
      initialValues={{ username: '', password: '', confirmPassword: '' }}
      validationSchema={Yup.object({
        username: Yup.string()
          .min(3, 'От 3 до 20 символов')
          .max(20, 'От 3 до 20 символов')
          .required('Обязательное поле'),
        password: Yup.string()
          .min(6, 'Не менее 6 символов')
          .required('Обязательное поле'),
        confirmPassword: Yup.string()
          .oneOf([Yup.ref('password')], 'Пароли должны совпадать')
          .required('Обязательное поле'),
      })}
      onSubmit={signupHandler(dispatch)}
    >
      {({ errors, touched }) => (
        <Form className="">
          <h1 className="text-center mb-4">Регистрация</h1>
          <div className="form-floating mb-3">
            <Field
              name="username"
              type="text"
              id="username"
              className={cn('mb-2', 'form-control', {
                'is-invalid':
                  (errors.username && touched.username) || isConflict,
              })}
              placeholder="Ваш ник"
              innerRef={inputUsername}
            />
            <label htmlFor="username">Ваш ник</label>
            {isConflict ? (
              <div className="invalid-feedback">
                Такой пользователь уже существует
              </div>
            ) : null}
            <div className="invalid-feedback">
              {errors.username && touched.username ? errors.username : null}
            </div>
          </div>

          <div className="form-floating mb-4">
            <Field
              name="password"
              type="password"
              id="password"
              className={cn('mb-2', 'form-control', {
                'is-invalid': errors.password && touched.password,
              })}
              placeholder="Пароль"
            />
            <label htmlFor="username">Пароль</label>
            <div className="invalid-feedback">
              {errors.password && touched.password ? errors.password : null}
            </div>
          </div>
          <div className="form-floating mb-4">
            <Field
              name="confirmPassword"
              type="password"
              id="confirmPassword"
              className={cn('mb-2', 'form-control', {
                'is-invalid': errors.confirmPassword && touched.confirmPassword,
              })}
              placeholder="Подтвердите пароль"
            />
            <label htmlFor="username">Подтвердите пароль</label>
            <div className="invalid-feedback">
              {errors.confirmPassword && touched.confirmPassword
                ? errors.confirmPassword
                : null}
            </div>
          </div>

          <button className="w-100 mb-3 btn btn-outline-primary" type="submit">
            Зарегистрироваться
          </button>
        </Form>
      )}
    </Formik>
  );
};

export default SignupForm;
