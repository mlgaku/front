import {
    NOTICE_LIST,
    MESSAGE_RECEIVE
} from "../constants/ActionTypes"
import {unpack} from "../utils/Route"

const initialState = {
    // 通知列表
    list: [],
}

const notice = (state = initialState, action) => {
    switch (action.type) {
        // 收到消息
        case MESSAGE_RECEIVE:
            let body

            // 通知列表
            body = unpack(NOTICE_LIST, action.resp)
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

            return state

        default:
            return state
    }
}

export default notice