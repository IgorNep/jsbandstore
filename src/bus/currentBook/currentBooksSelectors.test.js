import {
  currentBookSelector,
  errorSelector,
  loadingSelector,
} from './currentBookSelectors';

const mockCurrentBook = { id: 2, title: 'Javascript' };
const mockLoading = true;
const mockError = 'some error';
const dummyState = {
  currentBook: {
    book: mockCurrentBook,
    loading: mockLoading,
    error: mockError,
  },
};

describe('should return appropriate selectors', () => {
  test('should return appropriate value from current book selector', () => {
    expect(currentBookSelector(dummyState)).toEqual(mockCurrentBook);
  });
  test('should return appropriate value from current book loading selector', () => {
    expect(loadingSelector(dummyState)).toEqual(mockLoading);
  });
  test('should return appropriate value from current book error selector', () => {
    expect(errorSelector(dummyState)).toEqual(mockError);
  });
});
