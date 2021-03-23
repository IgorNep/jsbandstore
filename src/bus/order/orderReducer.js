import {
  ORDER_CREATE_FAIL,
  ORDER_CREATE_REQUSET,
  ORDER_CREATE_SUCCESS,
  ORDER_RESET,
} from './orderTypes';

const initialState = {
  message: null,
  error: null,
  loading: false,
};

const orderReducer = (state = initialState, action) => {
  switch (action.type) {
    case ORDER_CREATE_REQUSET:
      return {
        ...state,
        loading: true,
      };
    case ORDER_CREATE_SUCCESS:
      return {
        ...state,
        loading: false,
        message: action.payload,
      };
    case ORDER_CREATE_FAIL:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    case ORDER_RESET:
      return initialState;
    default:
      return state;
  }
};

export default orderReducer;
