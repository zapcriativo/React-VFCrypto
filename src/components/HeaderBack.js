import styled from "styled-components";
import { useHistory } from "react-router-dom";
import extractDISPLAY from '../util/extractDISPLAY'

import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const HeaderBack = (props) => {
    const history = useHistory();
    const { Id, FullName, Internal, ImageUrl } = props.cripto.CoinInfo;
    const { PRICE } = extractDISPLAY(props.cripto);

    console.log(props)

    return (
        <Container>
            <BackButton onClick={() => history.push(`/`)}>
                <FontAwesomeIcon icon={faArrowLeft} />
            </BackButton>
            <img src={`https://www.cryptocompare.com${ImageUrl}`} />
            <CryptoName>
                {FullName}
                <p>
                    {Internal}
                </p>
            </CryptoName>
            <Price>
                {PRICE}
            </Price>
        </Container>
    )
}

const BackButton = styled.div`
    display: flex;
    cursor: pointer;
    width: 40px;
    height: 40px;
    border-radius: 100px;
    background-color: #e8f2fd;
    align-items: center;
    justify-content: center;
    color: #11233d;
    &:hover {
        background-color: #d3dfed
    }
`

const Container = styled.div`
    display: flex;
    flexDirection: 'row';
    align-items: center;
    img {
        margin-left: 20px;
        margin-right: 10px;
        width: 70px;
        height: 70px;
    }
`

const CryptoName = styled.div`
    font-size: 22px;
    p {
        font-size: 15px;
        margin-top: -5px;
        color: #a8a8a8
    }
`

const Price = styled.div`
    font-size: 25px;
    margin-left: 40px;
    &:first-letter {
        color: #a8a8a8
    }
`

export default HeaderBack