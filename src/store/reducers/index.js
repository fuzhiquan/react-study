import {combineReducers} from 'redux'
import { connectRouter } from 'connected-react-router'
import history from '../history'
import count1 from './count1'
import count2 from './count2'

export default combineReducers({
    count1,
    count2,
    router: connectRouter(history)
})
