import React, { useState } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import style from './styles.module.scss';

const FilterPriceDropdown = ({ filterHandler }) => {
  const [priceValue, setPriceValue] = useState(0);

  const changeHandler = (e) => {
    setPriceValue(e.target.value);
    filterHandler(e.target.value);
  };

  return (
    <>
      <select
        className={classnames('form-select', style.priceSelect)}
        value={priceValue}
        onChange={(e) => {
          changeHandler(e);
        }}
      >
        <option defaultValue value="0">
          Price
        </option>
        <option value="1"> &lt; 25</option>
        <option value="2">25 - 50</option>
        <option value="3">50 +</option>
      </select>
    </>
  );
};

FilterPriceDropdown.propTypes = {
  filterHandler: PropTypes.func.isRequired,
};

export default FilterPriceDropdown;
