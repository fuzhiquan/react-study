import React, {useState} from 'react'
import {connect} from 'react-redux'
import actions from '../store/actions'

function A(props) {
    const [state, setState] = useState({num: 0})
    function go() {
        props.go('/b')
    }

    return <div>
        <h2>A, {state.num}</h2>
        <button onClick={()=>{debugger;setState({num: state.num+1})}}>+++</button>
        <p>{`你丫当前所在的路由是: ${props.router.location.pathname}`}</p>
        <button onClick={go}>to-b</button>
        <button onClick={props.getdata}>throttle</button>
    </div>
}

export default connect(
    state => state,
    actions
)(A)
