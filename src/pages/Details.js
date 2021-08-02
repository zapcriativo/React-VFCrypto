import React from 'react'
import { connect } from 'react-redux'
import styled from "styled-components";
import extractDISPLAY from '../util/extractDISPLAY'

import Widget from '../components/DetailComponent/Widget'

const Details = (props) => {
    const { SUPPLY, MKTCAP, TOTALVOLUME24HTO } = extractDISPLAY(props.coin);
    return (
        <MainBox>
            <Content>
                <Colunms>
                    <Rank>
                        RANK <span>{props.coin.rank}</span>
                    </Rank>
                </Colunms>

                <Colunms>
                    <div>
                        <Widget title={'MARKET CAP'} value={MKTCAP.slice(0, -1)} isPrice={true} isLoading={props.isLoading} />
                        <Widget title={'CIRCULATING SUPPLY'} value={SUPPLY.substring(1)} isLoading={props.isLoading} />
                    </div>
                </Colunms>

                <Colunms>
                    <div>
                        <Widget title={'24H VOLUME'} value={TOTALVOLUME24HTO.slice(0, -1)} isPrice={true} isLoading={props.isLoading} />
                        <Widget title={'TOTAL SUPPLY'} value={SUPPLY.substring(1)} isLoading={props.isLoading} />
                    </div>
                </Colunms>

            </Content>
        </MainBox>
    )
}


//styles
const MainBox = styled.div`
    display: flex;
    flexDirection: 'row';
    justify-content: center;
    padding: 20px;
    height: 100vh;
    background-image: linear-gradient(to right bottom, #11233d, #132642, #152a47, #172d4c, #193151);
`

const Content = styled.div`
    width: 80%;
    display: flex;
    flexDirection: 'row';
    justify-content: space-between;
`
const Colunms = styled.div`
    color: #fff;
    padding-top: 40px;
`

const Rank = styled.div`
    margin-top: 60px;
    color: #fff;
    display: flex;
    flexDirection: 'row';
    align-items: center;
    font-size: 18px;
    span {
        display: flex;
        cursor: pointer;
        width: 60px;
        height: 60px;
        border-radius: 100px;
        background-color: #21375a;
        align-items: center;
        justify-content: center;
        color: #7299cf;
        margin-left: 20px;
        font-size: 22px;
    }
`


const mapStateToProps = (state, props) => ({
    coin: state.coins.coins.find(item => item.CoinInfo.Id == props.match.params.id),
    isLoading: state.coins.isLoading
})

export default connect(mapStateToProps)(Details);
