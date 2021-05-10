import React, { useEffect } from 'react'
import './infoTable.css'
import { connect } from 'react-redux';
import { compose } from 'redux';
import { getDataThunk } from '../redux/tableReducer.js'

const InfoTable = (props) => {
    const validateQuotedCurrency = (market, quotedCurrency) => {
        if (quotedCurrency === 'CUPCAKE') {
            return props.data.cupcakeDefault
        } else {
           return props.data.markets[market].rates[quotedCurrency]
        }
    }

    const createTh = (tableHead) => {
        return tableHead.map(el => <th key={el}>{el}</th>)
    }
    const createTd = (basic, quoted) => {
        let tdArray = []
        for (let key in props.data.markets) {
            const basicCurrencyValue = props.data.markets[key].rates[basic]
            const quotedCurrencyValue = validateQuotedCurrency(key, quoted)

            const rate = (basicCurrencyValue / quotedCurrencyValue).toFixed(3)
            tdArray.push(<td key={rate}>{rate}</td>)
        }
        return tdArray
    }

    const createTr = (pair) => {
        let trArray = []
        pair.forEach(el => {
            const basicCurrencyName = el.split('/')[0]
            const quotedCurrencyName = el.split('/')[1]
            trArray.push(
                <tr key={el}>
                    <td>{el}</td>
                    {createTd(basicCurrencyName, quotedCurrencyName)}
                </tr>)
        })
        return trArray
    }
    
    useEffect(() => {
        props.getDataThunk()
    })

    return (
        <section className='info-table-container'>
            <table className='info-table'>
                <thead>
                    <tr >
                        {createTh(props.data.tableHead)}
                    </tr>
                </thead>
                <tbody>
                    {createTr(props.data.pair)}
                </tbody>
            </table>
        </section>
    )
}

const mapStateToProps = (state) => {
    return {
        data: state.tableReducer
    }
}

export default compose(
    connect(mapStateToProps, {getDataThunk})
)(InfoTable)