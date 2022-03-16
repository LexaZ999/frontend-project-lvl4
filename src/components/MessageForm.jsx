import React, { useContext, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Formik, Field, Form } from 'formik';
import * as Yup from 'yup';
import { ArrowRightSquare } from 'react-bootstrap-icons';
import messageSubmit from '../messageSubmit.js';
import SocketContext from '../SocketContext.js';
import { addMessage } from '../slices/messagesSlice.js';

const MessageForm = () => {
  const socket = useContext(SocketContext);
  const { authUser } = useSelector((state) => state);

  const dispatch = useDispatch();

  socket.on('newMessage', (msg) => {
    dispatch(addMessage(msg));
  });

  const formMessage = useRef(null);

  return (
    <div className="mt-auto px-5 py-3">
      <Formik
        initialValues={{ message: '' }}
        validationSchema={Yup.object({
          message: Yup.string().required('Required'),
        })}
        onSubmit={messageSubmit(socket, formMessage, authUser)}
      >
        {({ isValid, values }) => (
          <Form className="py-1 border rounded-2" ref={formMessage}>
            <div className="input-group has-validation">
              <Field
                name="message"
                type="text"
                className="border-0 p-0 ps-2 form-control"
                placeholder="Введите сообщение..."
                aria-label="Новое сообщение"
              />
              <button
                className="btn btn-group-vertical"
                type="submit"
                disabled={!isValid || !values.message.trim()}
              >
                <ArrowRightSquare size={20} />
                <span className="visually-hidden">Отправить</span>
              </button>
            </div>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default MessageForm;
