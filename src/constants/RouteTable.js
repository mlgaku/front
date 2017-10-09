import {
    PUBSUB_ADD, PUBSUB_REMOVE,
    NODE_ADD, NODE_CHECK, NODE_SUB,
    LOGIN_SUBMIT,
    REGISTER_CHECK, REGISTER_SUBMIT,
} from "./ActionTypes"

// 正向
let f = {

    [PUBSUB_ADD]: {mod: "sub", act: "add"},
    [PUBSUB_REMOVE]: {mod: "sub", act: "remove"},

    [NODE_ADD]: {mod: "node", act: "add"},
    [NODE_CHECK]: {mod: "node", act: "check"},
    [NODE_SUB]: {mod: "node", act: "list"},

    [LOGIN_SUBMIT]: {mod: "user", act: "login"},

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