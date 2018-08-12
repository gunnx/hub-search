// Jest-Enzyme matcher - https://github.com/blainekasten/enzyme-matchers
// Jest expect - http://facebook.github.io/jest/docs/expect.html

import React from 'react';
import { shallow } from 'enzyme';
import SearchControls from './SearchControls';
import TextField from '../../TextField/TextField';
import Button from '../../Button/Button';

describe('SearchControls', () => {
  it('should render', () => {
    const wrapper = shallow(<SearchControls />);

    expect(wrapper).toExist();
    expect(wrapper).toHaveClassName('search-controls');
  });

  it('should contain a TextField', () => {
    const wrapper = shallow(<SearchControls />);

    expect(wrapper.find(TextField)).toExist();
  });

  it('should contain a Button', () => {
    const wrapper = shallow(<SearchControls />);

    expect(wrapper.find(Button)).toExist();
  });

  it('should call the handler when button clicked', () => {
    const spy = jest.fn();
    const wrapper = shallow(<SearchControls onClick={spy}/>);

    wrapper.find(Button).simulate('click');

    expect(spy).toHaveBeenCalled();
  });
});
