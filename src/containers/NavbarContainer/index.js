import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { userInfoSelector } from 'bus/userLogin/userSelectors';
import Navbar from 'components/Navbar';
import { logoutUser } from 'bus/userLogin/userActions';
import { useHistory } from 'react-router-dom';
import { cartItemsSelector } from 'bus/cart/cartSelectors';
import { resetOrderInfo } from 'bus/order/orderActions';
import getTotalCountInfo from 'utils/helpers/getTotal/getTotalCountInfo';
import { clearBooks } from 'bus/books/booksActions';

const NavbarContainer = () => {
  const dispatch = useDispatch();
  const userInfo = useSelector(userInfoSelector);
  const history = useHistory();
  const cartItems = useSelector(cartItemsSelector);

  const totalCountInfo = getTotalCountInfo(cartItems);

  const onLogoutClicked = () => {
    dispatch(logoutUser());
    dispatch(resetOrderInfo());
    dispatch(clearBooks());
    history.push('/login');
  };
  return (
    <>
      <Navbar
        username={userInfo.username}
        avatar={userInfo.avatar}
        onLogoutClicked={onLogoutClicked}
        cartItemsSum={totalCountInfo}
      />
    </>
  );
};

export default NavbarContainer;
