import {
    NODE_ADD, NODE_CHECK,
    LOGIN_SUBMIT,
    REGISTER_CHECK, REGISTER_SUBMIT,
} from "./ActionTypes"

// 正向
let f = {

    [NODE_ADD]: {mod: "node", act: "add"},
    [NODE_CHECK]: {mod: "node", act: "check"},

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