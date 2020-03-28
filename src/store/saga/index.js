import { fork } from 'redux-saga/effects'
import count1 from './count1'
import count2 from './count2'

export default function* rootSaga() {
    yield fork (count1)
    yield fork (count2)
}