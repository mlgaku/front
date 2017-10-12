import {
    REPLAY_NEW, MESSAGE_POST
} from "../constants/ActionTypes"
import {pack} from "../utils/Route"

// 添加新回复
export const submit = (topic, content) => ({
    type: MESSAGE_POST,
    data: pack(REPLAY_NEW, {topic, content}),
})