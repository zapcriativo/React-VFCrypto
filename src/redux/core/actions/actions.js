import types from './types'

export const loadCoins = urlPath => ({
    type: types.LOAD_COINS_SAGA,
    payload: urlPath
})

export const setIsLoadingCoins = () => ({
    type: types.IS_LOADING
})

export const setOrder = (value) => ({
    type: types.SET_ORDER,
    orderData: value,
})
