import { MODAL_CLOSE, MODAL_OPEN } from './modalTypes';

export const openModal = () => ({ type: MODAL_OPEN });

export const closeModal = () => ({ type: MODAL_CLOSE });
