import apiService from 'utils/services/api';
import { SIGNIN } from 'utils/services/endpoints';
import {
  USER_LOGIN_REQUEST,
  USER_LOGIN_SUCCESS,
  USER_LOGIN_FAIL,
  USER_LOGOUT,
} from './userTypes';

export const loginUser = (username) => async (dispatch) => {
  dispatch({ type: USER_LOGIN_REQUEST });
  try {
    const formData = {
      username,
    };
    const response = await apiService.postData(SIGNIN, formData);
    dispatch({ type: USER_LOGIN_SUCCESS, payload: response });
    localStorage.setItem('userInfo', JSON.stringify(response));
  } catch (error) {
    dispatch({
      type: USER_LOGIN_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

export const logoutUser = () => (dispatch) => {
  dispatch({ type: USER_LOGIN_REQUEST });
  setTimeout(() => {
    localStorage.removeItem('userInfo');
    dispatch({ type: USER_LOGOUT });
  }, 500);
};
