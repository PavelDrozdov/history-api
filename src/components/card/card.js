import './card.scss';

function Card (children, {isFull = false, ...props}= {}) {
  function render () {
    return `
      <div data-id=${props.id} class="app-card">
        <div><span class="app-label">FirstName:</span> ${props.first_name}</div>
        <div><span class="app-label">Company:</span> ${props.compay}</div>
        ${ isFull ? `<div>${props.last_name}</div>` : ''}
        ${ isFull ? `<div>${props.email}</div>` : ''}
      </div>
    `
  }
  return render ();
}

export {
  Card,
}