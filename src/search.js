import got from 'gh-got';

const Search = function Search(query, opts = {}) {
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

  return got(url, opts).then(res => res.body);
};

export { Search };
