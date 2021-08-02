import types from '../actions/types'

const STATE = {
    coins: null,
    isLoading: true,
    currency: 'USD',
    orderColum: 'crypto',
    orderBy: 'ASC'
}

export default (state = STATE, action) => {

    console.log('state chagendo do coins')
    console.log(state)

    switch (action.type) {
        case types.SET_COINS:
            return { coins: action.payload, isLoading: false, }
        case types.IS_LOADING:
            return { ...state, isLoading: true }
        case types.SET_ORDER:
            return { ...state, orderColum: action.orderData.orderColumn, orderBy: action.orderData.orderBy }
        default:
            return state
    }
}