import booksReducer from 'bus/books/booksReducer';
import cartReducer from 'bus/cart/cartReducer';
import modalReducer from 'bus/modal/modalReducer';
import orderReducer from 'bus/order/orderReducer';
import userLoginReducer from 'bus/userLogin/userReducer';
import { combineReducers } from 'redux';

const rootReducer = combineReducers({
  userLogin: userLoginReducer,
  books: booksReducer,
  cart: cartReducer,
  modal: modalReducer,
  order: orderReducer,
});
export default rootReducer;
