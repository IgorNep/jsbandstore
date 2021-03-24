/* eslint-disable no-nested-ternary */
import {
  BOOKS_GET_FAIL,
  BOOKS_GET_REQUEST,
  BOOKS_GET_SUCCESS,
  BOOK_GET_BY_ID_SUCCESS,
  BOOK_GET_BY_ID_FAIL,
  BOOK_SEARCH,
  BOOK_FILTER_BY_PRICE,
} from './booksTypes';

const initialState = {
  books: [],
  searchedBooks: null,
  filteredBooks: null,
  currentBook: null,
  loading: false,
  error: null,
};

const booksReducer = (state = initialState, action) => {
  switch (action.type) {
    case BOOKS_GET_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case BOOKS_GET_SUCCESS:
      return {
        ...state,
        loading: false,
        books: action.payload,
      };
    case BOOK_GET_BY_ID_SUCCESS:
      return {
        ...state,
        loading: false,
        currentBook: action.payload,
      };
    case BOOK_SEARCH:
      return {
        ...state,
        searchedBooks:
          action.payload === ''
            ? null
            : state.books.filter((book) => {
                const regex = new RegExp(`${action.payload}`, 'gi');
                return book.title.match(regex);
              }),
      };
    case BOOK_FILTER_BY_PRICE:
      return {
        ...state,
        filteredBooks:
          action.payload === '1'
            ? state.books.filter((book) => book.price > 0 && book.price < 25)
            : action.payload === '2'
            ? state.books.filter((book) => book.price > 25 && book.price < 50)
            : action.payload === '3'
            ? state.books.filter((book) => book.price > 50)
            : null,
      };
    case BOOK_GET_BY_ID_FAIL:
    case BOOKS_GET_FAIL:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };

    default:
      return state;
  }
};

export default booksReducer;
