import { MODAL_CLOSE, MODAL_OPEN } from './modalTypes';

export const openModal = () => (dispatch) => {
  dispatch({ type: MODAL_OPEN });
};
export const closeModal = () => (dispatch) => {
  dispatch({ type: MODAL_CLOSE });
};
