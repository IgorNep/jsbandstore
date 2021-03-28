import booksReducer from './booksReducer';
import {
  BOOKS_GET_FAIL,
  BOOKS_GET_REQUEST,
  BOOKS_GET_SUCCESS,
  BOOK_FILTER_BY_PRICE,
  BOOK_SEARCH,
} from './booksTypes';
import getPriceFilterCondition from './helpers/getPriceFilterCondition';

const books = [
  { id: 1, title: 'Javascript Book', price: 30 },
  { id: 2, title: 'React Book', price: 24 },
  { id: 3, title: 'NodeJS Book', price: 50 },
  { id: 4, title: 'Javascript for kids', price: 25 },
  { id: 5, title: 'Book about nothing', price: 60 },
];

describe('books state should be set to appropriate values', () => {
  test('should retrun initial state', () => {
    const newState = booksReducer(undefined, {});
    expect(newState).toEqual({
      books: [],
      filteredBooks: null,
      textValue: null,
      loading: false,
      error: null,
    });
  });

  test('loading should be set to true', () => {
    const newState = booksReducer([], { type: BOOKS_GET_REQUEST });
    expect(newState.loading).toEqual(true);
  });
  test('loading should be set to false', () => {
    const newState = booksReducer([], { type: BOOKS_GET_SUCCESS });
    expect(newState.loading).toEqual(false);
  });
  test('loading should be set to false', () => {
    const newState = booksReducer([], { type: BOOKS_GET_FAIL });
    expect(newState.loading).toEqual(false);
  });
  test('should handle get books success', () => {
    const newState = booksReducer([], {
      type: BOOKS_GET_SUCCESS,
      payload: books,
    });
    expect(newState).toEqual({
      books,
      error: null,
      loading: false,
    });
  });
  test('should handle get books error', () => {
    const newState = booksReducer([], {
      type: BOOKS_GET_FAIL,
      payload: books,
    });
    expect(newState.books).toEqual([]);
  });
});

describe('should handle search books action', () => {
  test(' filtered books length should be 1 ', () => {
    const newState = booksReducer(
      { books },
      { type: BOOK_SEARCH, payload: 'react' }
    );
    expect(newState.filteredBooks.length).toBe(1);
  });

  test(' filtered books should be null ', () => {
    const newState = booksReducer(
      { books },
      { type: BOOK_SEARCH, payload: '' }
    );
    expect(newState.filteredBooks).toBe(null);
  });
  test(' filtered books length should be 2 ', () => {
    const newState = booksReducer(
      { books },
      { type: BOOK_SEARCH, payload: 'java' }
    );
    expect(newState.filteredBooks.length).toBe(2);
  });
});

describe('should handle filter by price action', () => {
  test('filtered books length should be 2', () => {
    const newState = booksReducer(
      { books },
      { type: BOOK_FILTER_BY_PRICE, payload: getPriceFilterCondition(1) }
    );

    expect(newState.filteredBooks.length).toBe(2);
  });
  test('filtered books length should be 2', () => {
    const newState = booksReducer(
      { books },
      { type: BOOK_FILTER_BY_PRICE, payload: getPriceFilterCondition(2) }
    );

    expect(newState.filteredBooks.length).toBe(2);
  });
  test('filtered books length should be 1', () => {
    const newState = booksReducer(
      { books },
      { type: BOOK_FILTER_BY_PRICE, payload: getPriceFilterCondition(3) }
    );

    expect(newState.filteredBooks.length).toBe(1);
  });
  test('filtered books length should be 5', () => {
    const newState = booksReducer(
      { books },
      { type: BOOK_FILTER_BY_PRICE, payload: getPriceFilterCondition(0) }
    );

    expect(newState.filteredBooks.length).toBe(5);
  });
  test('filtered books length should be 5', () => {
    const newState = booksReducer(
      { books, textValue: 'java' },
      { type: BOOK_FILTER_BY_PRICE, payload: getPriceFilterCondition(1) }
    );
    expect(newState.filteredBooks.length).toBe(1);
  });
  test('filtered books  should be null', () => {
    const newState = booksReducer(
      { books },
      {
        type: BOOK_FILTER_BY_PRICE,
        payload: getPriceFilterCondition(0),
        data: 0,
      }
    );
    expect(newState.filteredBooks).toEqual(null);
  });
});
