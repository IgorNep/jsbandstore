import cartItemsSelector from 'bus/cart/cartSelectors';
import CartTable from 'components/CartTable';
import Button from 'components/common/Button';
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import openModalSelector from 'bus/modal/modalSelectors';
import PurchaseModal from 'containers/PurchaseModal';
import { openModal, closeModal } from 'bus/modal/modalActions';
import { clearCart } from 'bus/cart/cartActions';
import style from './styles.module.scss';

const CartContainer = () => {
  const dispatch = useDispatch();
  const openedModal = useSelector(openModalSelector);
  const cartItems = useSelector(cartItemsSelector);

  const purchaseHandler = () => {
    dispatch(openModal());
  };

  const closeHandler = () => {
    dispatch(clearCart());
    dispatch(closeModal());
  };

  return (
    <>
      <div className="container">
        <div className={style.btnWrapper}>
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
        <PurchaseModal cartItems={cartItems} closeHandler={closeHandler} />
      )}
    </>
  );
};

export default CartContainer;
