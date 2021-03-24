import React, { useEffect } from 'react';
import LoginForm from 'components/LoginForm';
import { useDispatch, useSelector } from 'react-redux';
import { loginUser } from 'bus/userLogin/userActions';
import {
  loadingSelector,
  userInfoSelector,
  errorSelector,
} from 'bus/userLogin/userSelectors';
import { useHistory } from 'react-router-dom';
import Loader from 'components/common/Loader';
import { showAlert } from 'bus/alert/alertActions';

const LoginContainer = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const userInfo = useSelector(userInfoSelector);
  const loading = useSelector(loadingSelector);
  const error = useSelector(errorSelector);

  useEffect(() => {
    if (userInfo) {
      history.push('/');
    }
  }, [history, userInfo, loginUser, error]);

  useEffect(() => {
    if (error) {
      dispatch(showAlert({ title: error }));
    }
  }, [error]);
  const onLoginSubmit = (username) => {
    dispatch(loginUser(username));
  };

  if (loading) {
    return <Loader />;
  }

  return (
    <>
      <LoginForm onLoginSubmit={onLoginSubmit} />
    </>
  );
};

export default LoginContainer;
