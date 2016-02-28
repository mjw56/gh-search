# gh-search

A simple utility to search GitHub API

## Install

```bash
$ npm i gh-search -S
```

## Usage

```js
import ghSearch from 'gh-search';

ghSearch('javascript', { sort: 'stars' })
  .then(res => console.log(res));
```

## LICENSE

MIT
