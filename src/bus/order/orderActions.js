import apiService from 'utils/services/api';
import { PURCHASE } from 'utils/services/endpoints';
import {
  ORDER_CREATE_FAIL,
  ORDER_CREATE_REQUSET,
  ORDER_CREATE_SUCCESS,
  ORDER_RESET,
} from './orderTypes';

const createOrderRequest = () => ({ type: ORDER_CREATE_REQUSET });
const createOrderSuccess = (message) => ({
  type: ORDER_CREATE_SUCCESS,
  payload: message,
});
const createOrderFail = (error) => ({
  type: ORDER_CREATE_FAIL,
  payload:
    error.response && error.response.data.message
      ? error.response.data.message
      : error.message,
});

const createOrder = (books) => async (dispatch, getState) => {
  dispatch(createOrderRequest());
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
    dispatch(createOrderSuccess(res.message));
  } catch (error) {
    dispatch(createOrderFail(error));
  }
};

const resetOrderInfo = () => ({ type: ORDER_RESET });

export {
  createOrder,
  createOrderRequest,
  createOrderFail,
  createOrderSuccess,
  resetOrderInfo,
};
