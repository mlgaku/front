import {
    LOGIN_SHOW, LOGIN_HIDE, LOGIN_LOGOUT, LOGIN_SUBMIT, MESSAGE_RECEIVE
} from "../constants/ActionTypes"
import {unpack} from "../utils/Route"

const initialState = {
    // 提示信息
    msg: "",
    // 是否显示模态框
    show: false,
    // 登录信息
    info: {},
    // 是否已登录
    logged: false,
}

const login = (state = initialState, action) => {
    switch (action.type) {

        // 显示
        case LOGIN_SHOW:
            return {
                ...state,
                show: true
            }

        // 隐藏
        case LOGIN_HIDE:
            return {
                ...state,
                show: false
            }

        // 登出
        case LOGIN_LOGOUT:
            return {
                ...state,
                ...initialState
            }

        // 收到消息
        case MESSAGE_RECEIVE:
            let body = unpack(LOGIN_SUBMIT, action.resp)
            if (!body) {
                return state
            }

            if (body.status === true) {
                return {
                    ...state,
                    show: false,
                    info: body.data,
                    logged: true
                }
            }

            return {
                ...state,
                msg: body.msg
            }

        default:
            return state

    }
}

export default login