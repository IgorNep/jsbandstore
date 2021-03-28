/* eslint-disable no-nested-ternary */
import {
  BOOKS_GET_FAIL,
  BOOKS_GET_REQUEST,
  BOOKS_GET_SUCCESS,
  BOOK_SEARCH,
  BOOK_FILTER_BY_PRICE,
  BOOKS_CLEAR,
} from './booksTypes';

const initialState = {
  books: [],
  filteredBooks: null,
  textValue: null,
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
        error: null,
      };
    case BOOK_SEARCH:
      return {
        ...state,
        textValue: action.payload,
        filteredBooks:
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
        filteredBooks: state.textValue
          ? state.books
              .filter((book) => {
                const regex = new RegExp(`${state.textValue}`, 'gi');
                return book.title.match(regex);
              })
              .filter(action.payload)
          : action.data === 0
          ? null
          : state.books.filter(action.payload),
      };
    case BOOKS_GET_FAIL:
      return {
        ...state,
        loading: false,
        error: action.payload,
        books: [],
        filteredBooks: null,
      };
    case BOOKS_CLEAR:
      return initialState;
    default:
      return state;
  }
};

export default booksReducer;
