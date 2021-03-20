import React from 'react';
import { Redirect, Route, Switch, useLocation } from 'react-router-dom';
import LoginContainer from 'containers/LoginContainer';
import NotFound from 'containers/NotFound';

import goRoute from './goRoute';

const Public = () => {
  const pathName = useLocation().pathname;

  return (
    <>
      <Switch>
        <Route path={goRoute.login} component={LoginContainer} />
        {pathName === '/' && <Redirect to={goRoute.login} />}
        <Route path={goRoute.notFound} component={NotFound} />
      </Switch>
    </>
  );
};

export default Public;
