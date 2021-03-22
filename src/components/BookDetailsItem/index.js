/* eslint-disable react/prop-types */
import React from 'react';
import classnames from 'classnames';
import style from './styles.module.scss';

const BookDetailsItem = ({ book }) => {
  return (
    <div className={style.cardStyle}>
      <div className={style.cardDesc}>
        <img className={style.cardImage} src={book.cover} alt="Card cap" />
        <p className={style.cardText}>{book.description}</p>
      </div>
      <div className={classnames('card-body', style.cardBodyStyle)}>
        <h5 className="card-title">{book.title}</h5>
        <p className="card-text">{book.author}</p>
        <p>
          <i className="fa fa-tags mr-2" />
          {book.tags.join(', ')}
        </p>
      </div>
    </div>
  );
};

export default BookDetailsItem;
