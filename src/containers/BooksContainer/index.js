import { filterBooks, getBooks } from 'bus/books/booksActions';
import {
  loadingSelector,
  errorSelector,
  booksSelector,
  filteredBooksSelector,
} from 'bus/books/booksSelectors';
import BookItem from 'components/BookItem';
import Alert from 'components/common/Alert';
import Loader from 'components/common/Loader';
import SearchBox from 'components/common/SearchBox';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import style from './styles.module.scss';

const BooksContainer = () => {
  const dispatch = useDispatch();
  const books = useSelector(booksSelector);
  const loading = useSelector(loadingSelector);
  const error = useSelector(errorSelector);
  const filteredBooks = useSelector(filteredBooksSelector);

  const submitSearchHandler = (text) => {
    dispatch(filterBooks(text));
  };

  const booksToRender = filteredBooks || books;
  useEffect(() => {
    dispatch(getBooks());
  }, []);

  if (loading) {
    return <Loader />;
  }

  return error ? (
    <Alert title={error} />
  ) : (
    <>
      <div className="container">
        <SearchBox submitSearchHandler={submitSearchHandler} />
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
