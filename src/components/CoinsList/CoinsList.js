import React, { useEffect } from 'react'
import styled from "styled-components";
import { setIsLoadingCoins, loadCoins, setOrder } from '../../redux/core/actions/actions'
import { connect } from 'react-redux'
import { bindActionCreators } from "redux"
import CoinRow from './CoinRow'
import CoinRowLoading from './CoinRowLoading'
import Columns from './Columns'
import OrderElements from './orderElements'

const CoinsList = (props) => {
    useEffect(() => {
        props.setIsLoadingCoins()
        props.loadCoins('USD')
    }, [])


    // DISPATCH NEW SORT ORDER COLUMN
    const sortOrder = (value) => {
        if (value != props.orderColum) {
            props.setOrder({ orderColumn: value, orderBy: 'ASC' })
        } else {
            props.setOrder({ orderColumn: value, orderBy: props.orderBy == 'ASC' ? 'DESC' : 'ASC' })
        }
    }

    return props.isLoading ? (
        <DivTable>
            <DivRowParent>
                <DivTableRow>
                    {Columns.map(column => (<DivTableCell>{column.name}</DivTableCell>))}
                </DivTableRow>
            </DivRowParent>
            {Array(10).fill(1).map((el, i) => <CoinRowLoading key={i} />)}
        </DivTable>
    ) : (
        props.coins ?
            <DivTable>
                <DivRowParent>
                    <DivTableRow>
                        {Columns.map(column => (<DivTableCell onClick={() => sortOrder(column.id)} >{column.name}</DivTableCell>))}
                    </DivTableRow>
                </DivRowParent>
                {props.coins.map((coin, key) => <CoinRow key={key} coin={coin} />)}
            </DivTable>
            : "nada"
    )
}


const mapStateToProps = state => ({
    currency: state.coins.currency,
    orderColum: state.coins.orderColum,
    orderBy: state.coins.orderBy,
    coins: OrderElements(state.coins.orderColum, state.coins.orderBy, state.coins.coins.Data),
    isLoading: state.coins.isLoading
})

const mapDispatchToProps = dispatch => bindActionCreators({
    setIsLoadingCoins, loadCoins, setOrder
}, dispatch)

// styles 
const DivTable = styled.div`
	display: table;
	width: 100%;
`

const DivRowParent = styled.div`
    width: 100%;
    display: table;
    background-color: #EBF0F4;
    border-top: 1px solid #d7dce0;
    border-bottom: 1px solid #d7dce0;
    padding: 10px 0px 10px 0px;
`

const DivTableRow = styled.div`
    width: 80%;
	display: table;
    text-align: left;
    margin: 0 auto;
    cursor: pointer;

    div:first-child {
        width: 21%;
    }

    div:nth-child(2) {
        width: 20%;
    } 

    div:nth-child(3) {
        width: 16%;
    } 

    div:last-child {
        width: 8%;
        text-align: right;
    }
`

const DivTableCell = styled.div`
    display: table-cell;
    font-size: 12px;
    font-weight: 600;
    width: 20%;
    color: #a1b3c2;
`

export default connect(mapStateToProps, mapDispatchToProps)(CoinsList)