import { toast } from 'react-toastify';
import axios from 'axios';
import routes from './routes.js';
import { login } from './slices/authUserSlice.js';
import { addLoginErr, removeLoginErr } from './slices/errorSlice.js';

const loginSubmit = (dispatch, t) => async (values) => {
  try {
    dispatch(removeLoginErr());

    const res = await axios.post(routes.loginPath(), values);
    const user = res.data;

    localStorage.setItem('user', JSON.stringify(user));

    dispatch(login(user));
  } catch (err) {
    if (err.response) {
      const { response: { status } } = err;
      dispatch(addLoginErr(status));
    } else {
      toast.error(t('popUp.networkError'));
    }
  }
};

export default loginSubmit;
