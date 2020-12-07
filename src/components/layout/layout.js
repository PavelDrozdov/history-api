import { Header } from '../header/header';

function Layout (children = '') {
  function render () {
    return `
      <div>
        ${Header()}
        ${children}
      </div>
    `
  }
  return render ();
}

export {
  Layout,
}