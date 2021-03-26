import cartReducer from './cartReducer';
import { CART_ADD_BOOK, CART_CLEAR } from './cartTypes';

const initialState = {
  cartItems: [],
};
describe('book should be added to book and length of arr should be appropriate', () => {
  const state2 = {
    cartItems: [
      {
        id: 1,
        quantity: 2,
      },
    ],
  };
  const book = { id: 1, quantity: 1 };
  const book2 = { id: 2, quantity: 2 };
  const book3 = { id: 1, quantity: 5 };

  test('one book should be added and length of cartItems array should be increased from 0 to 1', async () => {
    const newState = cartReducer(initialState, {
      type: CART_ADD_BOOK,
      payload: book,
    });
    expect(newState.cartItems.length).toBe(1);
  });
  test('one book should be added and length of cartItems array should be increased from 1 to 2', async () => {
    const newState = cartReducer(state2, {
      type: CART_ADD_BOOK,
      payload: book2,
    });
    expect(newState.cartItems.length).toBe(2);
  });
  test('one book should be added and length of cartItems array should stay the same ', async () => {
    const newState = cartReducer(state2, {
      type: CART_ADD_BOOK,
      payload: book3,
    });
    expect(newState.cartItems.length).toBe(1);
  });
  test('quantity of item should be incremented from 2 to 5', () => {
    const newState = cartReducer(state2, {
      type: CART_ADD_BOOK,
      payload: book3,
    });
    expect(newState.cartItems[0].quantity).toBe(5);
  });

  test('cart items should be cleared and length should be equal 0', () => {
    const newState = cartReducer(state2, {
      type: CART_CLEAR,
    });
    expect(newState.cartItems.length).toBe(0);
  });

  test('cart items should be equal to appropriate values', () => {
    const newState = cartReducer(state2, {
      type: CART_ADD_BOOK,
      payload: book3,
    });
    expect(newState.cartItems).toEqual([{ id: 1, quantity: 5 }]);
  });
  test('cart items should be equal to appropriate values', () => {
    const newState = cartReducer(state2, {
      type: CART_ADD_BOOK,
      payload: book2,
    });
    expect(newState.cartItems).toEqual([
      { id: 1, quantity: 2 },
      { id: 2, quantity: 2 },
    ]);
  });
});

describe('cart reducer should return appropriate state', () => {
  test('should return initial state when input not existing type', () => {
    const newState = cartReducer(initialState, {
      type: 'NOT_EXISTING_TYPE',
      payload: 'not existing payload',
    });
    expect(newState).toEqual(initialState);
  });
  test('should NOT return initial state when input not existing type', () => {
    const newState = cartReducer(initialState, {
      type: CART_ADD_BOOK,
      payload: 'not existing payload',
    });
    expect(newState).not.toEqual(initialState);
  });
});
