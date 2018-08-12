// Jest-Enzyme matcher - https://github.com/blainekasten/enzyme-matchers
// Jest expect - http://facebook.github.io/jest/docs/expect.html

import React from 'react';
import { shallow } from 'enzyme';
import Header from './Header';
import Logo from '../Logo/Logo';

describe('Header', () => {
  it('should render', () => {
    const wrapper = shallow(<Header />);

    expect(wrapper).toExist();
    expect(wrapper).toHaveTagName('header');
    expect(wrapper).toHaveClassName('header');
  });

  it('should have a H1 title', () => {
    const wrapper = shallow(<Header />);

    expect(wrapper.find('h1')).toHaveText('Search for repos on Github');
  });

  it('should contain the logo', () => {
    const wrapper = shallow(<Header />);

    expect(wrapper.find(Logo)).toExist();
  });
});
