import { Main, Cards, FullCard } from './pages';


function navigator(path, param, urlParams) {
  switch(path){
    case 'main':
      return Main(param);
    case 'cards':
      return Cards(param, urlParams);
    case 'full-card':
      return FullCard(param);
    default:
      return Main(param);
  }
}

const Router = (e) => {
  const [hash] = location.hash.split('?')
  const [path, param] = hash.replace('#', '').split('/')
  const urlParams = new URLSearchParams(window.location.search);
  return navigator(path, param, urlParams);
}

export { Router }