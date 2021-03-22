import booksReducer from 'bus/books/booksReducer';
import cartReducer from 'bus/cart/cartReducer';
import userLoginReducer from 'bus/userLogin/userReducer';
import { combineReducers } from 'redux';

const rootReducer = combineReducers({
  userLogin: userLoginReducer,
  books: booksReducer,
  cart: cartReducer,
});
export default rootReducer;
