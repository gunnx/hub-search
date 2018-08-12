import React from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import './Button.scss';

function Button (props) {
  const { label, onClick } = props;
  const classes = classNames({
    'button': true
  });

  return (
    <button className={classes} onClick={onClick}>{label}</button>
  );
}

Button.propTypes = {
  label: PropTypes.string.isRequired,
  onClick: PropTypes.func
};

Button.defaultProps = {
  onClick: null
};

export default Button;
