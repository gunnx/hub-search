import React from 'react';
import { shallow } from 'enzyme';
import SearchPanel from './SearchPanel';
import SearchControls from './SearchControls/SearchControls';
import SearchResults from './SearchResults/SearchResults';

describe('SearchPanel', () => {
  it('should render', () => {
    const wrapper = shallow(<SearchPanel/>);

    expect(wrapper).toHaveClassName('search-panel');
    expect(wrapper.find('h2')).toHaveClassName('search-panel__title');
    expect(wrapper.find('h2')).toHaveText('Search');
  });

  it('should render the search controls', () => {
    const wrapper = shallow(<SearchPanel/>);

    expect(wrapper.find(SearchControls)).toExist();
  });

  it('should render the search results', () => {
    const wrapper = shallow(<SearchPanel/>);

    expect(wrapper.find(SearchResults)).toExist();
  });

  //it('should display results after a valid search is entered', () => {
  //a
  //});
});
