import alertReducer from 'bus/alert/alertReducer';
import booksReducer from 'bus/books/booksReducer';
import cartReducer from 'bus/cart/cartReducer';
import modalReducer from 'bus/modal/modalReducer';
import orderReducer from 'bus/order/orderReducer';
import userLoginReducer from 'bus/userLogin/userReducer';
import currentBookReducer from 'bus/currentBook/currentBookReducer';

import { combineReducers } from 'redux';

const rootReducer = combineReducers({
  userLogin: userLoginReducer,
  books: booksReducer,
  currentBook: currentBookReducer,
  cart: cartReducer,
  modal: modalReducer,
  order: orderReducer,
  alert: alertReducer,
});
export default rootReducer;
