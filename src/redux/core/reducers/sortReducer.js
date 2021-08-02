import types from '../actions/types'

const STATE = {
    orderColum: 'crypto',
    orderBy: 'ASC'
}

export default (state = STATE, action) => {
    switch (action.type) {
        case types.SET_ORDER:
            return { ...state, orderColum: action.orderData.orderColumn, orderBy: action.orderData.orderBy }
        default:
            return state
    }
}