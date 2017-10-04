import {
    REGISTER_SHOW, REGISTER_HIDE
} from "./../constants/ActionTypes"

// 显示注册模态框
export const show = () => ({type: REGISTER_SHOW})

// 隐藏注册模态框
export const hide = () => ({type: REGISTER_HIDE})