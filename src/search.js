import got from 'gh-got';

const ghSearch = function ghSearch(query, opts = {}) {
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

  if (opts.type === 'repositories' || opts.type === 'code' || opts.type === 'issues'
    || opts.type === 'users') {
    url = `${url}&type=${opts.type}`;
  }

  return got(url, opts).then(res => res.body);
};

export { ghSearch };
