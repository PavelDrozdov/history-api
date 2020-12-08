import './header.scss';

function Header (children, {...props}= {}) {

  setTimeout(() => {
    const container = document.querySelector('.main-nav');
    container.addEventListener('click', function(e) {
      if (e.target != e.currentTarget) {
        e.preventDefault();

        var data = e.target.getAttribute('href'),
        url = data;
        history.pushState(null, null, url);
      }
        e.stopPropagation();
    }, false);
  }, 0)


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