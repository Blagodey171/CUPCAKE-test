import axios from 'axios'
import {config} from './configUrl'

export let getDataFirst = async () => {
        return await axios({
        method: 'get',
        url: config.First.url,
        headers: {'Content-Type': 'application/json'},
    })
}
export let getDataSecond = async () => {
        return await axios({
        method: 'get',
        url: config.Second.url,
        headers: {'Content-Type': 'application/json'},
    })
}
export let getDataThird = async () => {
        return await axios({
        method: 'get',
        url: config.Third.url,
        headers: {'Content-Type': 'application/json'},
    })
}







