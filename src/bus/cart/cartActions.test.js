import {
  cartAddRequest,
  cartAddSuccess,
  addBook,
  clearCart,
  clearCartSuccess,
} from './cartActions';

import { CART_ADD_BOOK, CART_ADD_REQUEST, CART_CLEAR } from './cartTypes';

describe('cart actions', () => {
  test('should create cart add book request action', () => {
    const expectedAction = {
      type: CART_ADD_REQUEST,
    };
    expect(cartAddRequest()).toEqual(expectedAction);
  });
  test('should create cart add book success action', () => {
    const expectedAction = {
      type: CART_ADD_BOOK,
      payload: { id: 1, title: 'some book' },
    };
    expect(cartAddSuccess({ id: 1, title: 'some book' })).toEqual(
      expectedAction
    );
  });
  test('should create clear cart action', () => {
    const expectedAction = {
      type: CART_CLEAR,
    };
    expect(clearCartSuccess()).toEqual(expectedAction);
  });
});

describe('addBook with setTimeout', () => {
  jest.useFakeTimers();
  const newBook = { id: 11, title: 'Some new book' };

  const action = addBook(newBook);
  const mockDispatchFn = jest.fn();

  test('setTimeout should be called  1 time', () => {
    action(mockDispatchFn);
    expect(setTimeout).toHaveBeenCalledTimes(1);
  });
  test('should be called setTimeout in 500 ms', () => {
    action(mockDispatchFn);
    expect(setTimeout).toHaveBeenLastCalledWith(expect.any(Function), 500);
  });
  test('should NOT be called setTimeout in 1000 ms', () => {
    action(mockDispatchFn);
    expect(setTimeout).not.toHaveBeenLastCalledWith(expect.any(Function), 1000);
  });

  test('mock dispatch should be called with appropriate arguments', () => {
    action(mockDispatchFn);
    expect(mockDispatchFn).toHaveBeenCalledTimes(1);
  });
  test('mock dispatch should be called with appropriate arguments', () => {
    action(mockDispatchFn);
    expect(mockDispatchFn.mock.calls[0][0]).toEqual({ type: CART_ADD_REQUEST });
  });
});

describe('clearCart action', () => {
  const action = clearCart();
  const mockDispatchFn = jest.fn();
  test('mock dispatch should be called 1 time', () => {
    action(mockDispatchFn);
    expect(mockDispatchFn).toHaveBeenCalledTimes(1);
  });
  test('first mock dispatch should be called with appropriate arguments', () => {
    action(mockDispatchFn);
    expect(mockDispatchFn.mock.calls[0][0]).toEqual({ type: CART_CLEAR });
  });
  test('first mock dispatch should be called with NOT appropriate arguments', () => {
    action(mockDispatchFn);
    expect(mockDispatchFn.mock.calls[0][0]).not.toEqual({
      type: CART_ADD_BOOK,
    });
  });
});
