import {
    CONNECT, DISCONNECT,
    POST_MESSAGE, RECEIVE_MESSAGE
} from "./../constants/ActionTypes"

// 建立连接
export const connect = () => ({type: CONNECT})

// 断开连接
export const disconnect = () => ({type: DISCONNECT})

// 发出消息
export const postMessage = (text) => ({type: POST_MESSAGE, text})

// 反馈消息
export const receiveMessage = (resp) => ({type: RECEIVE_MESSAGE, resp})