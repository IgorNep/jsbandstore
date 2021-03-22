import { CART_ADD_BOOK, CART_REMOVE_BOOK } from './cartTypes';

const cartReducer = (state = { cartItems: [] }, action) => {
  switch (action.type) {
    case CART_ADD_BOOK: {
      const item = action.payload;

      const existItem = state.cartItems.find((book) => book.id === item.id);

      if (existItem) {
        return {
          ...state,
          cartItems: state.cartItems.map((book) =>
            book.id === existItem.id ? item : book
          ),
        };
      }
      return {
        ...state,
        cartItems: [...state.cartItems, item],
      };
    }

    case CART_REMOVE_BOOK:
      return {
        ...state,
        cartItems: state.cartItems.filter((book) => book.id !== action.payload),
      };
    default:
      return state;
  }
};

export default cartReducer;
