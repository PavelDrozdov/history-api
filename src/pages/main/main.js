import { Layout } from '../../components';
import './main.scss';

function Main () {

  function render () {
    return Layout(`
      <div class="app-content">
        main content
      </div>
    `)
  }

  return render ();
}

export {
  Main,
}