import {
    LOGIN_SHOW, LOGIN_HIDE, LOGIN_SUBMIT, MESSAGE_POST
} from "../constants/ActionTypes"
import {pack} from "../utils/Route"

// 显示登录模态框
export const show = () => ({type: LOGIN_SHOW})

// 隐藏登录模态框
export const hide = () => ({type: LOGIN_HIDE})

// 提交登录请求
export const submit = (name, password) => {
    return {
        type: MESSAGE_POST,
        data: pack(LOGIN_SUBMIT, {name, password}),
    }
}