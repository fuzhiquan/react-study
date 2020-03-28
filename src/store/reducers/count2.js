const initialState = {number: 0}

export default function(state = initialState, action) {
    switch(action.type) {
        case 'ADD':
            return {number: state.number + action.payload}
        case 'MIN':
            return {number: state.number - action.payload}
        default:
            return state
    }
}