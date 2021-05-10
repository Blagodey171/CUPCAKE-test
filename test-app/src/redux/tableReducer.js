import { getDataFirst, getDataSecond, getDataThird } from '../DAL/getData'
import {config} from '../DAL/configUrl'

const GET_DATA = 'GET_DATA'
const GET_PAIR = 'GET_PAIR'
const SET_MARKETS = 'SET_MARKETS'

let initialState = {
    tableHead: [...Object.keys(config)],
    pair: [
        'RUB/CUPCAKE',
        'USD/CUPCAKE',
        'EUR/CUPCAKE',
        'RUB/USD',
        'RUB/EUR',
        'EUR/USD'
    ],
    markets: {},
    cupcakeDefault: 1
}



let tableReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_DATA:
            return {
                ...state
            }
        case SET_MARKETS:
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

const setMarketsAC = (first, second, third) => {
    return {
        type: SET_MARKETS,
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
        dispatch(setMarketsAC(first.data, second.data, third.data))
    }
}

export default tableReducer