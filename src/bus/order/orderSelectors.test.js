import {
  messageSelector,
  loadingSelector,
  errorSelector,
} from './orderSelectors';

const mockMessage = 'Some mock message';
const mockError = 'Some mock error';
const dummyState = {
  order: {
    message: mockMessage,
    error: mockError,
    loading: true,
  },
};

describe('should return appropriate selectors', () => {
  test('should return appropriate value from message selector', () => {
    expect(messageSelector(dummyState)).toEqual('Some mock message');
  });
  test('should return appropriate value from loading selector', () => {
    expect(loadingSelector(dummyState)).toEqual(true);
  });
  test('should return appropriate value from error selector', () => {
    expect(errorSelector(dummyState)).toEqual(mockError);
  });
  test('should return appropriate value from error selector', () => {
    dummyState.order.loading = false;
    expect(errorSelector(dummyState)).not.toEqual(true);
  });
});
