import React from 'react'
import ReactDOM from 'react-dom'

const e = React.createElement('ul', {className: 'container', data: ['nihao','hello']}, 'wo')

ReactDOM.render(e, document.getElementById('root'))