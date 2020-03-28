import React from './react'
import {HashRouter as Router, Route, Link} from 'react-router-dom'
import { ConnectedRouter } from 'connected-react-router'
import history from './store/history'
import A from './pages/a'
import B from './pages/b'
export default function() {
    return <ConnectedRouter history={history}>
        <Link to='/'>home</Link>
        <Link to='/a'>A</Link>
        <Link to='/b'>B</Link>
        <Route exact path='/' component={null}/>
        <Route path='/a' component={A}/>
        <Route path='/b' component={B}/>
    </ConnectedRouter>
}