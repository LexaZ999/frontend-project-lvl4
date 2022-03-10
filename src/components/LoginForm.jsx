import React from 'react';
import {
  Formik, Field, Form,
} from 'formik';
import * as Yup from 'yup';

const LoginForm = () => (
  <Formik
    initialValues={{ userName: '', password: '' }}
    validationSchema={Yup.object({
      userName: Yup.string()
        .max(15, 'Must be 15 characters or less')
        .required('Required'),
      password: Yup.string()
        .required('Password is required'),
    })}
    onSubmit={(values, { setSubmitting }) => {
      console.log(values);
      setSubmitting(false);
    }}
  >
    <Form className="col-12 col-md-6 mt-3 mt-mb-0">
      <h1 className="text-center mb-4">
        Войти
      </h1>
      <div className="form-floating mb-3">
        <Field
          name="userName"
          type="text"
          id="userName"
          className="form-control"
          placeholder="Ваш ник"
        />
        <label htmlFor="userName">Ваш ник</label>
      </div>

      <div className="form-floating mb-3">
        <Field
          name="password"
          type="password"
          id="password"
          className="form-control"
          placeholder="Пароль"
        />
        <label htmlFor="userName">Пароль</label>
      </div>
      <button className="w-100 mb-3 btn btn-outline-primary" type="submit">Войти</button>
    </Form>
  </Formik>
);

export default LoginForm;
