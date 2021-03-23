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
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { addBook } from 'bus/cart/cartActions';
import { cartLoadingSelector } from 'bus/cart/cartSelectors';
import style from './styles.module.scss';

const BookDetailsContainer = () => {
  const [alert, setAlert] = useState(false);
  const dispatch = useDispatch();
  const params = useParams();
  const loading = useSelector(loadingSelector);
  const error = useSelector(errorSelector);
  const book = useSelector(currentBookSelector);
  const cartLoading = useSelector(cartLoadingSelector);

  useEffect(() => {
    dispatch(getBookById(params.id));
  }, []);

  const handleAlert = () => {
    setTimeout(() => {
      setAlert(true);
      setTimeout(() => {
        setAlert(false);
      }, 1500);
    }, 500);
  };

  const onAddToCartClick = (quantity) => {
    dispatch(addBook({ ...book, quantity }));
    handleAlert();
  };

  if (loading) {
    return <Loader />;
  }
  if (error) {
    return <Alert title={error} />;
  }

  return (
    book && (
      <>
        {alert && (
          <Alert
            title="Your order successfully added to the cart!"
            type="success"
          />
        )}
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
