/* eslint-disable react/forbid-prop-types */
import React from 'react';
import PropTypes from 'prop-types';
import Button from 'components/common/Button';
import style from './styles.module.scss';

const CartTable = ({ cartItems, onDeleteClick }) => {
  return (
    <div className={style.cartTable}>
      <table className="table table-striped table-bordered mt-3">
        <thead>
          <tr>
            <th>Name</th>
            <th>Count</th>
            <th>Price</th>
            <th>Total</th>
            <th> </th>
          </tr>
        </thead>
        <tbody>
          {cartItems.map((item) => (
            <tr>
              <td>{item.title}</td>
              <td> {item.quantity}</td>
              <td> {item.price}</td>
              <td>{item.price * item.quantity} $</td>
              <td>
                <Button
                  title="delete"
                  extraClassName="btn-danger"
                  onClick={() => onDeleteClick(item.id)}
                />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

CartTable.propTypes = {
  cartItems: PropTypes.array.isRequired,
  onDeleteClick: PropTypes.func.isRequired,
};
export default CartTable;
