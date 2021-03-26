import openModalSelector from './modalSelectors';

const dummyState = {
  modal: {
    open: true,
  },
};

describe('should return appropriate selectors', () => {
  test('should return appropriate value from modal selector', () => {
    expect(openModalSelector(dummyState)).toEqual(true);
  });
  test('should return appropriate value from modal selector', () => {
    dummyState.modal.open = false;
    expect(openModalSelector(dummyState)).not.toEqual(true);
  });
});
