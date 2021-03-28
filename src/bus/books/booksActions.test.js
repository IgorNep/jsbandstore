import {
  getBooks,
  filterByPrice,
  searchBooks,
  filterByPriceSuccess,
  getBooksSuccess,
  getBooksFail,
  getBooksRequest,
} from './booksActions';
import {
  BOOKS_GET_FAIL,
  BOOKS_GET_REQUEST,
  BOOKS_GET_SUCCESS,
  BOOK_SEARCH,
  BOOK_FILTER_BY_PRICE,
} from './booksTypes';

describe('books actions', () => {
  test('should create action to make request', () => {
    const expectedAction = {
      type: BOOKS_GET_REQUEST,
    };
    expect(getBooksRequest()).toEqual(expectedAction);
  });
  test('should create action to get books successfully ', () => {
    const expectedAction = {
      type: BOOKS_GET_SUCCESS,
      payload: [{ id: 1, title: 'some book' }],
    };
    expect(getBooksSuccess([{ id: 1, title: 'some book' }])).toEqual(
      expectedAction
    );
  });
  test('should create action to get books with fail ', () => {
    const expectedAction = {
      type: BOOKS_GET_FAIL,
      payload: 'some error message',
    };
    expect(getBooksFail({ message: 'some error message' })).toEqual(
      expectedAction
    );
  });
});
describe('filter and search books actions', () => {
  test('should create action to filter by price successfully', () => {
    const priceValue = 1;
    const priceFilterCondition = (data) => data;
    const expectedAction = {
      type: BOOK_FILTER_BY_PRICE,
      payload: priceFilterCondition,
      data: +priceValue,
    };
    expect(filterByPriceSuccess(priceValue, priceFilterCondition)).toEqual(
      expectedAction
    );
  });
  test('should create action to search books ', () => {
    const expectedAction = {
      type: BOOK_SEARCH,
      payload: 'sometext',
    };
    expect(searchBooks('sometext')).toEqual(expectedAction);
  });
});

describe('async function', () => {
  const getBooksAction = getBooks();
  const mockDispatchFn = jest.fn();
  test('dipatchMock should be called 2 times', () => {
    getBooksAction(mockDispatchFn);
    expect(mockDispatchFn).toBeCalledTimes(2);
  });
  test('dipatchMock should NOT be called 1 time', () => {
    getBooksAction(mockDispatchFn);
    expect(mockDispatchFn).not.toBeCalledTimes(1);
  });
});

describe('filter function', () => {
  const filterByPriceAction = filterByPrice(1);
  const mockDispatchFn = jest.fn();
  test('dipatchMock should be called 1 time', () => {
    filterByPriceAction(mockDispatchFn);
    expect(mockDispatchFn).toBeCalledTimes(1);
  });
  test('dipatchMock should NOT be called 2 time', () => {
    filterByPriceAction(mockDispatchFn);
    expect(mockDispatchFn).not.toBeCalledTimes(2);
  });
});
