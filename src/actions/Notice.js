import {
    NOTICE_REMOVE, MESSAGE_POST
} from "../constants/ActionTypes"
import {pack} from "../utils/Route"

// 移除通知
export const remove = (id) => ({
    type: MESSAGE_POST,
    data: pack(NOTICE_REMOVE, {id}),
})