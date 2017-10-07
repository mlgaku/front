import {
    REGISTER_SHOW, REGISTER_HIDE, REGISTER_SUBMIT, MESSAGE_RECEIVE
} from "../constants/ActionTypes"
import {unpack} from "../utils/Route"

const initialState = {
    // 提示信息
    msg: "",
    // 是否显示模态框
    show: false,
}

const register = (state = initialState, action) => {
    switch (action.type) {

        // 显示
        case REGISTER_SHOW:
            return {
                ...state,
                show: true
            }

        // 隐藏
        case REGISTER_HIDE:
            return {
                ...state,
                show: false
            }

        // 收到消息
        case MESSAGE_RECEIVE:
            let body = unpack(REGISTER_SUBMIT, action.resp)
            if (!body) {
                return state
            }

            if (body.status === true) {
                return {
                    ...state,
                    show: false,
                    msg: "注册成功!",
                }
            }

            return {
                ...state,
                msg: body.msg,
            }

        default:
            return state

    }
}

export default register