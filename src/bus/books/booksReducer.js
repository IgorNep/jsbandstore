import {
  BOOKS_GET_FAIL,
  BOOKS_GET_REQUEST,
  BOOKS_GET_SUCCESS,
} from './booksTypes';

const initialState = {
  books: null,
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
    case BOOKS_GET_FAIL:
      return {
        ...state,
        loading: false,
        error: action.payload.error,
      };
    default:
      return state;
  }
};

export default booksReducer;
