import extractDISPLAY from '../../util/extractDISPLAY'
import styled from "styled-components";
import { useHistory } from "react-router-dom";

function CoinRow({ coin }) {
    const history = useHistory();
    const { PRICE, MKTCAP, CHANGEPCT24HOUR } = extractDISPLAY(coin);
    const { Id, FullName, ImageUrl } = coin.CoinInfo;

    return (
        <DivRowParent onClick={() => history.push(`/details/${Id}`)}>
            <DivTableRow>
                <DivTableCell>
                    <img src={`https://www.cryptocompare.com${ImageUrl}`} />
                    {FullName}
                </DivTableCell>
                <DivPrice>{PRICE}</DivPrice>
                <DivMKTCAP>{MKTCAP}</DivMKTCAP>
                <DivCHANGEPCT24HOUR>{CHANGEPCT24HOUR}</DivCHANGEPCT24HOUR>
            </DivTableRow>
        </DivRowParent>
    );
}

const DivRowParent = styled.div`
    width: 100%;
    display: table;
    padding: 15px 0px 15px 0px;
    border-bottom: 1px solid #ebeff2;
    cursor: pointer;
    &:hover { 
        background-color: #f5f8fa
    }
`

const DivTableRow = styled.div`
    width: 80%;
	display: table;
    text-align: left;
    margin: 0 auto;
`

const DivTableCell = styled.div`
    display: table-cell;
    vertical-align: middle;
    width: 16%;
    img {
        width: 25px;
        height: 25px;
        margin-right: 10px;
        margin-bottom: -7px;
    }
`

const DivPrice = styled.div`
    display: table-cell;
    vertical-align: middle;
    width: 15%;
    color: #595959;
    &:first-letter {
        color: #a8a8a8
    }
`


const DivMKTCAP = styled.div`
    display: table-cell;
    vertical-align: middle;
    width: 10%;
    font-size: 15px;
    color: #595959;
    &:first-letter {
        color: #a8a8a8
    }
`

const DivCHANGEPCT24HOUR = styled.div`
    display: table-cell;
    vertical-align: middle;
    width: 8%;
    color: #5abf2e;
    font-weight: 600;
    font-size: 12px;
    text-align: right;
`

export default CoinRow;