import React, { Component } from 'react';
import './SearchPanel.scss';
// import testData from './test';
import SearchControls from './SearchControls/SearchControls';
import SearchResults from './SearchResults/SearchResults';
const API_URL = 'https://api.github.com';

class SearchPanel extends Component {
  constructor (props) {
    super(props);

    this.state = {
      results: {
        items: [],
        total_count: 0
      },
      isFetching: false,
      searchTerm: '',
      minStars: 'Any'
    };

    this.searchForRepositories = this.searchForRepositories.bind(this);
    this.updateSearch = this.updateSearch.bind(this);
  }

  async searchForRepositories () {
    const searchTerm = this.state.searchTerm;
    const minStars = this.state.minStars;

    if (searchTerm.length < 4) {
      alert('Please enter at least 4 characters to perform a search');
    } else {
      // call out to API with current search term, store results
      const extraParam = minStars === 'Any' ? '' : ` stars:>=${minStars}`;
      const url = `${API_URL}/search/repositories?q=${searchTerm}${extraParam}`;
      const options = {

      };

      this.setState({
        isFetching: true
      });

      const response = await window.fetch(url, options);
      const jsonPayload = await response.json();

      this.setState({
        results: jsonPayload,
        isFetching: false
      });
    }
  }

  updateSearch (event) {
    switch (event.target.id) {
      case 'stars':
        this.setState({
          minStars: event.target.value
        });
        break;
      case 'search':
        this.setState({
          searchTerm: event.target.value
        });
        break;
    }
  }

  render () {
    const { state, searchForRepositories, updateSearch} = this;
    const { results, isFetching } = state;

    return (
      <div className='search-panel'>
        <h2 className='search-panel__title'>Search</h2>
        <SearchControls onClick={searchForRepositories} onChange={updateSearch} />
        <SearchResults results={results} fetching={isFetching} />
      </div>
    );
  }
}

export default SearchPanel;
