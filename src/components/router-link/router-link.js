import './router-link.scss';

function linkAction(title) {
  return (e) => {
    if (title !== '') document.title = title;
    e.preventDefault();
    const url = e.target.getAttribute('to');
    history.pushState(null, null, `/${url}`);
    console.log('== navigate by router-link ' ,url)
    e.stopPropagation();
  }
}
function RouterLink (children, {url, label, title = '',  ...props}= {}) {
  const containerSelector = `app-router-link-${url.replace('/', '-')}-${label.replace(' ', '-')}`
  setTimeout((selector, tit) => {
    let container = document.querySelector(`.${selector}`);
    container.addEventListener('click', linkAction(tit), false);
  }, 0, containerSelector, title);

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