import React, { useCallback, useState } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import debounce from 'utils/helpers/debounce';
import style from './styles.module.scss';

const SearchBox = ({ submitSearchHandler }) => {
  const [text, setText] = useState('');

  const debounceSearch = useCallback(
    debounce((nextText) => submitSearchHandler(nextText), 1000),
    []
  );
  const onChangeHandler = (e) => {
    const nextText = e.target.value;
    setText(nextText);
    debounceSearch(nextText);
  };

  return (
    <div className={style.formGroup}>
      <span className={classnames('fa fa-search', style.feedback)} />
      <input
        className={style.formControl}
        type="text"
        value={text}
        placeholder="Search"
        aria-label="Search"
        onChange={(e) => {
          onChangeHandler(e);
        }}
      />
    </div>
  );
};

SearchBox.propTypes = {
  submitSearchHandler: PropTypes.func.isRequired,
};
export default SearchBox;
