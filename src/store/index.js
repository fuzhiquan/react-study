import { createStore, compose } from 'redux'
import reducers from './reducers'
import { routerMiddleware } from 'connected-react-router'
import history from './history'
import createSagaMiddleware from 'redux-saga'
import rootSaga from './saga'
const sagaMiddlerware = createSagaMiddleware()

function logger({dispatch, getState}) {
    return function(next) {
        return function(action) {
            console.log('派发了：', action.type)
            next(action)
        }
    }
}
function thunk({dispatch, getState}) {
    return function(next) {
        return function(action) {
            if(typeof action === 'function') {
                action(dispatch, getState)
            }else {
                next(action)
            }
        }
    }
}

function applyMiddleware(...middlewares) {
    return function(createStore) {
        return function(reducers) {
            const store = createStore(reducers)

            const chain = middlewares.map(middleware => middleware({
                getState: store.getState,
                dispatch: action => dispatch(action)
            }))

            const dispatch = compose(...chain)(store.dispatch)
            return {
                ...store,
                dispatch
            }
        }
    }
}

const store = applyMiddleware(sagaMiddlerware, thunk, logger, routerMiddleware(history))(createStore)(reducers)
sagaMiddlerware.run(rootSaga)
export default store