import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Button from 'components/common/Button';
import style from './styles.module.scss';

const AddCountItem = ({ count, price, onAddToCartClick }) => {
  const [countValue, setCountValue] = useState(0);
  const [errorValue, setErrorValue] = useState('');
  const [totalPrice, setTotalPrice] = useState(0);

  const onChangeHandler = (e) => {
    if (e.target.value >= 0 && e.target.value <= count) {
      setCountValue(Number(e.target.value));
      setTotalPrice(Number(price * e.target.value));
      setErrorValue('');
    }
    if (e.target.value > count) {
      setErrorValue(`We have only ${count} books in stock`);
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
  count: PropTypes.number.isRequired,
  price: PropTypes.number.isRequired,
  onAddToCartClick: PropTypes.func.isRequired,
};
export default AddCountItem;
