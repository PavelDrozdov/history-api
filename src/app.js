import { Main } from './pages';
import './scss/app.scss'

(function init(root, html){
  document.getElementById(root).innerHTML = app();
})('app-root')


function app() {
  return `
    ${Main()}
  `;
}