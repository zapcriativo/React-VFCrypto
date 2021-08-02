import styled from "styled-components";

import { connect } from 'react-redux'
import { bindActionCreators } from "redux"

import { setIsLoadingCoins, loadCoins } from '../redux/core/actions/actions'
import currencies from '../util/currencies'

import { useLocation } from 'react-router-dom'

const Header = (props) => {
    const location = useLocation();
    console.log(location.pathname);

    const changeCurrency = (value) => {
        props.setIsLoadingCoins()
        props.loadCoins(value)
    }

    return (
        <BoxContainer>
            <HeaderContent>
                {location.pathname == '/' ? (
                    <LogoHome>VFCrypto</LogoHome>
                ) : (
                    <div>
                        Interna - {props.orderColum}
                    </div>
                )}

                <RightBox>
                    <select value={props.currency} onChange={(e) => changeCurrency(e.target.value)}>
                        {currencies.map((curr, i) => <option key={i} value={curr}>{curr}</option>)}
                    </select>
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
    width: 80%;
    display: flex;
    flexDirection: 'row';
    justify-content: space-between;
    padding: 20px;
`

const RightBox = styled.div`
    align-items: flex-end;
`

const LogoHome = styled.div`
    font-size: 30px;
    color: #8f8f8f
`

const mapStateToProps = state => ({
    currency: state.coins.currency,
    orderColum: state.coins.orderColum
})

const mapDispatchToProps = dispatch => bindActionCreators({
    setIsLoadingCoins, loadCoins
}, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(Header)
