import './header.scss';

function Header (children = '') {
  function render () {
    return `
      <Header>
        router SPA
      </Header>
    `
  }
  return render ();
}

export {
  Header,
}