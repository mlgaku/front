import {
    REGISTER_SHOW, REGISTER_HIDE, REGISTER_SUBMIT, MESSAGE_POST
} from "../constants/ActionTypes"
import {pack} from "../utils/Route"

// 显示注册模态框
export const show = () => ({type: REGISTER_SHOW})

// 隐藏注册模态框
export const hide = () => ({type: REGISTER_HIDE})

// 提交注册请求
export const submit = (name, email, password) => {
    return {
        type: MESSAGE_POST,
        data: pack(REGISTER_SUBMIT, {name, email, password}),
    }
}