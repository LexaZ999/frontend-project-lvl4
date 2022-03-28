import { toast } from 'react-toastify';

const socketErrorHandler = (err, onHide, t, type) => {
  if (err) {
    toast.error(t('popUp.networkError'));
  } else {
    onHide();
    toast.success(t(`popUp.channel${type}`));
  }
};

export default socketErrorHandler;
