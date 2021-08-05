import extractDISPLAY from '../../util/extractDISPLAY'
import styled from "styled-components";
import { useHistory } from "react-router-dom";

import { faArrowUp, faArrowDown } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function CoinRow({ coin }) {
    const history = useHistory();
    const { PRICE, MKTCAP, CHANGEPCT24HOUR } = extractDISPLAY(coin);
    const { Id, FullName, ImageUrl } = coin.CoinInfo;


    return (
        <DivRowParent onClick={() => history.push({
            pathname: `/details/${Id}`,
            state: { id: Id }
        })}>
            <DivTableRow>
                <BTCName>
                    <span>{coin.rank}</span>
                    <img src={`https://www.cryptocompare.com${ImageUrl}`} alt={FullName}/>
                    {FullName}
                </BTCName>
                <DivPrice>{PRICE}</DivPrice>
                <DivMKTCAP>{MKTCAP}</DivMKTCAP>
                {CHANGEPCT24HOUR >= 0 ? (
                    <DivCHANGEPCT24HOURup>{CHANGEPCT24HOUR} <FontAwesomeIcon icon={faArrowUp} /></DivCHANGEPCT24HOURup>
                ) : (
                    <DivCHANGEPCT24HOURdown>{CHANGEPCT24HOUR} <FontAwesomeIcon icon={faArrowDown} /></DivCHANGEPCT24HOURdown>
                )}
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

const BTCName = styled.div`
    span {
        color: #a8a8a8;
        margin-right: 10px;
        font-size: 12px;
    }
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

const DivCHANGEPCT24HOURup = styled.div`
    display: table-cell;
    vertical-align: middle;
    width: 8%;
    color: #5abf2e;
    font-weight: 600;
    font-size: 12px;
    text-align: right;
`

const DivCHANGEPCT24HOURdown = styled.div`
    display: table-cell;
    vertical-align: middle;
    width: 8%;
    color: red;
    font-weight: 600;
    font-size: 12px;
    text-align: right;
`

export default CoinRow;