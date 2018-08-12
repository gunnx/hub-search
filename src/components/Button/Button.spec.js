import React from 'react';
import { shallow } from 'enzyme';
import Button from './Button';
import defaultProps from './Button.fixtures';

describe('Button', () => {
  it('should render', () => {
    const wrapper = shallow(<Button {...defaultProps} />);

    expect(wrapper).toExist();
    expect(wrapper).toHaveTagName('button');
    expect(wrapper).toHaveClassName('button');
    expect(wrapper).toHaveText('Hello');
  });
});
