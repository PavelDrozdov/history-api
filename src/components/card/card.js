import './card.scss';
import {RouterLink} from '../router-link/router-link';

function Card (children, {isFull = false, ...props}= {}) {
  
  function render () {
    return `
      <div data-id=${props.id} class="app-card">
        <div><span class="app-label">FirstName:</span> ${props.first_name}</div>
        ${ isFull ? `<div><span class="app-label">Last name: </span>${props.last_name}</div>` : ''}
        <div><span class="app-label">Company:</span> ${props.company}</div>
        ${ isFull ? `<div><span class="app-label">Email: </span>${props.email}</div>` : ''}
        <div class="link-nav">
          ${ !isFull
            ? RouterLink('', {url: `full-card/${props.id}`, label: 'Full info' })
            : RouterLink('', {url: `cards`, label: 'Back' })
          }
        </div>
      </div>
    `
  }
  return render ();
}

export {
  Card,
}