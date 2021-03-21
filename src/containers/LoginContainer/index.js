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
import Alert from 'components/common/Alert';

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
  }, [history, userInfo, loginUser]);
  const onLoginSubmit = (username) => {
    dispatch(loginUser(username));
  };

  if (loading) {
    return <Loader />;
  }

  return (
    <>
      {error && <Alert title={error.message} type="danger" />}
      <LoginForm onLoginSubmit={onLoginSubmit} />
    </>
  );
};

export default LoginContainer;
