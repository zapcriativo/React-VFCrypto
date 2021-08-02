const API_URL = 'https://min-api.cryptocompare.com/data/top/mktcapfull?limit=10&tsym'

const coinApi = async (params) => {
    let response = await fetch(`${API_URL}=${params ? `${params}` : ''}`)
    let json = await response.json()
    return json
}

export { coinApi }