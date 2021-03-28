import {
  BOOK_GET_BY_ID_FAIL,
  BOOK_GET_BY_ID_REQUEST,
  BOOK_GET_BY_ID_SUCCESS,
} from './currentBookTypes';

const initialState = {
  book: null,
  loading: false,
  error: null,
};

const currentBookReducer = (state = initialState, action) => {
  switch (action.type) {
    case BOOK_GET_BY_ID_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case BOOK_GET_BY_ID_SUCCESS:
      return {
        ...state,
        loading: false,
        book: action.payload,
        error: null,
      };

    case BOOK_GET_BY_ID_FAIL:
      return {
        ...state,
        book: null,
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};

export default currentBookReducer;
