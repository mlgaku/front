import Message from "./../utils/Message"
import {CONNECT, DISCONNECT, MESSAGE_RECEIVE} from "./../constants/ActionTypes"

const initialState = {
    // server 状态
    status: false,
    // server 响应
    response: []
}

const test = (state = initialState, action) => {
    switch (action.type) {
        case CONNECT:
            return {
                ...state,
                status: true
            }

        case DISCONNECT:
            return {
                ...state,
                status: false
            }

        case MESSAGE_RECEIVE:
            return {
                ...state,
                response: [...state.response, new Message(action.resp)]
            }

        default:
            return state
    }
}

export default test