import React from 'react';
import { useSelector } from 'react-redux';
import { userInfoSelector } from 'bus/userLogin/userSelectors';
import Private from './Private';
import Public from './Public';

const App = () => {
  const userInfo = useSelector(userInfoSelector);
  return userInfo ? <Private /> : <Public />;
};

export default App;
