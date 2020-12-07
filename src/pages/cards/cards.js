import { Layout } from '../../components';
import './cards.scss';

function Cards () {

  function render () {
    return Layout(`
      <div class="app-content">
        cards content
      </div>
    `)
  }

  return render ();
}

export {
  Cards,
}