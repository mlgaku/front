import {
    TOPIC_NEW, MESSAGE_POST
} from "../constants/ActionTypes"
import {pack} from "../utils/Route"

// 发布新主题
export const submit = (node, title, content) => {
    return {
        type: MESSAGE_POST,
        data: pack(TOPIC_NEW, {node, title, content}),
    }
}