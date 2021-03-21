import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { userInfoSelector } from 'bus/userLogin/userSelectors';
import Navbar from 'components/Navbar';
import { logoutUser } from 'bus/userLogin/userActions';
import { useHistory } from 'react-router-dom';

const NavbarContainer = () => {
  const dispatch = useDispatch();
  const userInfo = useSelector(userInfoSelector);
  const history = useHistory();

  const onLogoutClicked = () => {
    dispatch(logoutUser());
    history.push('/login');
  };
  return (
    <>
      <Navbar username={userInfo.username} onLogoutClicked={onLogoutClicked} />
    </>
  );
};

export default NavbarContainer;
