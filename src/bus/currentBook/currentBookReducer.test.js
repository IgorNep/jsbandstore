import currentBookReducer from './currentBookReducer';
import {
  BOOK_GET_BY_ID_FAIL,
  BOOK_GET_BY_ID_REQUEST,
  BOOK_GET_BY_ID_SUCCESS,
} from './currentBookTypes';

const mockBook = { id: 1, title: 'Javascript Book', price: 30 };

describe('book state should be set to appropriate values', () => {
  test('should retrun initial state', () => {
    const newState = currentBookReducer(undefined, {});
    expect(newState).toEqual({
      book: null,
      loading: false,
      error: null,
    });
  });

  test('loading should be set to true', () => {
    const newState = currentBookReducer([], { type: BOOK_GET_BY_ID_REQUEST });
    expect(newState.loading).toEqual(true);
  });
  test('loading should be set to false', () => {
    const newState = currentBookReducer([], { type: BOOK_GET_BY_ID_SUCCESS });
    expect(newState.loading).toEqual(false);
  });
  test('loading should be set to false', () => {
    const newState = currentBookReducer([], { type: BOOK_GET_BY_ID_FAIL });
    expect(newState.loading).toEqual(false);
  });
  test('should handle get book by id success', () => {
    const newState = currentBookReducer([], {
      type: BOOK_GET_BY_ID_SUCCESS,
      payload: mockBook,
    });
    expect(newState).toEqual({
      book: mockBook,
      error: null,
      loading: false,
    });
  });
  test('should handle get book by id error', () => {
    const newState = currentBookReducer([], {
      type: BOOK_GET_BY_ID_FAIL,
      payload: mockBook,
    });
    expect(newState.book).toEqual(null);
  });
});
