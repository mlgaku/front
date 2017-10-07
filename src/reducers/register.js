import {
    REGISTER_SHOW, REGISTER_HIDE, REGISTER_CHECK, REGISTER_SUBMIT, MESSAGE_RECEIVE
} from "../constants/ActionTypes"
import {unpack} from "../utils/Route"

const initialState = {
    // 提示信息
    msg: "",
    // 是否显示模态框
    show: false,
    // 用户名是否已注册
    late: "",
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
            let body

            // 检查用户名
            body = unpack(REGISTER_CHECK, action.resp)
            if (body) {
                if (body.status === true) {
                    return {
                        ...state,
                        late: ""
                    }
                }

                return {
                    ...state,
                    late: body.msg,
                }
            }

            // 注册
            body = unpack(REGISTER_SUBMIT, action.resp)
            if (body) {
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
            }

            return state

        default:
            return state
    }
}

export default register