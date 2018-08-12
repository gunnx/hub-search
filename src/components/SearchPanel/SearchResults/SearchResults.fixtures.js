const props = {
  fetching: false,
  results: {
    items: [],
    total_count: 0
  }
};


const withItems = {
  fetching: false,
  results: {
    items: [{
      id: 1,
      name: 'repo1',
      description: 'description for repo1',
      stargazers_count: 5,
      html_url: 'http://repo1'

    }, {
      id: 2,
      name: 'repo2',
      description: 'description for repo2',
      stargazers_count: 15,
      html_url: 'http://repo2'

    }, {
      id: 3,
      name: 'repo3',
      description: 'description for repo3',
      stargazers_count: 25,
      html_url: 'http://repo3'
    }],
    total_count: 3
  }
};

export default props;

export {
  withItems
}
