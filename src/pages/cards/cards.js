import { Layout } from '../../components';
import './cards.scss';
import Data from '../../data/cards.data';

import { Card } from '../../components';

function Cards () {

  function render () {
    return Layout(`
      <div class="app-content">
        cards content
        <div class="app-cards">
          ${
            Data.map(i => {
              return Card('', i);
            }).join('')
          }
        </div>
      </div>
    `)
  }

  return render ();
}

export {
  Cards,
}