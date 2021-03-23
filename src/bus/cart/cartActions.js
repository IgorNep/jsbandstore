import { CART_ADD_BOOK, CART_CLEAR } from './cartTypes';

export const addBook = (book) => (dispatch, getState) => {
  dispatch({ type: CART_ADD_BOOK, payload: book });
  localStorage.setItem('cartItems', JSON.stringify(getState().cart.cartItems));
};

export const clearCart = () => (dispatch) => {
  dispatch({ type: CART_CLEAR });
  localStorage.removeItem('cartItems');
};
