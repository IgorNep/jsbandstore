export const booksSelector = (state) => state.books.books;
export const searchedBooksSelector = (state) => state.books.searchedBooks;
export const filteredBooksSelector = (state) => state.books.filteredBooks;
export const currentBookSelector = (state) => state.books.currentBook;
export const loadingSelector = (state) => state.books.loading;
export const errorSelector = (state) => state.books.error;
