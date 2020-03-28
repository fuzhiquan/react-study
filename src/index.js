import React from './react'
import ReactDOM from 'react-dom'
import {Provider} from 'react-redux'
import store from './store'
import App from './app'
import diff from './react/diff'

// ReactDOM.render(<Provider store={store}>
//   <App/>
// </Provider>, document.getElementById('root'))


const dom1 = React.createElement('div', {className: 'nav'},
    [React.createElement('span', {className: 'sp1'}, [1]),
    React.createElement('span', {className: 'sp2'}, [2]),
    React.createElement('span', {className: 'sp3'}, [3])]
)
const dom2 = React.createElement('div', {className: 'nav2'},
    [React.createElement('span', {className: 'sp1'}, [1]),
    React.createElement('span', {className: 'sp3'}, [3])]
)

const patch = diff(dom1, dom2)
console.log(patch)