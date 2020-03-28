const initialState = {number: 0}

export default function(state = initialState, action) {
    switch(action.type) {
        case 'ADD':
            return {number: state.number + action.payload}
        case 'MIN':
            return {number: state.number - action.payload}
        case 'FETCH_SUCCESS':
            return {data: [1,2,3]}
        default:
            return state
    }
}