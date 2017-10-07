import {
    LOGIN_SUBMIT, REGISTER_SUBMIT, NODE_ADD
} from "./ActionTypes"

// 正向
let f = {
    [LOGIN_SUBMIT]: {mod: "user", act: "login"},
    [REGISTER_SUBMIT]: {mod: "user", act: "reg"},
    [NODE_ADD]: {mod: "node", act: "add"}
}

// 反向
let r = {}
for (let x in f) {
    r[`${f[x].mod}_${f[x].act}`] = x
}

export const forwa = f
export const rever = r