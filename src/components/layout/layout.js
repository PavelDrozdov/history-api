import { Header } from '../header/header';

function Layout (children, {...props}= {}) {
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