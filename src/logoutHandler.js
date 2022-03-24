import { logout } from './slices/authUserSlice.js';

const logoutHandler = (dispatch) => () => {
  localStorage.removeItem('user');
  dispatch(logout());
};

export default logoutHandler;
