import React from 'react';
import { shallow } from 'enzyme';
import SearchResults from './SearchResults';
import defaultProps, { withItems } from './SearchResults.fixtures';
import { TacoTable } from 'react-taco-table';

describe('SearchResults', () => {
  it('should render empty', () => {
    const wrapper = shallow(<SearchResults {...defaultProps} />);

    expect(wrapper).toExist();
    expect(wrapper).toHaveClassName('search-results');
    expect(wrapper.find('h2')).toHaveClassName('search-results__title');
    expect(wrapper).toIncludeText('No results to display');


  });

  it('should render results when it has items', () => {
    const wrapper = shallow(<SearchResults {...withItems} />);

    expect(wrapper).toExist();
    expect(wrapper).toHaveClassName('search-results');
    expect(wrapper.find('h2')).toHaveClassName('search-results__title');

    expect(wrapper.find(TacoTable)).toExist();
  });
});
