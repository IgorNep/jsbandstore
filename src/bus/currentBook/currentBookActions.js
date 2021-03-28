import apiService from 'utils/services/api';
import { BOOKS } from 'utils/services/endpoints';
import {
  BOOK_GET_BY_ID_FAIL,
  BOOK_GET_BY_ID_REQUEST,
  BOOK_GET_BY_ID_SUCCESS,
} from './currentBookTypes';

const getBookByIdRequest = () => ({
  type: BOOK_GET_BY_ID_REQUEST,
});

const getBookByIdSuccess = (resData) => ({
  type: BOOK_GET_BY_ID_SUCCESS,
  payload: resData,
});

const getBookByIdFail = (error) => ({
  type: BOOK_GET_BY_ID_FAIL,
  payload:
    error.response && error.response.data.message
      ? error.response.data.message
      : error.message,
});

const getBookById = (bookId) => async (dispatch, getState) => {
  dispatch(getBookByIdRequest());

  try {
    const {
      userLogin: { userInfo },
    } = getState();

    const config = {
      headers: {
        Authorization: `Bearer ${userInfo.token}`,
      },
    };
    const resData = await apiService.getDataById(BOOKS, bookId, config);
    dispatch(getBookByIdSuccess(resData));
  } catch (error) {
    dispatch(getBookByIdFail(error));
  }
};

export { getBookByIdFail, getBookByIdRequest, getBookByIdSuccess, getBookById };
