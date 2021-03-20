import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Navbar from 'components/Navbar';
import LoginContainer from 'containers/LoginContainer';
import NotFound from 'containers/NotFound';
import goRoute from './goRoute';

const Public = () => {
  return (
    <>
      <Navbar />
      <Switch>
        <Route path={goRoute.login} component={LoginContainer} />
        <Route path={goRoute.notFound} component={NotFound} />
      </Switch>
    </>
  );
};

export default Public;
