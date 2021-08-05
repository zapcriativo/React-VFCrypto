/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from "redux"
import { setIsLoadingCoins, loadCoins, setOrder } from './redux/core/actions/actions'
import { createSelector } from 'reselect'
import Spinner from 'react-spinner-material';

import { BrowserRouter, Route, Switch } from 'react-router-dom'

import Header from './components/Header'
import { Home } from "./pages/Home";
import Details from "./pages/Details";

import styled from "styled-components";

const DivLoading = styled.div`
  height: 100vh; 
  display: flex;
  justify-content: center;
  align-items: center;
`

const App = (props) => {

  useEffect(() => {
    const loadCoinsSaga = () => {
      props.setIsLoadingCoins()
      props.loadCoins('USD')
    }
    let SagaInterval
    // DEBOUNCE 
    loadCoinsSaga()
    clearInterval(SagaInterval)
    SagaInterval = setInterval(() => loadCoinsSaga(), 60000)
    return function cleanup() {
      clearInterval(SagaInterval)
    };
  }, [])

  return props.coins.length > 0 ? (
    <BrowserRouter>
      <Header />
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/details/:id" component={Details} />
      </Switch>
    </BrowserRouter>
  ) : (
    <DivLoading>
      <Spinner size={80} spinnerColor={"#dadada"} spinnerWidth={2} visible={true} />
    </DivLoading>

  )
}

// RESELECT FOR COINS LIST
const coinsSelectorFunction = createSelector(
  state => state.coins.coins,
  (coins) => {
    return coins
  }
)


const mapStateToProps = state => ({
  currency: state.coins.currency,
  orderColum: state.coins.orderColum,
  orderBy: state.coins.orderBy,
  coins: coinsSelectorFunction(state),
  isLoading: state.coins.isLoading
})

const mapDispatchToProps = dispatch => bindActionCreators({
  setIsLoadingCoins, loadCoins, setOrder
}, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(App)