import React from 'react';
import PropTypes from 'prop-types';

import './SelectField.scss';

function SelectField(props) {
  const { name, label, options, onChange } = props;
  return (
    <div className='select-field'>
      <label htmlFor={name} className="select-field__label">{label}</label>
      <select name={name} id={name} className="select-field__input" onChange={onChange}>
        {options.map((option) => (<option value={option} key={option}>{option}</option>))}
      </select>
    </div>
  );
}

SelectField.propTypes = {
  name: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  options: PropTypes.array.isRequired,
  onChange: PropTypes.func
};

SelectField.defaultProps = {
  onChange: null
};

export default SelectField;
