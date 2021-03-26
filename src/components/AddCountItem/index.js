import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Button from 'components/common/Button';
import getTotalCountSingleItem from 'utils/helpers/getTotal/getTotalPriceSingleItem';
import {
  validateCountAmount,
  validateCountOnLimit,
} from 'utils/helpers/validation/validateCountAmount';
import style from './styles.module.scss';

const AddCountItem = ({ countInStock, price, quantity, onAddToCartClick }) => {
  const [countValue, setCountValue] = useState(quantity);
  const [errorValue, setErrorValue] = useState('');
  const [totalPrice, setTotalPrice] = useState(
    getTotalCountSingleItem({ price, quantity })
  );

  const onChangeHandler = (e) => {
    const inputCountValue = +e.target.value;
    if (validateCountAmount(inputCountValue, countInStock)) {
      setCountValue(inputCountValue);
      const item = {
        price,
        quantity: inputCountValue,
      };
      setTotalPrice(getTotalCountSingleItem(item));
      setErrorValue('');
    }
    if (validateCountOnLimit(inputCountValue, countInStock)) {
      setErrorValue(`We have only ${countInStock} books in stock`);
    }
  };
  return (
    <div className={style.addCountWrapper}>
      {errorValue && (
        <span className="text-danger mb-3 d-block">{errorValue}</span>
      )}
      <div className={style.fieldGroup}>
        <span>Price, $ </span>
        <span>{price}</span>
      </div>
      <div className={style.fieldGroup}>
        <span> Count</span>
        <input type="number" value={countValue} onChange={onChangeHandler} />
      </div>
      <div className={style.fieldGroup}>
        <span>Total Price, $</span>
        <span>{totalPrice}</span>
      </div>
      <div className={style.buttonGroup}>
        <Button
          title="Add To Cart"
          extraClassName="btn-info"
          onClick={() => onAddToCartClick(countValue)}
          disabled={countValue === 0}
        />
      </div>
    </div>
  );
};

AddCountItem.propTypes = {
  countInStock: PropTypes.number.isRequired,
  price: PropTypes.number.isRequired,
  onAddToCartClick: PropTypes.func.isRequired,
  quantity: PropTypes.number,
};
AddCountItem.defaultProps = {
  quantity: 0,
};
export default AddCountItem;
