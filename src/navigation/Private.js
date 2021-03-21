import React from 'react';
import { Route, Switch } from 'react-router-dom';
import BooksContainer from 'containers/BooksContainer';
import CartContainer from 'containers/CartContainer';
import BookDetailsContainer from 'containers/BookDetailsContainer';
import NotFound from 'containers/NotFound';
import NavbarContainer from 'containers/NavbarContainer';
import goRoute from './goRoute';

const Private = () => {
  return (
    <>
      <NavbarContainer />
      <Switch>
        <Route exact path={goRoute.books} component={BooksContainer} />
        <Route path={goRoute.book} component={BookDetailsContainer} />
        <Route path={goRoute.cart} component={CartContainer} />
        <Route path={goRoute.notFound} component={NotFound} />
      </Switch>
    </>
  );
};

export default Private;
