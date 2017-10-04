import {
    LOGIN_SHOW, LOGIN_HIDE
} from "../constants/ActionTypes"

// 显示登录模态框
export const show = () => ({type: LOGIN_SHOW})

// 隐藏登录模态框
export const hide = () => ({type: LOGIN_HIDE})