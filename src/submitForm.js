import { toast } from 'react-toastify';
import axios from 'axios';
import routes from './routes.js';
import { login } from './slices/authUserSlice.js';
import { addErr, removeErr } from './slices/errorSlice.js';

const submitForm = (type, dispatch, t) => async (values) => {
  try {
    dispatch(removeErr({ type }));

    const res = await axios.post(routes[type](), values);
    const user = res.data;

    localStorage.setItem('user', JSON.stringify(user));

    dispatch(login(user));
  } catch (err) {
    if (err.response) {
      const { response: { status } } = err;
      dispatch(addErr({ code: status, type }));
    } else {
      toast.error(t('popUp.networkError'));
    }
  }
};

export default submitForm;
