import { Main, Cards, FullCard } from './pages';


function navigator(path, param) {
  switch(path){
    case 'main':
      return Main(param);
    case 'cards':
      return Cards(param);
    case 'full-card':
      return FullCard(param);
    default:
      return Main(param);
  }
}

const Router = (e) => {
  let [path, param] = location.hash.replace('#', '').split('/')
  console.log(path, param)
  return navigator(path, param);
}

export { Router }