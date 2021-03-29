import React, { useState } from 'react';
import PropTypes from 'prop-types';
import getTotalCountSingleItem from 'utils/helpers/getTotal/getTotalPriceSingleItem';
import {
  validateCountAmount,
  validateCountOnLimit,
} from 'utils/helpers/validation/validateCountAmount';
import classnames from 'classnames';
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
  const decrimentCount = () => {
    if (countValue > 0) {
      setCountValue(countValue - 1);
      const item = {
        price,
        quantity: countValue - 1,
      };
      setTotalPrice(getTotalCountSingleItem(item));
    }
    setErrorValue('');
  };

  const incrementCount = () => {
    if (validateCountOnLimit(countValue + 1, countInStock)) {
      setErrorValue(`We have only ${countInStock} books in stock`);
    }
    if (validateCountAmount(countValue + 1, countInStock)) {
      setCountValue(countValue + 1);
      const item = {
        price,
        quantity: countValue + 1,
      };
      setTotalPrice(getTotalCountSingleItem(item));
    }
  };
  return (
    <div className={style.addCountWrapper}>
      {errorValue && (
        <span className="text-danger mb-3 d-block" title="errorDivTest">
          {errorValue}
        </span>
      )}
      <div className={style.fieldGroup}>
        <span>Price, $ </span>
        <span>{price}</span>
      </div>
      <div className={style.fieldGroup}>
        <span> Count</span>
        <div className={style.inputGroup}>
          <input
            value="-"
            className={classnames('btn btn-info', style.countBtn)}
            onClick={decrimentCount}
            type="button"
          />
          <input
            type="text"
            value={countValue}
            onChange={onChangeHandler}
            title="priceInputTest"
          />
          <input
            value="+"
            className={classnames('btn btn-info', style.countBtn)}
            onClick={(e) => incrementCount(e)}
            title="incrementBtn"
            type="button"
          />
        </div>
      </div>
      <div className={style.fieldGroup}>
        <span>Total Price, $</span>
        <span title="totalPriceTest">{totalPrice}</span>
      </div>
      <div className={style.buttonGroup}>
        <input
          value="Add To Cart"
          className="btn btn-info"
          onClick={() => onAddToCartClick(countValue)}
          disabled={countValue === 0}
          title="addToCartBtn"
          type="button"
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
