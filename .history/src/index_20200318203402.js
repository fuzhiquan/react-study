import React from 'react'
import ReactDOM from 'react-dom'
debugger
//<ul className='con' style={{color: 'white', background: 'green'}}>nihao</ul>
const e = React.createElement("ul", {
    className: "con",
    style: {
      color: 'white',
      background: 'green'
    }
  }, "nihao")
console.log(e)
ReactDOM.render(e, document.getElementById('root'))