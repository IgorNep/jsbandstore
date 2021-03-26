import React, { useState } from 'react';
import PropTypes from 'prop-types';
import picLogin from 'assets/images/login_pic.jpg';
import validateLoginInput from 'utils/helpers/validation/validateLogin';
import styles from './styles.module.scss';

const LoginForm = ({ onLoginSubmit }) => {
  const [username, setUserName] = useState('');
  const [error, setError] = useState(false);
  const onSubmit = (e) => {
    e.preventDefault();
    if (validateLoginInput(username)) {
      setError(true);
    } else {
      onLoginSubmit(username);
      setUserName('');
      setError(false);
    }
  };
  return (
    <div className="container">
      <div className={styles.formContainer}>
        <form onSubmit={onSubmit}>
          {' '}
          <img src={picLogin} alt="Login avatar" className={styles.picLogin} />
          <h4 className="text-center">
            <span className="text-info">JS Band</span> Store
          </h4>
          <div className="form-group">
            <label htmlFor="username" className="w-100">
              Name
              <input
                type="text"
                name="username"
                id="username"
                value={username}
                className="form-control w-100"
                onChange={(e) => setUserName(e.target.value)}
              />
              {error && (
                <small className="text-danger">Username is not valid</small>
              )}
            </label>
          </div>
          <input
            type="submit"
            value="Login"
            className="btn btn-block btn-info"
          />
        </form>
      </div>
    </div>
  );
};

LoginForm.propTypes = {
  onLoginSubmit: PropTypes.func.isRequired,
};

export default LoginForm;
