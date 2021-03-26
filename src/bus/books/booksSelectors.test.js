import {
  booksSelector,
  textValueSelector,
  filteredBooksSelector,
  currentBookSelector,
  loadingSelector,
  errorSelector,
} from './booksSelectors';

const mockBooks = [
  { id: 1, title: 'NodeJS' },
  { id: 2, title: 'Javascript' },
];

const mockTextValue = 'abc';
const mockFilteredBooks = [{ id: 1, title: 'NodeJS' }];
const mockCurrentBook = { id: 2, title: 'Javascript' };
const mockLoading = true;
const mockError = 'some error';
const dummyState = {
  books: {
    books: mockBooks,
    filteredBooks: mockFilteredBooks,
    textValue: mockTextValue,
    currentBook: mockCurrentBook,
    loading: mockLoading,
    error: mockError,
  },
};

describe('should return appropriate selectors', () => {
  test('should return appropriate value from books selector', () => {
    expect(booksSelector(dummyState)).toEqual(mockBooks);
  });
  test('should return appropriate value from text value selector', () => {
    expect(textValueSelector(dummyState)).toEqual(mockTextValue);
  });
  test('should return appropriate value from filtered books selector', () => {
    expect(filteredBooksSelector(dummyState)).toEqual(mockFilteredBooks);
  });
  test('should return appropriate value from current book selector', () => {
    expect(currentBookSelector(dummyState)).toEqual(mockCurrentBook);
  });
  test('should return appropriate value from loading selector', () => {
    expect(loadingSelector(dummyState)).toEqual(mockLoading);
  });
  test('should return appropriate value from error selector', () => {
    expect(errorSelector(dummyState)).toEqual(mockError);
  });
  test('should not return valid value', () => {
    expect(booksSelector(dummyState)).not.toEqual(mockFilteredBooks);
  });
});
