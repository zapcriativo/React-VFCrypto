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
                    RANK <span>1</span>
                </Colunms>

                <Colunms>
                    <div>
                        <Widget title={'MARKET CAP'} value={MKTCAP.slice(0, -1)} isPrice={true} isLoading={props.isLoading} />
                        <Widget title={'CIRCULATING SUPPLY'} value={SUPPLY.substring(1)}  isLoading={props.isLoading} />
                    </div>
                </Colunms>

                <Colunms>
                    <div>
                        <Widget title={'24H VOLUME'} value={TOTALVOLUME24HTO.slice(0, -1)} isPrice={true}  isLoading={props.isLoading} />
                        <Widget title={'TOTAL SUPPLY'} value={SUPPLY.substring(1)}  isLoading={props.isLoading} />
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
`


const mapStateToProps = (state, props) => ({
    coin: state.coins.coins.Data.find(item => item.CoinInfo.Id == props.match.params.id),
    isLoading: state.coins.isLoading
})

export default connect(mapStateToProps)(Details);
