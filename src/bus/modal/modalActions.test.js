import { openModal, closeModal } from './modalActions';
import { MODAL_CLOSE, MODAL_OPEN } from './modalTypes';

describe('actions', () => {
  const expectedOpenAction = {
    type: MODAL_OPEN,
  };
  const expectedCloseAction = {
    type: MODAL_CLOSE,
  };
  test('should create an action to open modal window', () => {
    expect(openModal()).toEqual(expectedOpenAction);
  });
  test('should create an action to close modal window', () => {
    expect(closeModal()).toEqual(expectedCloseAction);
  });
  test('should create an action NOT to open modal window', () => {
    expect(closeModal()).not.toEqual(expectedOpenAction);
  });
  test('should create an action NOT to close modal window', () => {
    expect(openModal()).not.toEqual(expectedCloseAction);
  });
});
