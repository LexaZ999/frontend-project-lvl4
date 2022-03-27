import React from 'react';
import { Field } from 'formik';
import cn from 'classnames';
import { useTranslation } from 'react-i18next';

const FieldPass = (props) => {
  const { name, errors, touched } = props;
  const { t } = useTranslation();
  return (
    <div className="form-floating mb-4">
      <Field
        name={name}
        type="password"
        id={name}
        className={cn('mb-2', 'form-control', {
          'is-invalid': errors[name] && touched[name],
        })}
        placeholder={t(`signupForm.${name}`)}
      />
      <label htmlFor={name}>{t(`signupForm.${name}`)}</label>
      <div className="invalid-feedback">
        {errors[name] && touched[name] ? errors[name] : null}
      </div>
    </div>
  );
};

export default FieldPass;
