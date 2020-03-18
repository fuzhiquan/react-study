import React from 'react'
import ReactDOM from './react-dom'

//<ul className='con' style={{color: 'white', background: 'green'}}>nihao</ul>
React.createElement("ul", {
    className: "con",
    style: {
      color: 'white',
      background: 'green'
    }
  }, "nihao", React.createElement("p", null, "momo"))
console.log(e)

ReactDOM.render(e, document.getElementById('root'))