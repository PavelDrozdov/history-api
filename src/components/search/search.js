import './search.scss';

function Search (children, {search, ...props}= {}) {

  setTimeout(() => {
    document.getElementById('app-search-input').select();
    document.getElementById('app-search').addEventListener('submit', (e) => {
      e.preventDefault();
      const url = new URL(window.location.href);
      url.searchParams.set('search', document.getElementById('app-search-input').value)
      window.location.href = url.href;
    })
  },0)

  function render () {
    return `
      <div>
        <form id="app-search">
          <label>Search
            <input id="app-search-input" value="${search ? search : ''}" />
            <button type="submit">search</button>
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