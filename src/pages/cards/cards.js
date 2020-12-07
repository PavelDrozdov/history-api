import { Layout, Search } from '../../components';
import './cards.scss';
import Data from '../../data/data';

import { Card } from '../../components';

function Cards (param, urlParam) {
  const search = urlParam.has('search') ? urlParam.get('search') : '';
  const cards = Data.filter(i => i.first_name.toLocaleLowerCase().indexOf(search.toLocaleLowerCase()) !== -1);

  function render () {
    return Layout(`
      <div class="app-content">
        cards content (${cards.length} / ${Data.length})
        <div>${Search('', {search})}</div>
        <div class="app-cards">
          ${
            cards.map(i => {
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