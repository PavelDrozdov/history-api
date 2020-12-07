import { Layout } from '../../components';
import './full-cards.scss';
import Data from '../../data/cards.data';

import { Card } from '../../components';

function FullCard (param) {

  let [card] = Data.filter(i => i.id === +param)
  function render () {
    return Layout(
      card ? `
      <div class="app-full-card">
        ${Card('', {isFull: true, ...card})}
      </div>
    `:'',)
  }

  return render ();
}

export {
  FullCard,
}