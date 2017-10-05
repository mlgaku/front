import {
    LOGIN_SHOW, LOGIN_HIDE, LOGIN_SUBMIT, MESSAGE_RECEIVE
} from "../constants/ActionTypes"
import {unpack} from "../utils/Route"

const initialState = {
    // 是否显示模态框
    show: false,
    // 是否已登录
    logged: false,
    // 提示信息
    msg: "",
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