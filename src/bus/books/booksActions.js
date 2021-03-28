import apiService from 'utils/services/api';
import { BOOKS } from 'utils/services/endpoints';
import {
  BOOKS_GET_REQUEST,
  BOOKS_GET_FAIL,
  BOOKS_GET_SUCCESS,
  BOOK_SEARCH,
  BOOK_FILTER_BY_PRICE,
} from './booksTypes';
import getPriceFilterCondition from './helpers/getPriceFilterCondition';

const getBooksRequest = () => ({ type: BOOKS_GET_REQUEST });

const getBooksSuccess = (resData) => ({
  type: BOOKS_GET_SUCCESS,
  payload: resData,
});

const getBooksFail = (error) => ({
  type: BOOKS_GET_FAIL,
  payload:
    error.response && error.response.data.message
      ? error.response.data.message
      : error.message,
});

const getBooks = () => async (dispatch, getState) => {
  dispatch(getBooksRequest());

  try {
    const {
      userLogin: { userInfo },
    } = getState();

    const config = {
      headers: {
        Authorization: `Bearer ${userInfo.token}`,
      },
    };
    const resData = await apiService.getData(BOOKS, config);
    dispatch(getBooksSuccess(resData));
  } catch (error) {
    dispatch(getBooksFail(error));
  }
};

const searchBooks = (text) => ({
  type: BOOK_SEARCH,
  payload: text.trim(),
});
const filterByPriceSuccess = (priceValue, priceFilterCondition) => ({
  type: BOOK_FILTER_BY_PRICE,
  payload: priceFilterCondition,
  data: +priceValue,
});

const filterByPrice = (priceValue) => (dispatch) => {
  const priceFilterCondition = getPriceFilterCondition(+priceValue);
  dispatch(filterByPriceSuccess(priceValue, priceFilterCondition));
};

export {
  getBooks,
  filterByPrice,
  searchBooks,
  filterByPriceSuccess,
  getBooksSuccess,
  getBooksFail,
  getBooksRequest,
};
