import React from 'react';
import style from './styles.module.scss';

const CartContainer = () => {
  return (
    <div className="container">
      <div className={style.cartWrapper}>
        <i className="fa fa-shopping-cart text-info" />
        <h5>Cart is empty</h5>
      </div>
    </div>
  );
};

export default CartContainer;
