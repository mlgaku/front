import {
    TOPIC_NEW, TOPIC_INFO, MESSAGE_POST
} from "../constants/ActionTypes"
import {pack} from "../utils/Route"

// 发布新主题
export const submit = (node, title, content) => ({
    type: MESSAGE_POST,
    data: pack(TOPIC_NEW, {node, title, content}),
})