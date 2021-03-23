import React from 'react';
import PropTypes from 'prop-types';

const Alert = ({ title, type }) => {
  return <div className={`alert alert-${type}`}>{title}</div>;
};

Alert.propTypes = {
  title: PropTypes.string.isRequired,
  type: PropTypes.string,
};

Alert.defaultProps = {
  type: 'danger',
};

export default Alert;
