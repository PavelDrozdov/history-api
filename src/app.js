import './scss/app.scss'
import { Router } from './router';

window.onload = (e) => {
  console.log('onload')
  app();
};

let oldURL = '';
setInterval(() => {
  if(oldURL !== window.location.href ) {
    console.log('== setInterval init rerender');

    oldURL = window.location.href;
    app();
  }
}, 50);

function app() {
  console.log('== app render');

  document.getElementById('app-root').innerHTML= Router();
}