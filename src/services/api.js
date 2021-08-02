const API_URL = 'https://min-api.cryptocompare.com/data/top/mktcapfull?limit=10&tsym'

const coinApi = async (params) => {
    let response = await fetch(`${API_URL}=${params ? `${params}` : ''}`)

    let json = await response.json()

    let resultado = json.Data.map((item,key) => ({...item, rank: key + 1}))
    return resultado
    
}

export { coinApi }