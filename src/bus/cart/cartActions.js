import { CART_ADD_BOOK, CART_ADD_REQUEST, CART_CLEAR } from './cartTypes';

const cartAddRequest = () => ({ type: CART_ADD_REQUEST });
const cartAddSuccess = (book) => ({ type: CART_ADD_BOOK, payload: book });
const clearCartSuccess = () => ({ type: CART_CLEAR });

const addBook = (book) => (dispatch, getState) => {
  dispatch(cartAddRequest());
  setTimeout(() => {
    dispatch(cartAddSuccess(book));
    localStorage.setItem(
      'cartItems',
      JSON.stringify(getState().cart.cartItems)
    );
  }, 500);
};

const clearCart = () => (dispatch) => {
  dispatch(clearCartSuccess());
  localStorage.removeItem('cartItems');
};

export { cartAddRequest, cartAddSuccess, addBook, clearCart, clearCartSuccess };
