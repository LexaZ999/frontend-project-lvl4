import React, { useEffect, useRef } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useTranslation } from 'react-i18next';
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

  const { t } = useTranslation();

  return (
    <Formik
      initialValues={{ username: '', password: '', confirmPassword: '' }}
      validationSchema={Yup.object({
        username: Yup.string()
          .min(3, t('signupForm.errors.nameLength'))
          .max(20, t('signupForm.errors.nameLength'))
          .required(t('signupForm.errors.required')),
        password: Yup.string()
          .min(6, t('signupForm.errors.passwordLength'))
          .required(t('signupForm.errors.required')),
        confirmPassword: Yup.string()
          .oneOf([Yup.ref('password')], t('signupForm.errors.similarity'))
          .required(t('signupForm.errors.required')),
      })}
      onSubmit={signupHandler(dispatch)}
    >
      {({ errors, touched }) => (
        <Form className="">
          <h1 className="text-center mb-4">{t('signupForm.title')}</h1>
          <div className="form-floating mb-3">
            <Field
              name="username"
              type="text"
              id="username"
              className={cn('mb-2', 'form-control', {
                'is-invalid':
                  (errors.username && touched.username) || isConflict,
              })}
              placeholder={t('signupForm.name')}
              innerRef={inputUsername}
            />
            <label htmlFor="username">{t('signupForm.name')}</label>
            {isConflict ? (
              <div className="invalid-feedback">
                {t('signupForm.errors.exist')}
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
              placeholder={t('signupForm.password')}
            />
            <label htmlFor="username">{t('signupForm.password')}</label>
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
              placeholder={t('signupForm.confirmPassword')}
            />
            <label htmlFor="username">{t('signupForm.confirmPassword')}</label>
            <div className="invalid-feedback">
              {errors.confirmPassword && touched.confirmPassword
                ? errors.confirmPassword
                : null}
            </div>
          </div>

          <button className="w-100 mb-3 btn btn-outline-primary" type="submit">
            {t('signupForm.submit')}
          </button>
        </Form>
      )}
    </Formik>
  );
};

export default SignupForm;
