import {
    REPLAY_NEW, REPLAY_LIST,
    MESSAGE_RECEIVE
} from "../constants/ActionTypes"
import {unpack} from "../utils/Route"

const initialState = {
    // 提示信息
    msg: "",
    // 回复列表
    list: [],
}

const replay = (state = initialState, action) => {
    switch (action.type) {
        // 收到消息
        case MESSAGE_RECEIVE:
            let body

            // 回复列表
            body = unpack(REPLAY_LIST, action.resp)
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

            // 发表回复
            body = unpack(REPLAY_NEW, action.resp)
            if (body) {
                if (body.status === true) {
                    return {
                        ...state,
                        msg: "成功发表回复!",
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

export default replay