import './scss/app.scss'
import { Router } from './router';

window.onload = (e) => {
  console.log('onload')
  app(e)
};

window.onhashchange = (e) => {
  console.log('onhashchange')
  app(e);
};

function app(e) {
  document.getElementById('app-root').innerHTML= Router(e);
}