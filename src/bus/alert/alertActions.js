import { HIDE_ALERT, SHOW_ALERT } from './alretTypes';

const hideAlert = () => ({ type: HIDE_ALERT });

const showAlert = (alert) => ({ type: SHOW_ALERT, payload: alert });

const setAlert = (alert, ms = 2000) => (dispatch) => {
  dispatch(showAlert(alert));

  setTimeout(() => {
    dispatch(hideAlert());
  }, ms);
};
export { hideAlert, showAlert, setAlert };
