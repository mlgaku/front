import {
    NODE_SHOW_CHILD, NODE_HIDE_CHILD,
    NODE_SHOW_PARENT, NODE_HIDE_PARENT,
    LOGIN_SUBMIT, MESSAGE_POST
} from "../constants/ActionTypes"
import {pack} from "../utils/Route"

// 显示子节点模态框
export const showChild = () => ({type: NODE_SHOW_CHILD})
// 隐藏子节点模态框
export const hideChild = () => ({type: NODE_HIDE_CHILD})

// 显示父节点模态框
export const showParent = () => ({type: NODE_SHOW_PARENT})
// 隐藏父节点模态框
export const hideParent = () => ({type: NODE_HIDE_PARENT})

// 提交登录请求
export const submit = (name, password) => {
    return {
        type: MESSAGE_POST,
        data: pack(LOGIN_SUBMIT, {name, password}),
    }
}