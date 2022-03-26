import { toast } from 'react-toastify';
import axios from 'axios';
import routes from './routes.js';
import { login } from './slices/authUserSlice.js';
import { addLoginErr, removeLoginErr } from './slices/errorSlice.js';

const loginSubmit = (dispatch) => async (values) => {
  try {
    dispatch(removeLoginErr());

    const res = await axios.post(routes.loginPath(), values);
    const user = res.data;

    localStorage.setItem('user', JSON.stringify(user));

    dispatch(login(user));
  } catch (error) {
    toast.error('Ошибка соединения');
    console.log(25, error.response);
    const { response: { status } } = error;
    dispatch(addLoginErr(status));
  }
};

export default loginSubmit;
