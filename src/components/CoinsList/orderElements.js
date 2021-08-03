//sort by name
const nameSort = (a, b) => a.CoinInfo.FullName.localeCompare(b.CoinInfo.FullName);
//sort by price
const priceSort = (a, b) => getKey(b.RAW).PRICE - getKey(a.RAW).PRICE;
//sort market
const marketCapSort = (a, b) => getKey(b.RAW).MKTCAP - getKey(a.RAW).MKTCAP;
//sorts diff hour
const hourSort = (a, b) => getKey(b.RAW).CHANGEPCT24HOUR - getKey(a.RAW).CHANGEPCT24HOUR;

//get object from json
export const getKey = (obj) => {
  if (!!obj) return obj[Object.keys(obj)[0]];
}

const OrderElements = (sortColumn, orderBy, data) => {
  switch (sortColumn) {
    case "crypto":
      return orderBy === 'ASC' ? data.sort(nameSort) : data.sort(nameSort).reverse();
    case "price":
      return orderBy === 'ASC' ? data.sort(priceSort) : data.sort(priceSort).reverse();
    case "marketCap":
      return orderBy === 'ASC' ? data.sort(marketCapSort) : data.sort(marketCapSort).reverse();
    case "24h":
      return orderBy === 'ASC' ? data.sort(hourSort) : data.sort(hourSort).reverse();
    default:
      return data;
  }
};

export default OrderElements;
