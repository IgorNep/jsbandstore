import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import style from './styles.module.scss';

const BookItem = ({ title, author, price, cover }) => {
  return (
    <div className={classnames('card py-2', style.cardStyle)}>
      <img className={style.image} src={cover} alt="Card cap" />
      <div className={classnames('card-body', style.cardBodyStyle)}>
        <h5 className="card-title">{title}</h5>
        <p className="card-text">{author}</p>
        <p className={classnames('card-text', style.priceSection)}>
          {price} ${' '}
          <Link to="/" className="btn btn-info">
            View
          </Link>
        </p>
      </div>
    </div>
  );
};

BookItem.propTypes = {
  title: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  cover: PropTypes.string.isRequired,
};

export default BookItem;
