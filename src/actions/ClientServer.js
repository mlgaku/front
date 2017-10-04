import {
    CONNECT, DISCONNECT,
    MESSAGE_POST, MESSAGE_RECEIVE
} from "./../constants/ActionTypes"

// 建立连接
export const connect = () => ({type: CONNECT})

// 断开连接
export const disconnect = () => ({type: DISCONNECT})

// 发出消息
export const postMessage = (text) => ({type: MESSAGE_POST, text})

// 反馈消息
export const receiveMessage = (resp) => ({type: MESSAGE_RECEIVE, resp})