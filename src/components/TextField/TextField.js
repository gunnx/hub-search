import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import './TextField.scss';

function TextField (props) {
  const { name, label, hideLabel, onChange } = props;

  const labelClasses = classNames({
    'text-field__label': true,
    'text-field__label--hidden': hideLabel
  });

  return (
    <div className='text-field'>
      <label htmlFor={name} className={labelClasses}>{label}</label>
      <input type='text' name={name} id={name} className='text-field__input' onChange={onChange} />
    </div>
  );
}

TextField.propTypes = {
  name: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  hideLabel: PropTypes.bool,
  onChange: PropTypes.func
};

TextField.defaultProps = {
  hideLabel: false,
  onChange: null
};

export default TextField;
