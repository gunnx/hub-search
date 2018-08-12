import React from 'react';
import { shallow } from 'enzyme';
import TextField from './TextField';
import defaultProps from './TextField.fixtures';

describe('TextField', () => {
  it('should render', () => {
    const wrapper = shallow(<TextField {...defaultProps} />);

    expect(wrapper).toHaveClassName('text-field');
    expect(wrapper.find('input')).toHaveProp('name', 'test');
    expect(wrapper.find('input')).toHaveProp('id', 'test');
    expect(wrapper.find('input')).toHaveProp('type', 'text');
    expect(wrapper.find('input')).toHaveClassName('text-field__input');

    expect(wrapper.find('label')).toHaveText('Test');
    expect(wrapper.find('label')).toHaveProp('htmlFor', 'test');
  });
});
