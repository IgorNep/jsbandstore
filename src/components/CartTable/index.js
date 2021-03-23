/* eslint-disable react/forbid-prop-types */
import React from 'react';
import PropTypes from 'prop-types';
import style from './styles.module.scss';

const CartTable = ({ cartItems }) => {
  const totalPriceInfo = cartItems.reduce((acc, item) => {
    return acc + item.quantity * item.price;
  }, 0);

  return (
    <div className={style.cartTable}>
      <table className="table table-striped table-bordered mt-3">
        <thead>
          <tr>
            <th>Name</th>
            <th>Count</th>
            <th>Price</th>
            <th>Total</th>
          </tr>
        </thead>
        <tbody>
          {cartItems.map((item) => (
            <tr key={item.id}>
              <td>{item.title}</td>
              <td> {item.quantity}</td>
              <td> {item.price}</td>
              <td>{item.price * item.quantity}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <div className={style.totalPriceInfo}>
        Total Price: {totalPriceInfo} $
      </div>
    </div>
  );
};

CartTable.propTypes = {
  cartItems: PropTypes.array.isRequired,
};

export default CartTable;
