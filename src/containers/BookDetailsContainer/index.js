import { getBookById } from 'bus/books/booksActions';
import {
  currentBookSelector,
  errorSelector,
  loadingSelector,
} from 'bus/books/booksSelectors';
import AddCountItem from 'components/AddCountItem';
import BookDetailsItem from 'components/BookDetailsItem';
import Alert from 'components/common/Alert';
import Loader from 'components/common/Loader';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { addBook } from 'bus/cart/cartActions';
import style from './styles.module.scss';

const BookDetailsContainer = () => {
  const dispatch = useDispatch();
  const params = useParams();
  const loading = useSelector(loadingSelector);
  const error = useSelector(errorSelector);
  const book = useSelector(currentBookSelector);

  useEffect(() => {
    dispatch(getBookById(params.id));
  }, []);

  const onAddToCartClick = (quantity) => {
    dispatch(addBook({ ...book, quantity }));
  };

  if (loading) {
    return <Loader />;
  }
  if (error) {
    return <Alert title={error} type="danger" />;
  }

  return (
    book && (
      <>
        <div className="container">
          <div className={style.bookDetailsWrapper}>
            <BookDetailsItem book={book} />
            <AddCountItem
              count={book.count}
              price={book.price}
              onAddToCartClick={onAddToCartClick}
            />
          </div>
        </div>
      </>
    )
  );
};

export default BookDetailsContainer;
