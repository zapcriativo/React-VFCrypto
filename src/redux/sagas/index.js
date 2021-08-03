import { coinApi } from '../../services/api'
import types from '../core/actions/types'
import { put, call, takeLatest, all } from 'redux-saga/effects'

function* loadCoinsSaga(action) {
    let jsonResponse = yield call(coinApi, action.payload)
    yield put({ type: types.SET_COINS, payload: jsonResponse })
}

export default function* rootSaga() {
    yield all([
        takeLatest(types.LOAD_COINS_SAGA, loadCoinsSaga)
    ])
}