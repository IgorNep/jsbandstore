import {
  BOOKS_GET_FAIL,
  BOOKS_GET_REQUEST,
  BOOKS_GET_SUCCESS,
  BOOK_GET_BY_ID_SUCCESS,
  BOOK_GET_BY_ID_FAIL,
  BOOK_FILTER,
} from './booksTypes';

const initialState = {
  books: null,
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
    case BOOK_FILTER:
      return {
        ...state,
        filteredBooks: state.books.filter((book) => {
          const regex = new RegExp(`${action.payload}`, 'gi');
          return book.title.match(regex);
        }),
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
