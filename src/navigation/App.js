import React from 'react';
import Private from './Private';
import Public from './Public';

const App = () => {
  const isAuthorized = true;
  return isAuthorized ? <Private /> : <Public />;
};

export default App;
