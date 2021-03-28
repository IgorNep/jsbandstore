import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { cartItemsSelector } from 'bus/cart/cartSelectors';
import CartTable from 'components/CartTable';
import Button from 'components/common/Button';
import openModalSelector from 'bus/modal/modalSelectors';
import PurchaseModal from 'containers/PurchaseModal';
import { openModal, closeModal } from 'bus/modal/modalActions';
import { clearCart } from 'bus/cart/cartActions';
import { createOrder, resetOrderInfo } from 'bus/order/orderActions';
import {
  errorSelector,
  loadingSelector,
  messageSelector,
} from 'bus/order/orderSelectors';
import Loader from 'components/common/Loader';
import { useHistory } from 'react-router-dom';
import { setAlert } from 'bus/alert/alertActions';
import { clearBooks } from 'bus/books/booksActions';
import style from './styles.module.scss';

const CartContainer = () => {
  const history = useHistory();
  const dispatch = useDispatch();
  const openedModal = useSelector(openModalSelector);
  const cartItems = useSelector(cartItemsSelector);
  const message = useSelector(messageSelector);
  const loading = useSelector(loadingSelector);
  const error = useSelector(errorSelector);
  const [showLoader, setShowLoader] = useState(false);

  useEffect(() => {
    if (error && !loading) {
      dispatch(
        setAlert({
          title: error,
        })
      );
    }
  }, [error, loading]);

  useEffect(() => {
    setShowLoader(true);
    setTimeout(() => {
      setShowLoader(false);
    }, 500);
  }, []);

  const purchaseHandler = () => {
    dispatch(createOrder(cartItems));
    dispatch(clearBooks());
  };

  if (message) {
    dispatch(openModal());
  }
  if (loading || showLoader) {
    return <Loader />;
  }

  const closeHandler = () => {
    dispatch(clearCart());
    dispatch(closeModal());
    dispatch(resetOrderInfo());
    history.push('/');
  };

  return (
    <>
      <div className="container">
        <div className={style.btnWrapper}>
          <Button
            title="Go back"
            extraClassName="btn-info"
            onClick={() => history.goBack()}
          />
          <Button
            title="Purchase"
            disabled={cartItems.length === 0}
            extraClassName="btn-info"
            onClick={purchaseHandler}
          />
        </div>
        {cartItems.length > 0 ? (
          <CartTable cartItems={cartItems} />
        ) : (
          <div className={style.cartWrapper}>
            <i className="fa fa-shopping-cart text-info" />
            <h5>Cart is empty</h5>
          </div>
        )}
      </div>
      {openedModal && (
        <PurchaseModal
          title={message}
          cartItems={cartItems}
          closeHandler={closeHandler}
        />
      )}
    </>
  );
};

export default CartContainer;
