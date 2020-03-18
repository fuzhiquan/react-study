import React from 'react'
import ReactDOM from 'react-dom'

//const e = React.createElement('ul', {className: 'container'}, 'wo')
const e = <ul className='con' style={{color: 'pink', background: 'green'}}>nihao</ul>
ReactDOM.render(e, document.getElementById('root'))