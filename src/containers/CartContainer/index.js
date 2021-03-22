import Button from 'components/common/Button';
import React from 'react';
import style from './styles.module.scss';

const CartContainer = () => {
  const empty = true;
  return (
    <div className="container">
      <div className={style.btnWrapper}>
        <Button title="Purchase" disabled={empty} extraClassName="btn-info" />
      </div>
      <div className={style.cartWrapper}>
        <i className="fa fa-shopping-cart text-info" />
        <h5>Cart is empty</h5>
      </div>
    </div>
  );
};

export default CartContainer;
