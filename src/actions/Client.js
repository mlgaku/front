import {
    OPEN, CLOSE,
    CONNECT, DISCONNECT,
    MESSAGE_POST, MESSAGE_RECEIVE
} from "../constants/ActionTypes"

// 成功建立
export const open = () => ({type: OPEN})
// 意外断开
export const close = () => ({type: CLOSE})

// 请求建立
export const connect = () => ({type: CONNECT})
// 请求断开
export const disconnect = () => ({type: DISCONNECT})

// 发出消息
export const postMessage = (data) => ({type: MESSAGE_POST, data})
// 得到反馈
export const receiveMessage = (resp) => ({type: MESSAGE_RECEIVE, resp})