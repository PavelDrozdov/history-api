import './search.scss';
import { replaceQueryParam } from '../../utils/query.utils';

function Search (children, {search, ...props}= {}) {

  setTimeout(() => {
    document.getElementById('app-search-input').select();

    document.querySelector('.app-clear-search-js').addEventListener('click', (e) => {
      e.preventDefault();
      let url = window.location.pathname
      history.pushState(null, null, url);
    })

    document.getElementById('app-search').addEventListener('submit', (e) => {
      e.preventDefault();
      let str = window.location.search
      str = replaceQueryParam('search', document.getElementById('app-search-input').value, str)
      let url = window.location.pathname + str
      history.pushState(null, null, url);
    });
  },0)

  function render () {
    return `
      <div>
        <form id="app-search">
          <label>Search
            <input id="app-search-input" value="${search ? search : ''}" />
            <button type="submit">search</button>
            <button class="app-clear-search-js">clear</button>
          </label>
        </form>
      </Header>
    `
  }
  return render ();
}

export {
  Search,
}