import React from 'react';
import PropTypes from 'prop-types';

const defaultStyle = {
  width: '100%',
  position: 'absolute',
  top: 0,
  left: 0,
  zIndex: 999,
};

const Alert = ({ title, type }) => {
  return (
    <div className={`alert alert-${type}`} style={defaultStyle}>
      {title}
    </div>
  );
};

Alert.propTypes = {
  title: PropTypes.string.isRequired,
  type: PropTypes.string,
};

Alert.defaultProps = {
  type: 'danger',
};

export default Alert;
