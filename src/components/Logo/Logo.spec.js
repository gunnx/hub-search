// Jest-Enzyme matcher - https://github.com/blainekasten/enzyme-matchers
// Jest expect - http://facebook.github.io/jest/docs/expect.html

import React from 'react';
import { shallow } from 'enzyme';
import Logo from './Logo';

describe('Logo', () => {
  it('should render', () => {
    const wrapper = shallow(<Logo />);

    expect(wrapper).toExist();
  });
});
