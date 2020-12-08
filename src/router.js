import { Main, Cards, FullCard } from './pages';


function navigator(path, param, query) {
  switch(path){
    case 'main':
      return Main(param);
    case 'cards':
      return Cards(param, query);
    case 'full-card':
      return FullCard(param);
    default:
      return Main(param);
  }
}

const Router = () => {
  const [_, path, param] = location.pathname.split('/');
  return navigator(path, param, window.location.search.substring(1));
}

export { Router }
