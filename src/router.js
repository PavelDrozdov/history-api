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

const Router = () => {
  const url = new URLSearchParams(location.pathname);
  const [_, path, param] = location.pathname.split('/');
  console.log(path, param, url)
  return navigator(path, param, url);
}

export { Router }
