import apiService from 'utils/services/api';
import { BOOKS } from 'utils/services/endpoints';
import {
  BOOKS_GET_REQUEST,
  BOOKS_GET_FAIL,
  BOOKS_GET_SUCCESS,
  BOOK_GET_BY_ID_FAIL,
  BOOK_GET_BY_ID_SUCCESS,
  BOOK_SEARCH,
  BOOK_FILTER_BY_PRICE,
} from './booksTypes';

export const getBooks = () => async (dispatch, getState) => {
  dispatch({ type: BOOKS_GET_REQUEST });

  try {
    const {
      userLogin: { userInfo },
    } = getState();

    const config = {
      headers: {
        Authorization: `Bearer ${userInfo.token}`,
      },
    };
    const res = await apiService.getData(BOOKS, config);
    dispatch({ type: BOOKS_GET_SUCCESS, payload: res });
  } catch (error) {
    dispatch({
      type: BOOKS_GET_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

export const getBookById = (bookId) => async (dispatch, getState) => {
  dispatch({ type: BOOKS_GET_REQUEST });

  try {
    const {
      userLogin: { userInfo },
    } = getState();

    const config = {
      headers: {
        Authorization: `Bearer ${userInfo.token}`,
      },
    };
    const res = await apiService.getDataById(BOOKS, bookId, config);
    dispatch({ type: BOOK_GET_BY_ID_SUCCESS, payload: res });
  } catch (error) {
    dispatch({
      type: BOOK_GET_BY_ID_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

export const searchBooks = (text) => (dispatch) => {
  dispatch({ type: BOOK_SEARCH, payload: text.trim() });
};

export const filterByPrice = (priceValue) => (dispatch) => {
  dispatch({ type: BOOK_FILTER_BY_PRICE, payload: priceValue });
};
