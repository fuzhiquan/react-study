import { routerActions } from 'connected-react-router'
function add(payload) {
    return {type: 'ADD', payload}
}
function asyncAdd(payload) {
    return function(dispatch, getState)  {
        setTimeout(()  => {
            dispatch({type: 'ADD', payload})
        }, 1000)
    }
}
function min(payload) {
    return {type: 'MIN', payload}
}
function go(path) {
    return routerActions.push(path)
}
function getdata() {
    return {type: 'FETCH_REQUEST'}
}

export default {
    add,
    asyncAdd,
    min,
    go,
    getdata
}