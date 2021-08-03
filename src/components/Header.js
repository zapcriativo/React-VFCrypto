import React, { useState } from 'react';
import styled from "styled-components";
import { connect } from 'react-redux'
import { bindActionCreators } from "redux"
import { setIsLoadingCoins, loadCoins } from '../redux/core/actions/actions'
import currencies from '../util/currencies'
import { useLocation } from 'react-router-dom'

import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';

import HeaderBack from './HeaderBack'

const Header = (props) => {

    const location = useLocation();
    const [CurrencyState, setCurrencyState] = useState(props.currency)

    const changeCurrency = (value) => {
        setCurrencyState(value)
        props.setIsLoadingCoins()
        props.loadCoins(value)
    }

    return (
        <BoxContainer>
            <HeaderContent>
                {location.pathname === '/' ? (
                    <LogoHome>VFCrypto</LogoHome>
                ) : (
                    <HeaderBack cripto={props.coins.find(item => item.CoinInfo.Id === location.state.id)} />
                )}

                <RightBox>
                    <Select value={CurrencyState} onChange={(e) => changeCurrency(e.target.value)}> 
                        {currencies.map((curr, i) => <MenuItem key={i} value={curr}>{curr}</MenuItem>)}
                    </Select>
                </RightBox>
            </HeaderContent>
        </BoxContainer>
    );
}



const BoxContainer = styled.div`  
    display: flex;
    flexDirection: 'row';
    justify-content: center;
`

const HeaderContent = styled.div`
    width: 90%;
    display: flex;
    flexDirection: 'row';
    justify-content: space-between;
    padding: 20px;
`

const RightBox = styled.div`
    align-items: flex-end;
    align-self: center;

`

const LogoHome = styled.div`
    font-size: 30px;
    color: #8f8f8f
`

const mapStateToProps = state => ({
    coins: state.coins.coins,
    currency: state.coins.currency,
    orderColum: state.coins.orderColum
})

const mapDispatchToProps = dispatch => bindActionCreators({
    setIsLoadingCoins, loadCoins
}, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(Header)
