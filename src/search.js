import got from 'gh-got';

const Search = function(query, opts) { 
  opts = opts || {};

  if (typeof query !== 'string') {
    return Promise.reject(new Error('Please enter search query as string.'));
  }

  let url = `search/repositories?q=${query}`;

  if (opts.sort === 'forks' || opts.sort === 'stars' || opts.sort === 'updated') {
    url = `${url}&sort=${opts.sort}`;
  }

  if (opts.order === 'asc' || opts.order === 'desc') {
    url = `${url}&order=${opts.order}`;
  }

  return got(url, opts).then((res) => {
    return res.body;
  });
};

export { Search };