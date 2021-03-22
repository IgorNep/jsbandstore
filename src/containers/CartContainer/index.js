import cartItemsSelector from 'bus/cart/cartSelectors';
import CartTable from 'components/CartTable';
import Button from 'components/common/Button';
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { removeBook } from 'bus/cart/cartActions';
import style from './styles.module.scss';

const CartContainer = () => {
  const dispatch = useDispatch();
  const cartItems = useSelector(cartItemsSelector);

  const onDeleteClick = (id) => {
    dispatch(removeBook(id));
  };
  return (
    <div className="container">
      <div className={style.btnWrapper}>
        <Button
          title="Purchase"
          disabled={cartItems.length === 0}
          extraClassName="btn-info"
        />
      </div>
      {cartItems.length > 0 ? (
        <CartTable cartItems={cartItems} onDeleteClick={onDeleteClick} />
      ) : (
        <div className={style.cartWrapper}>
          <i className="fa fa-shopping-cart text-info" />
          <h5>Cart is empty</h5>
        </div>
      )}
    </div>
  );
};

export default CartContainer;
