import {
    PUBSUB_ADD, PUBSUB_REMOVE,
    NODE_ADD, NODE_LIST, NODE_CHECK, NODE_REMOVE,
    TOPIC_NEW,
    LOGIN_SUBMIT,
    REGISTER_CHECK, REGISTER_SUBMIT,
} from "./ActionTypes"

// 正向
let f = {

    // 订阅
    [PUBSUB_ADD]: {mod: "sub", act: "add"},
    [PUBSUB_REMOVE]: {mod: "sub", act: "remove"},

    // 节点
    [NODE_ADD]: {mod: "node", act: "add"},
    [NODE_LIST]: {mod: "node", act: "list"},
    [NODE_CHECK]: {mod: "node", act: "check"},
    [NODE_REMOVE]: {mod: "node", act: "remove"},

    // 主题
    [TOPIC_NEW]: {mod: "topic", act: "new"},

    // 登录
    [LOGIN_SUBMIT]: {mod: "user", act: "login"},

    // 注册
    [REGISTER_CHECK]: {mod: "user", act: "check"},
    [REGISTER_SUBMIT]: {mod: "user", act: "reg"},

}

// 反向
let r = {}
for (let x in f) {
    r[`${f[x].mod}_${f[x].act}`] = x
}

export const forwa = f
export const rever = r