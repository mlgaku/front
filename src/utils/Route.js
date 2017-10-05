import {forwa, rever} from "../constants/RouteTable"

// 打包数据
export const pack = (type, data = {}) => Object.assign(forwa[type], {
    body: JSON.stringify({...data})
})

// 解包数据
export const unpack = (type, data) => {
    if (type === rever[`${data.mod}_${data.act}`]) {
        return JSON.parse(data.body)
    }
}