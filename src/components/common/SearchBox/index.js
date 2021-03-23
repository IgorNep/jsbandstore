import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import style from './styles.module.scss';

const SearchBox = ({ submitSearchHandler }) => {
  return (
    <div className={style.formGroup}>
      <span className={classnames('fa fa-search', style.feedback)} />
      <input
        className={style.formControl}
        type="text"
        placeholder="Search"
        aria-label="Search"
        onChange={(e) => {
          e.preventDefault();
          submitSearchHandler(e.target.value);
        }}
      />
    </div>
  );
};

SearchBox.propTypes = {
  submitSearchHandler: PropTypes.func.isRequired,
};
export default SearchBox;
