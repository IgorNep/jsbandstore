import { CART_ADD_BOOK, CART_CLEAR, CART_ADD_REQUEST } from './cartTypes';

const initialState = {
  cartItems: [],
  loading: false,
};

const cartReducer = (state = initialState, action) => {
  switch (action.type) {
    case CART_ADD_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case CART_ADD_BOOK: {
      const item = action.payload;

      const existItem = state.cartItems.find((book) => book.id === item.id);

      if (existItem) {
        return {
          ...state,
          cartItems: state.cartItems.map((book) =>
            book.id === existItem.id ? item : book
          ),
          loading: false,
        };
      }
      return {
        ...state,
        cartItems: [...state.cartItems, item],
      };
    }
    case CART_CLEAR:
      return {
        ...state,
        cartItems: [],
        loading: false,
      };
    default:
      return state;
  }
};

export default cartReducer;
