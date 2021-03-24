import { showAlert } from 'bus/alert/alertActions';
import { getBooks, searchBooks, filterByPrice } from 'bus/books/booksActions';
import {
  loadingSelector,
  errorSelector,
  booksSelector,
  searchedBooksSelector,
  filteredBooksSelector,
} from 'bus/books/booksSelectors';
import BookItem from 'components/BookItem';
import Loader from 'components/common/Loader';
import SearchBox from 'components/common/SearchBox';
import FilterPriceDropdown from 'components/FiltePricerDropdown';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import style from './styles.module.scss';

const BooksContainer = () => {
  const dispatch = useDispatch();
  const books = useSelector(booksSelector);
  const loading = useSelector(loadingSelector);
  const error = useSelector(errorSelector);
  const searchedBooks = useSelector(searchedBooksSelector);
  const filteredBooks = useSelector(filteredBooksSelector);

  useEffect(() => {
    if (error) {
      dispatch(showAlert({ title: error }));
    }
  }, [error]);

  const submitSearchHandler = (text) => {
    dispatch(searchBooks(text));
  };

  const filterHandler = (priceValue) => {
    dispatch(filterByPrice(priceValue));
  };

  const booksToRender = searchedBooks || filteredBooks || books;
  useEffect(() => {
    dispatch(getBooks());
  }, []);

  if (loading) {
    return <Loader />;
  }

  return (
    <>
      <div className="container">
        <div className={style.boxGroup}>
          <SearchBox submitSearchHandler={submitSearchHandler} />
          <FilterPriceDropdown filterHandler={filterHandler} />
        </div>
        <div className={style.booksWrapper}>
          {booksToRender &&
            booksToRender.map((book) => (
              <BookItem
                key={book.id}
                id={book.id}
                title={book.title}
                author={book.author}
                price={book.price}
                cover={book.cover}
              />
            ))}
        </div>
      </div>
    </>
  );
};

export default BooksContainer;
