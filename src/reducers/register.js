import {
    REGISTER_SHOW, REGISTER_HIDE
} from "./../constants/ActionTypes"

const initialState = {
    // 是否显示模态框
    show: false
}

const register = (state = initialState, action) => {
    switch (action.type) {

        // 显示
        case REGISTER_SHOW:
            return {
                ...state,
                show: true
            }

        // 隐藏
        case REGISTER_HIDE:
            return {
                ...state,
                show: false
            }

        default:
            return state

    }
}

export default register