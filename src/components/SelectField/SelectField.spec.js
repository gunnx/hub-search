import React from 'react';
import { shallow } from 'enzyme';
import SelectField from './SelectField';
import defaultProps from './SelectField.fixtures';

describe('SelectField', () => {
  it('should render with options 123', () => {
    const wrapper = shallow(<SelectField {...defaultProps} />);

    expect(wrapper).toHaveClassName('select-field');
    expect(wrapper.find('select')).toHaveProp('name', 'select');
    expect(wrapper.find('select')).toHaveProp('id', 'select');
    expect(wrapper.find('select')).toHaveClassName('select-field__input');

    expect(wrapper.find('label')).toHaveText('Select');
    expect(wrapper.find('label')).toHaveProp('htmlFor', 'select');
  });
});
