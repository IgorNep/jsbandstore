import Button from 'components/common/Button';
import React from 'react';
import { Link } from 'react-router-dom';
import style from './styles.module.scss';

const Navbar = () => {
  const cartItemsSum = 3;
  const username = 'Maxim';
  return (
    <header>
      <nav className="navbar  navbar-expand-lg ">
        <div className="container">
          <div className={style.navbarItem}>
            <span>{username}</span>
            <Button title="Sign Out" extraClassName="btn-secondary py-2 ml-3" />
          </div>
        </div>
      </nav>
      <div className="navbar navbar-dark bg-primary navbar-expand-lg mb-3 py-3">
        <div className="container">
          <Link to="/">
            <i className="fa fa-book" /> JS Band Store
          </Link>
          <Link to="/cart">
            <i className="fa fa-shopping-cart" /> Cart ({cartItemsSum})
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
