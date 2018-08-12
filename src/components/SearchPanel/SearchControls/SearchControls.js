import React from 'react';
import PropTypes from 'prop-types';
import './SearchControls.scss';

import Button from '../../Button/Button';
import TextField from '../../TextField/TextField';
import SelectField from '../../SelectField/SelectField';

function SearchControls (props) {
  const { onClick, onChange } = props;

  return (
    <div className='search-controls'>
      <div className='search-controls__input'>
        <TextField label='Enter repository name' name='search' hideLabel onChange={onChange} />
        <SelectField name="stars" options={["Any",10, 50, 100, 1000]} label="Min. stars" onChange={onChange}/>
      </div>
      <div className='search-controls__button'>
        <Button label='Search Now' onClick={onClick} />
      </div>
    </div>
  );
}

SearchControls.propTypes = {
  onClick: PropTypes.func,
  onChange: PropTypes.func
};

SearchControls.defaultProps = {
  onClick: null,
  onChange: null
};

export default SearchControls;
