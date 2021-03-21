import React from 'react';
import LoginForm from 'components/LoginForm';
import { useDispatch } from 'react-redux';
import { loginUser } from 'bus/userLogin/userActions';

const LoginContainer = () => {
  const dispatch = useDispatch();

  const onLoginSubmit = (username) => {
    dispatch(loginUser(username));
  };

  return (
    <>
      <LoginForm onLoginSubmit={onLoginSubmit} />
    </>
  );
};

export default LoginContainer;
