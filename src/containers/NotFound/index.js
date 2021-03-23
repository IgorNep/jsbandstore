import Button from 'components/common/Button';
import React from 'react';
import { useHistory } from 'react-router-dom';
import image from 'assets/images/cat.jfif';
import style from './styles.module.scss';

const NotFound = () => {
  const history = useHistory();
  return (
    <div className={style.errorTemplate}>
      <img src={image} alt="Not found" className={style.imageStyle} />
      <h1>404</h1>
      <h3>Sorry, that page does not exist</h3>
      <Button
        title="Take me home"
        extraClassName="btn-info"
        onClick={() => {
          history.push('/');
        }}
      />
    </div>
  );
};

export default NotFound;
