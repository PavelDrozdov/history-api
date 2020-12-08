import './header.scss';
import { OverrideLinks } from '../../router';
import { RouterLink } from '../router-link/router-link';

function Header (children, {...props}= {}) {
  function render () {
    return `
      <Header>
        <div>router SPA</div>
        <nav class="main-nav">
          <ul>
            <li>
              ${RouterLink('', {url:'main', label: 'main', title: 'main | router-spa' })}
            </li>
            <li>
              ${RouterLink('', {url:'cards', label: 'cards', title: 'cards | router-spa' })}
            </li>
          </ul>
        </nav>
      </Header>
    `
  }
  return render ();
}

export {
  Header,
}