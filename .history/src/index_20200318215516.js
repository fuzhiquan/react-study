import React from 'react'
import ReactDOM from './react-dom'

//<ul className='con' style={{color: 'white', background: 'green'}}>nihao</ul>
const e = React.createElement("ul", {
    className: "con",
    style: {
      color: 'white',
      background: 'green'
    }
  }, "nihao", React.createElement("button", { onClick: "alert(0)" }, "momo"))

console.log(e)

ReactDOM.render(e, document.getElementById('root'))