import {
    LOGIN_SHOW, LOGIN_HIDE
} from "../constants/ActionTypes"

const initialState = {
    // 是否显示模态框
    show: false
}

const login = (state = initialState, action) => {
    switch (action.type) {

        // 显示
        case LOGIN_SHOW:
            return {
                ...state,
                show: true
            }

        // 隐藏
        case LOGIN_HIDE:
            return {
                ...state,
                show: false
            }

        default:
            return state

    }
}

export default login