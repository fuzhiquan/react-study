import React from './react'
import ReactDOM from './react-dom'

function test() {
    alert(0)
}
//const e = <ul className='con' style={{color: 'white', background: 'green'}} onClick={test}>nihao</ul>
const e = React.createElement("ul", {
    className: "con",
    style: {
      color: 'white',
      background: 'green'
    },
    onClick: test
  }, "nihao")

console.log(e)

ReactDOM.render(e, document.getElementById('root'))