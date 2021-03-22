import { CART_ADD_BOOK, CART_REMOVE_BOOK } from './cartTypes';

export const addBook = (book) => (dispatch, getState) => {
  dispatch({ type: CART_ADD_BOOK, payload: book });
  localStorage.setItem('cartItems', JSON.stringify(getState().cart.cartItems));
};

export const removeBook = (bookId) => (dispatch, getState) => {
  dispatch({ type: CART_REMOVE_BOOK, payload: bookId });
  localStorage.setItem('cartItems', JSON.stringify(getState().cart.cartItems));
};
