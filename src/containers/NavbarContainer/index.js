import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { userInfoSelector } from 'bus/userLogin/userSelectors';
import Navbar from 'components/Navbar';
import { logoutUser } from 'bus/userLogin/userActions';

const NavbarContainer = () => {
  const dispatch = useDispatch();
  const userInfo = useSelector(userInfoSelector);

  const onLogoutClicked = () => {
    dispatch(logoutUser());
  };
  return (
    <>
      <Navbar username={userInfo.username} onLogoutClicked={onLogoutClicked} />;
    </>
  );
};

export default NavbarContainer;
