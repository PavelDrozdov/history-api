import './card.scss';

function Card (children, {isFull = false, ...props}= {}) {
  function render () {
    return `
      <div data-id=${props.id} class="app-card">
        <div><span class="app-label">FirstName:</span> ${props.first_name}</div>
        ${ isFull ? `<div><span class="app-label">Last name: </span>${props.last_name}</div>` : ''}
        <div><span class="app-label">Company:</span> ${props.compay}</div>
        ${ isFull ? `<div><span class="app-label">Email: </span>${props.email}</div>` : ''}
        <div>${ !isFull ? `<a href="#full-card/${props.id}">More</a>` : `<a href="#cards">Back</a>`}</div>
      </div>
    `
  }
  return render ();
}

export {
  Card,
}