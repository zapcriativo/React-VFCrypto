/* eslint-disable import/no-anonymous-default-export */
import types from '../actions/types'

const STATE = {
    coins: {},
    isLoading: true,
    currency: 'USD',
    orderColum: 'crypto',
    orderBy: 'ASC'
}

export default (state = STATE, action) => {
    switch (action.type) {
        case types.SET_COINS:
            return { ...state, coins: action.payload, isLoading: false, }
        case types.IS_LOADING:
            return { ...state, isLoading: true }
        case types.SET_ORDER:
            return { ...state, orderColum: action.orderData.orderColumn, orderBy: action.orderData.orderBy }
        default:
            return state
    }
}