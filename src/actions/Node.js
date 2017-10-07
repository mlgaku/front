import {
    NODE_SHOW, NODE_HIDE,
    NODE_ADD, MESSAGE_POST
} from "../constants/ActionTypes"
import {pack} from "../utils/Route"

// 显示添加节点
export const show = (parent = null) => ({type: NODE_SHOW, parent})

// 隐藏添加节点
export const hide = () => ({type: NODE_HIDE})

// 添加节点
export const add = (name, title, parent = null) => {
    return {
        type: MESSAGE_POST,
        data: pack(NODE_ADD, {name, title, parent}),
    }
}