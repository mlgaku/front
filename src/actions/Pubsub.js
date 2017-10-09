import {PUBSUB_ADD, PUBSUB_REMOVE, MESSAGE_POST} from "../constants/ActionTypes"
import {pack} from "../utils/Route"

// 添加订阅
export const add = (id, body = null) => ({
    type: PUBSUB_ADD,
    data: pack(id, body)
})

// 注册订阅
export const reg = (s) => ({
    type: MESSAGE_POST,
    data: pack(PUBSUB_ADD, s)
})

// 取消订阅
export const remove = (id) => ({
    type: MESSAGE_POST,
    data: pack(PUBSUB_REMOVE, pack(id))
})