import React, { useContext, useEffect, useRef } from 'react';
import { useSelector } from 'react-redux';
import { useTranslation } from 'react-i18next';
import { Formik, Field, Form } from 'formik';
import * as Yup from 'yup';
import { ArrowRightSquare } from 'react-bootstrap-icons';
import messageSubmit from '../messageSubmit.js';
import SocketContext from '../SocketContext.js';

const MessageForm = () => {
  const socket = useContext(SocketContext);
  const { authUser, channels: { currentChannelId } } = useSelector((state) => state);

  const formMessage = useRef(null);
  const inputField = useRef(null);

  const { t } = useTranslation();

  useEffect(() => {
    inputField.current.focus();
  });

  return (
    <div className="mt-auto px-5 py-3">
      <Formik
        initialValues={{ message: '' }}
        validationSchema={Yup.object({
          message: Yup.string().required('Required'),
        })}
        onSubmit={messageSubmit(socket, formMessage, authUser, currentChannelId, t)}
      >
        {({ isValid, values }) => (
          <Form className="py-1 border rounded-2" ref={formMessage}>
            <div className="input-group has-validation">
              <Field
                innerRef={inputField}
                name="message"
                type="text"
                className="border-0 p-0 ps-2 form-control"
                placeholder={t('messageForm.input')}
                aria-label="Новое сообщение"
              />
              <button
                className="btn btn-group-vertical"
                type="submit"
                disabled={!isValid || !values.message.trim()}
              >
                <ArrowRightSquare size={20} />
                <span className="visually-hidden">{t('messageForm.submit')}</span>
              </button>
            </div>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default MessageForm;
