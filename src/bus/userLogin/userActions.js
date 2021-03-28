import apiService from 'utils/services/api';
import { SIGNIN } from 'utils/services/endpoints';
import {
  USER_LOGIN_REQUEST,
  USER_LOGIN_SUCCESS,
  USER_LOGIN_FAIL,
  USER_LOGOUT_REQUEST,
  USER_LOGOUT,
} from './userTypes';

const loginUserRequest = () => ({ type: USER_LOGIN_REQUEST });
const loginUserSuccess = (response) => ({
  type: USER_LOGIN_SUCCESS,
  payload: response,
});
const loginUserFail = (error) => ({
  type: USER_LOGIN_FAIL,
  payload:
    error.response && error.response.data.message
      ? error.response.data.message
      : error.message,
});
const loginUser = (username) => async (dispatch) => {
  dispatch(loginUserRequest());
  try {
    const formData = {
      username,
    };
    const response = await apiService.postData(SIGNIN, formData);
    dispatch(loginUserSuccess(response));
    localStorage.setItem('userInfo', JSON.stringify(response));
  } catch (error) {
    dispatch(loginUserFail(error));
  }
};

const logoutUserRequest = () => ({ type: USER_LOGOUT_REQUEST });
const logoutUserSuccess = () => ({ type: USER_LOGOUT });

const logoutUser = () => (dispatch) => {
  dispatch(logoutUserRequest());
  setTimeout(() => {
    localStorage.removeItem('userInfo');
    dispatch(logoutUserSuccess());
  }, 500);
};

export {
  loginUserRequest,
  loginUserFail,
  loginUserSuccess,
  loginUser,
  logoutUser,
  logoutUserRequest,
  logoutUserSuccess,
};
