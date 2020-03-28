import { takeEvery, takeLeading,  delay, put } from 'redux-saga/effects'

export default function* () {
    yield takeLeading('FETCH_REQUEST', request)
}

function* request() {
    console.log('fetching...')
    yield delay(2000)
    yield put({type: 'FETCH_SUCCESS'})
}