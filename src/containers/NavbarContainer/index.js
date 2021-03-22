import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { userInfoSelector } from 'bus/userLogin/userSelectors';
import Navbar from 'components/Navbar';
import { logoutUser } from 'bus/userLogin/userActions';
import { useHistory } from 'react-router-dom';
import cartItemsSelector from 'bus/cart/cartSelectors';

const NavbarContainer = () => {
  const dispatch = useDispatch();
  const userInfo = useSelector(userInfoSelector);
  const history = useHistory();
  const cartItems = useSelector(cartItemsSelector);

  const totalCartItemsQuantity = cartItems.reduce((acc, book) => {
    return acc + book.quantity;
  }, 0);

  const onLogoutClicked = () => {
    dispatch(logoutUser());
    history.push('/login');
  };
  return (
    <>
      <Navbar
        username={userInfo.username}
        onLogoutClicked={onLogoutClicked}
        cartItemsSum={totalCartItemsQuantity}
      />
    </>
  );
};

export default NavbarContainer;
