import './scss/app.scss'
import { Router } from './router';

(function init(root){
  console.log('init')
  document.getElementById(root).innerHTML = app();
})('app-root')


function app() {
  return Router();
}