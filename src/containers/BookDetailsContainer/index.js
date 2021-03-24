import { getBookById } from 'bus/books/booksActions';
import {
  currentBookSelector,
  errorSelector,
  loadingSelector,
} from 'bus/books/booksSelectors';
import AddCountItem from 'components/AddCountItem';
import BookDetailsItem from 'components/BookDetailsItem';
import Loader from 'components/common/Loader';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { addBook } from 'bus/cart/cartActions';
import { cartLoadingSelector } from 'bus/cart/cartSelectors';
import { showAlert } from 'bus/alert/alertActions';
import style from './styles.module.scss';

const BookDetailsContainer = () => {
  const dispatch = useDispatch();
  const params = useParams();
  const loading = useSelector(loadingSelector);
  const error = useSelector(errorSelector);
  const book = useSelector(currentBookSelector);
  const cartLoading = useSelector(cartLoadingSelector);

  useEffect(() => {
    dispatch(getBookById(params.id));
  }, []);

  useEffect(() => {
    if (error) {
      dispatch(
        showAlert({
          title: error,
        })
      );
    }
  }, [error]);

  const onAddToCartClick = (quantity) => {
    dispatch(addBook({ ...book, quantity }));
    setTimeout(() => {
      dispatch(
        showAlert({
          title: 'Your order successfully added to the cart!',
          type: 'success',
        })
      );
    }, 500);
  };

  if (loading) {
    return <Loader />;
  }

  return (
    book && (
      <>
        <div className="container">
          <div className={style.bookDetailsWrapper}>
            <BookDetailsItem book={book} />
            <>
              {cartLoading ? (
                <Loader />
              ) : (
                <AddCountItem
                  count={book.count}
                  price={book.price}
                  onAddToCartClick={onAddToCartClick}
                />
              )}
            </>
          </div>
        </div>
      </>
    )
  );
};

export default BookDetailsContainer;
