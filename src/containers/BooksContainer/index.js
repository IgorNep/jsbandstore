import { loadingSelector } from 'bus/userLogin/userSelectors';
import Loader from 'components/common/Loader';
import React from 'react';
import { useSelector } from 'react-redux';

const BooksContainer = () => {
  const loading = useSelector(loadingSelector);

  return loading ? (
    <Loader />
  ) : (
    <div className="container">
      <h3>This is main page</h3>
    </div>
  );
};

export default BooksContainer;
