import booksReducer from 'bus/books/booksReducer';
import userLoginReducer from 'bus/userLogin/userReducer';
import { combineReducers } from 'redux';

const rootReducer = combineReducers({
  userLogin: userLoginReducer,
  books: booksReducer,
});
export default rootReducer;
