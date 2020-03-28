import React from 'react'
import {connect} from 'react-redux'
import actions from '../store/actions'

function B(props) {
    function go() {
        props.go('/a')
    }
    return <div>
        <h2>B</h2>
        <button onClick={go}>to-a</button>
    </div>
}

export default connect(
    state => state,
    actions
)(B)