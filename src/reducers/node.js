import {
    NODE_SHOW_CHILD, NODE_HIDE_CHILD,
    NODE_SHOW_PARENT, NODE_HIDE_PARENT,
    LOGIN_SUBMIT, MESSAGE_RECEIVE
} from "../constants/ActionTypes"
import {unpack} from "../utils/Route"

const initialState = {
    // 子节点
    child: {
        // 提示信息
        msg: "",
        // 是否显示模态框
        show: false,
    },

    // 父节点
    parent: {
        // 提示信息
        msg: "",
        // 是否显示模态框
        show: false,
    },
}

const node = (state = initialState, action) => {
    switch (action.type) {

        // 显示子节点
        case NODE_SHOW_CHILD:
            return {
                ...state,
                child: {
                    ...state.child,
                    show: true
                }
            }

        // 隐藏子节点
        case NODE_HIDE_CHILD:
            return {
                ...state,
                child: {
                    ...state.child,
                    show: false
                }
            }

        // 显示父节点
        case NODE_SHOW_PARENT:
            return {
                ...state,
                parent: {
                    ...state.parent,
                    show: true
                }
            }

        // 隐藏父节点
        case NODE_HIDE_PARENT:
            return {
                ...state,
                parent: {
                    ...state.parent,
                    show: false
                }
            }

        // 收到消息
        case MESSAGE_RECEIVE:
            let body = unpack(LOGIN_SUBMIT, action.resp)
            if (!body) {
                return state
            }

            if (body.status === true) {
                return {
                    ...state,
                    show: false,
                    info: body.data,
                    logged: true
                }
            }

            return {
                ...state,
                msg: body.msg
            }

        default:
            return state

    }
}

export default node