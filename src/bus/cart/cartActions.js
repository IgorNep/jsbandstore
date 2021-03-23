import { CART_ADD_BOOK, CART_ADD_REQUEST, CART_CLEAR } from './cartTypes';

export const addBook = (book) => (dispatch, getState) => {
  dispatch({ type: CART_ADD_REQUEST });
  setTimeout(() => {
    dispatch({ type: CART_ADD_BOOK, payload: book });
    localStorage.setItem(
      'cartItems',
      JSON.stringify(getState().cart.cartItems)
    );
  }, 500);
};

export const clearCart = () => (dispatch) => {
  dispatch({ type: CART_CLEAR });
  localStorage.removeItem('cartItems');
};
