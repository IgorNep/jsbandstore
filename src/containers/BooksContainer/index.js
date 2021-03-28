import { setAlert } from 'bus/alert/alertActions';
import { getBooks, searchBooks, filterByPrice } from 'bus/books/booksActions';
import {
  loadingSelector,
  errorSelector,
  booksSelector,
  filteredBooksSelector,
  textValueSelector,
} from 'bus/books/booksSelectors';
import BookItem from 'components/BookItem';
import Loader from 'components/common/Loader';
import SearchBox from 'components/common/SearchBox';
import FilterPriceDropdown from 'components/FiltePricerDropdown';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import style from './styles.module.scss';

const BooksContainer = () => {
  const dispatch = useDispatch();
  const books = useSelector(booksSelector);
  const loading = useSelector(loadingSelector);
  const error = useSelector(errorSelector);
  const filteredBooks = useSelector(filteredBooksSelector);
  const textValue = useSelector(textValueSelector);
  const [showLoader, setShowLoader] = useState(false);

  useEffect(() => {
    if (error) {
      dispatch(setAlert({ title: error }));
    }
  }, [error]);

  const submitSearchHandler = (text) => {
    setShowLoader(true);
    dispatch(searchBooks(text));
    setTimeout(() => {
      setShowLoader(false);
    }, 300);
  };

  const filterHandler = (priceValue) => {
    setShowLoader(true);
    dispatch(filterByPrice(priceValue));
    setTimeout(() => {
      setShowLoader(false);
    }, 300);
  };

  const booksToRender = filteredBooks || books;
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
          <FilterPriceDropdown
            filterHandler={filterHandler}
            textValue={textValue}
          />
        </div>
        {showLoader ? (
          <Loader />
        ) : (
          <div className={style.booksWrapper}>
            {booksToRender && booksToRender.length > 0
              ? booksToRender.map((book) => (
                  <BookItem
                    key={book.id}
                    id={book.id}
                    title={book.title}
                    author={book.author}
                    price={book.price}
                    cover={book.cover}
                  />
                ))
              : booksToRender && <h5>Books Not found...</h5>}
          </div>
        )}
      </div>
    </>
  );
};

export default BooksContainer;
