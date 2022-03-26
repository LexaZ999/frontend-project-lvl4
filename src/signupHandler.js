import { toast } from 'react-toastify';
import axios from 'axios';
import routes from './routes.js';
import { login } from './slices/authUserSlice.js';
import { addSignupErr, removeSignupErr } from './slices/errorSlice.js';

const signupHandler = (dispatch) => async (values) => {
  try {
    dispatch(removeSignupErr());

    const res = await axios.post(routes.signupPath(), values);
    const user = res.data;

    localStorage.setItem('user', JSON.stringify(user));
    dispatch(login(user));
  } catch (error) {
    toast.error('Ошибка соединения');
    const { status } = error.response;
    dispatch(addSignupErr(status));
  }
};

export default signupHandler;
