import { getDataFirst, getDataSecond, getDataThird } from '../DAL/getData'
import Config from '../DAL/configUrl'

const GET_DATA = 'GET_DATA'
const GET_PAIR = 'GET_PAIR'
const FIRST = 'FIRST'
const SECOND = 'SECOND'
const THIRD = 'THIRD'



let initialState = {
    tableHead: [...Object.keys(Config)],
    pair: [
        'RUB/CUPCAKE',
        'USD/CUPCAKE',
        'EUR/CUPCAKE',
        'RUB/USD',
        'RUB/EUR',
        'EUR/USD'
    ],
    markets: {
        
    },
    cupcakeDefault: 1
}



let tableReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_DATA:
            return {
                ...state
            }
        case FIRST:
            return {
                ...state,
                markets: {
                    ...action.markets
                }
            }
        case GET_PAIR:
            return {
                ...state,
            }
        default:
            return state
    }
}


export const getDataAC = () => {
    return {
        type: GET_DATA
    }
}

const setMarket = (first, second, third) => {
    return {
        type: FIRST,
        markets: {
            first,
            second,
            third
        }
    }
}


export const getDataThunk = () => {
    return async (dispatch) => {
        let first = await getDataFirst()
        let second = await getDataSecond()
        let third = await getDataThird()

        dispatch(setMarket(first.data, second.data, third.data))
    }
}

export default tableReducer