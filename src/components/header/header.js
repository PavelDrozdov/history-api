import './header.scss';

function Header (children = '') {
  function render () {
    return `
      <Header>
        <div>router SPA</div>
        <nav class="main-nav">
          <ul>
            <li><a href="#main">main</a></li>
            <li><a href="#cards">cards</a></li>
          </ul>
        </nav>
      </Header>
    `
  }
  return render ();
}

export {
  Header,
}