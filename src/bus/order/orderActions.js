import apiService from 'utils/services/api';
import { PURCHASE } from 'utils/services/endpoints';
import {
  ORDER_CREATE_FAIL,
  ORDER_CREATE_REQUSET,
  ORDER_CREATE_SUCCESS,
  ORDER_RESET,
} from './orderTypes';

export const createOrder = (books) => async (dispatch, getState) => {
  dispatch({ type: ORDER_CREATE_REQUSET });
  try {
    const {
      userLogin: { userInfo },
    } = getState();

    const config = {
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${userInfo.token}`,
      },
    };

    const formData = {
      books,
    };
    const res = await apiService.postData(PURCHASE, formData, config);
    dispatch({ type: ORDER_CREATE_SUCCESS, payload: res.message });
  } catch (error) {
    dispatch({
      type: ORDER_CREATE_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

export const resetOrderInfo = () => (dispatch) => {
  dispatch({ type: ORDER_RESET });
};
