import React from 'react';
import { useSelector } from 'react-redux';
import { userInfoSelector } from 'bus/userLogin/userSelectors';
import Alert from 'components/common/Alert';
import alertSelector from 'bus/alert/alertSelectors';
import Private from './Private';
import Public from './Public';

const App = () => {
  const userInfo = useSelector(userInfoSelector);
  const alert = useSelector(alertSelector);
  return (
    <>
      {alert && <Alert title={alert.title} type={alert.type} />}
      {userInfo ? <Private /> : <Public />}
    </>
  );
};

export default App;
