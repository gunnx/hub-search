import React from 'react';
import { shallow } from 'enzyme';
import Application from './Application';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import SearchPanel from '../SearchPanel/SearchPanel';

describe('Application', () => {
  it('should render', () => {
    const wrapper = shallow(<Application />);

    expect(wrapper).toExist();
    expect(wrapper).toHaveClassName('application');
  });

  it('should contain a Header', () => {
    const wrapper = shallow(<Application />);

    expect(wrapper.find(Header)).toExist();
  });

  it('should contain a Footer', () => {
    const wrapper = shallow(<Application />);

    expect(wrapper.find(Footer)).toExist();
  });

  it('should contain a SearchPanel', () => {
    const wrapper = shallow(<Application />);

    expect(wrapper.find('main')).toContainReact(<SearchPanel />);
  });
});
