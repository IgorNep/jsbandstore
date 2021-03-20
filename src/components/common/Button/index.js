import React, { useMemo } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

const Button = ({ title, disabled, extraClassName }) => {
  const buttonStyle = useMemo(
    () =>
      classNames('btn', extraClassName, {
        'btn-disabled': disabled,
      }),
    [disabled, extraClassName]
  );

  return (
    <button type="button" disabled={disabled} className={buttonStyle}>
      {title}
    </button>
  );
};
Button.propTypes = {
  title: PropTypes.string,
  disabled: PropTypes.bool,
  extraClassName: PropTypes.string,
};
Button.defaultProps = {
  title: 'Button',
  disabled: false,
  extraClassName: 'btn',
};
export default Button;
