// Jest-Enzyme matcher - https://github.com/blainekasten/enzyme-matchers
// Jest expect - http://facebook.github.io/jest/docs/expect.html

import React from 'react';
import { shallow } from 'enzyme';
import Footer from './Footer';

describe('Footer', () => {
  it('should render', () => {
    const wrapper = shallow(<Footer />);

    expect(wrapper).toExist();
    expect(wrapper).toHaveTagName('footer');
    expect(wrapper).toHaveClassName('footer');
    expect(wrapper).toHaveProp('role', 'contentinfo');
    expect(wrapper).toIncludeText('Copyright 2018');
  });
});
