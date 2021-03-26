/* eslint-disable react/forbid-prop-types */
import React from 'react';
import PropTypes from 'prop-types';
import getTotalPriceInfo from 'utils/helpers/getTotal/getTotalPriceInfo';
import getTotalCountSingleItem from 'utils/helpers/getTotal/getTotalPriceSingleItem';
import style from './styles.module.scss';

const CartTable = ({ cartItems }) => {
  const totalPriceInfo = getTotalPriceInfo(cartItems);

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
              <td>{getTotalCountSingleItem(item)}</td>
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
