import React from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';
import BooksContainer from 'containers/BooksContainer';
import CartContainer from 'containers/CartContainer';
import BookDetailsContainer from 'containers/BookDetailsContainer';
import NotFound from 'containers/NotFound';
import LoginContainer from 'containers/LoginContainer';
import NavbarContainer from 'containers/NavbarContainer';

import goRoute from './goRoute';

const Private = () => {
  return (
    <>
      <Switch>
        <Route exact path="/404" component={NotFound} />
        <Route>
          <NavbarContainer />
          <Switch>
            <Route exact path={goRoute.books} component={BooksContainer} />
            <Route path={goRoute.login} component={LoginContainer} />
            <Route path={goRoute.book} component={BookDetailsContainer} />
            <Route path={goRoute.cart} component={CartContainer} />
            <Redirect to="/404" />
          </Switch>
        </Route>
      </Switch>
    </>
  );
};

export default Private;
