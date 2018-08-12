import React from 'react';
import PropTypes from 'prop-types';
import './SearchResults.scss';
import { TacoTable, DataType, Formatters, SortDirection } from 'react-taco-table';
import 'react-taco-table/dist/react-taco-table.css';
import Spinner from '../../Spinner/Spinner';

function renderResults (results) {
  const columns = [
    {
      id: 'name',
      type: DataType.String,
      header: 'Name'
    }, {
      id: 'description',
      type: DataType.String,
      header: 'Description'
    }, {
      id: 'stargazers_count',
      type: DataType.Number,
      header: 'Stars',
      renderer: Formatters.decFormat(2)
    }, {
      id: 'html_url',
      type: DataType.String,
      header: 'Stars',
      renderer: Formatters.decFormat(2)
    }
  ];

  return (
    <TacoTable
      columns={columns}
      data={results.items}
      initialSortDirection={SortDirection.Ascending}
      initialSortColumnId='name'
    />
  );
}

function SearchResults (props) {
  const { fetching, results } = props;
  let content = null;

  // if fetching then render the spinner
  // otherwise show results or no results
  if (fetching) {
    content = (<div className='search-results__loader'><Spinner /></div>);
  } else {
    if (results.total_count === 0) {
      content = (<p>No results to display</p>);
    } else {
      content = renderResults(results);
    }
  }

  return (
    <div className='search-results'>
      <h2 className='search-results__title'>Results</h2>
      {content}
    </div>
  );
}

SearchResults.propTypes = {
  fetching: PropTypes.bool,
  results: PropTypes.object.isRequired
};

SearchResults.defaultProps = {
  fetching: false
};

export default SearchResults;
