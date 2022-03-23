import React, { useContext, useEffect, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';
import { Button } from 'react-bootstrap';
import cn from 'classnames';
import addChannelHandler from '../../addChannelHandler.js';
import SocketContext from '../../SocketContext.js';
import renameChannelHandler from '../../renameChannelHandler.js';

const ChannelForm = ({ onHide, initialValue = '' }) => {
  const { entities, channelForChangeId } = useSelector(
    (state) => state.channels,
  );
  const dispatch = useDispatch();
  const channelList = Object.values(entities).map(({ name }) => name);

  const SignupSchema = Yup.object().shape({
    name: Yup.string()
      .min(3, 'От 3 до 20 символов')
      .max(20, 'От 3 до 20 символов')
      .required('Обязательное поле')
      .notOneOf(channelList, 'Должно быть уникальным')
      .trim(),
  });

  const socket = useContext(SocketContext);

  const inputModal = useRef();
  useEffect(() => {
    setTimeout(() => inputModal.current.select(), 1);
  }, []);

  return (
    <Formik
      initialValues={{
        name: initialValue,
      }}
      validationSchema={SignupSchema}
      onSubmit={
        initialValue
          ? renameChannelHandler(socket, onHide, channelForChangeId)
          : addChannelHandler(socket, onHide, dispatch)
      }
    >
      {({ touched, errors, handleBlur }) => (
        <div>
          <Form>
            <label className="visually-hidden" htmlFor="name">
              Channel name
            </label>
            <Field
              innerRef={inputModal}
              className={cn('mb-2', 'form-control', {
                'is-invalid': errors.name && touched.name,
              })}
              name="name"
              onBlur={() => handleBlur}
            />
            <div className="invalid-feedback">
              {errors.name && touched.name ? errors.name : null}
            </div>
            <div className="d-flex justify-content-end">
              <Button variant="secondary" className="me-2" onClick={onHide}>
                Отменить
              </Button>
              <Button variant="primary" type="submit">
                Отправить
              </Button>
            </div>
          </Form>
        </div>
      )}
    </Formik>
  );
};

export default ChannelForm;
