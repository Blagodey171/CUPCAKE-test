import axios from 'axios'
import Config from './configUrl'

export let getDataFirst = async () => {
        return await axios({
        method: 'get',
        url: Config.First.url,
        headers: {'Content-Type': 'application/json'},
    })
}
export let getDataSecond = async () => {
        return await axios({
        method: 'get',
        url: Config.Second.url,
        headers: {'Content-Type': 'application/json'},
    })
}
export let getDataThird = async () => {
        return await axios({
        method: 'get',
        url: Config.Third.url,
        headers: {'Content-Type': 'application/json'},
    })
}







