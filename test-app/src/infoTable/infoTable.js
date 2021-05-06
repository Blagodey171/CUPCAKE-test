import React, { useEffect } from 'react'
import './infoTable.css'
import { connect } from 'react-redux';
import { compose } from 'redux';
import { getDataThunk } from '../redux/tableReducer.js'

const InfoTable = (props) => {
    const createTh = (tableHead) => {
        return tableHead.map(el => <th key={el}>{el}</th>)
    }

    const createTr = (pair) => {
        let trArray = []
        pair.forEach(el => {
            const basic = el.split('/')[0]
            const quoted = el.split('/')[1]
            let tdArray = []
            const validate = (key, quoted) => {
                if (quoted === 'CUPCAKE') {
                    return 1
                } else {
                   return props.data.markets[key].rates[quoted]
                }
            }
            for (let key in props.data.markets) {
                const first = props.data.markets[key].rates[basic]
                const second = validate(key, quoted)

                const rate = (first / second).toFixed(3)
                tdArray.push(<td key={rate}>{rate}</td>)
            }
            trArray.push(
                <tr key={el}>
                    <td>{el}</td>
                    {tdArray}
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