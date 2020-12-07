import { Main, Cards } from './pages';


function navigator(path) {
  switch(path){
    case 'main':
      return Main();
    case 'cards':
      return Cards();
    default:
      return Main();
  }
}

const Router = (e) => {
  return navigator(location.hash.replace('#', ''));
}

export { Router }