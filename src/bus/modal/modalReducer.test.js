import modalReducer from './modalReducer';
import { MODAL_CLOSE, MODAL_OPEN } from './modalTypes';

const initialState = { open: false };
const initialState2 = { open: true };
describe('modal should be responsive to user actions and return appropriate state', () => {
  test('modal window shoul be opened', () => {
    const newState = modalReducer(initialState, { type: MODAL_OPEN });
    expect(newState.open).toEqual(true);
  });
  test('modal window shoul be closed', () => {
    const newState = modalReducer(initialState2, { type: MODAL_CLOSE });
    expect(newState.open).toEqual(false);
  });
});

describe('modal reducer should return appropriate state', () => {
  test('should return initial state when input not existing type', () => {
    const newState = modalReducer(initialState, {
      type: 'NOT_EXISTING_TYPE',
    });
    expect(newState).toEqual(initialState);
  });
  test('should NOT return initial state when input not existing type', () => {
    const newState = modalReducer(initialState, {
      type: MODAL_OPEN,
    });
    expect(newState).not.toEqual(initialState);
  });
});
