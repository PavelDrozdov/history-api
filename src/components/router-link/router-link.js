import './router-link.scss';

function linkAction(e) {
  e.preventDefault();
  const url = e.target.getAttribute('to');
  console.log(url)
  history.pushState(null, null, `/${url}`);
  console.log('== navigate by router-link ' ,url)
  e.stopPropagation();
}
function RouterLink (children, {url, label,  ...props}= {}) {
  const containerSelector = `app-router-link-${url.replace('/', '-')}-${label.replace(' ', '-')}`
  setTimeout((selector) => {
    let container = document.querySelector(`.${selector}`);
    container.removeEventListener('click', linkAction);
    container.addEventListener('click', linkAction, false);
  }, 0, containerSelector);

  function render () {
    return `
    <span  class="${containerSelector}">
      <a href=${url}>
        <span class="router-link" to="${url}">${label}</span>
      </a>
    </span>
    `
  }
  return render ();
}

export {
  RouterLink,
}