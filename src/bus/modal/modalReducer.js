import { MODAL_CLOSE, MODAL_OPEN } from './modalTypes';

const initialState = {
  open: false,
};

const modalReducer = (state = initialState, action) => {
  switch (action.type) {
    case MODAL_OPEN:
      return {
        ...state,
        open: true,
      };
    case MODAL_CLOSE:
      return {
        ...state,
        open: false,
      };
    default:
      return state;
  }
};

export default modalReducer;
