import React from './react/index'
import ReactDOM from 'react-dom'

//<ul className='con' style={{color: 'white', background: 'green'}}>nihao</ul>
const e = React.createElement("ul", {
    className: "con",
    style: {
      color: 'white',
      background: 'green'
    }
  }, "nihao")

ReactDOM.render(e, document.getElementById('root'))