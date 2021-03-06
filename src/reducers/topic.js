import {
    TOPIC_NEW, TOPIC_LIST, TOPIC_INFO,
    MESSAGE_RECEIVE
} from "../constants/ActionTypes"
import {unpack} from "../utils/Route"

const initialState = {
    // 提示信息
    msg: "",
    // 主题信息
    info: {},
    // 主题列表
    list: [],
    // 重定向页面
    redirect: "",
}

const topic = (state = initialState, action) => {
    switch (action.type) {
        // 收到消息
        case MESSAGE_RECEIVE:
            let body

            // 主题信息
            body = unpack(TOPIC_INFO, action.resp)
            if (body) {
                if (body.status === true) {
                    return {
                        ...state,
                        info: body.data
                    }
                }

                return {
                    ...state,
                    msg: body.msg
                }
            }

            // 主题列表
            body = unpack(TOPIC_LIST, action.resp)
            if (body) {
                if (body.status === true) {
                    return {
                        ...state,
                        list: body.data
                    }
                }

                return {
                    ...state,
                    msg: body.msg
                }
            }

            // 发布主题
            body = unpack(TOPIC_NEW, action.resp)
            if (body) {
                if (body.status === true) {
                    return {
                        ...state,
                        redirect: `/topic/${body.data}`
                    }
                }

                return {
                    ...state,
                    msg: body.msg
                }
            }

            return state

        default:
            return state
    }
}

export default topic