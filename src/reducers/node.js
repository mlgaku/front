import {
    NODE_SHOW, NODE_HIDE,
    NODE_ADD, NODE_LIST, NODE_INFO, NODE_CHECK, NODE_REMOVE,
    MESSAGE_RECEIVE
} from "../constants/ActionTypes"
import {unpack} from "../utils/Route"

const initialState = {
    // 提示信息
    msg: "",
    // 节点列表
    list: [],
    // (单个)节点信息
    info: {},
    // 是否显示模态框
    show: false,
    // 节点名是否已存在
    late: "",
    // 欲添加节点的父节点
    parent: null,
}

const node = (state = initialState, action) => {
    switch (action.type) {
        // 显示添加节点
        case NODE_SHOW:
            return {
                ...state,
                show: true,
                parent: action.parent
            }

        // 隐藏添加节点
        case NODE_HIDE:
            return {
                ...state,
                show: false
            }

        // 收到消息
        case MESSAGE_RECEIVE:
            let body

            // 节点列表
            body = unpack(NODE_LIST, action.resp)
            if (body) {
                if (body.status === true) {
                    return {
                        ...state,
                        list: body.data
                    }
                }

                return {
                    ...state,
                    msg: "节点列表获取失败!"
                }
            }

            // 节点信息
            body = unpack(NODE_INFO, action.resp)
            if (body) {
                if (body.status === true) {
                    return {
                        ...state,
                        info: body.data
                    }
                }

                return {
                    ...state,
                    msg: "节点信息获取失败!"
                }
            }

            // 添加节点
            body = unpack(NODE_ADD, action.resp)
            if (body) {
                if (body.status === true) {
                    return {
                        ...state,
                        show: false,
                        msg: "添加成功!"
                    }
                }

                return {
                    ...state,
                    msg: body.msg
                }
            }

            // 删除节点
            body = unpack(NODE_REMOVE, action.resp)
            if (body) {
                if (body.status === true) {
                    return {
                        ...state,
                        msg: "删除成功!"
                    }
                }

                return {
                    ...state,
                    msg: body.msg
                }
            }

            // 检查节点名
            body = unpack(NODE_CHECK, action.resp)
            if (body) {
                if (body.status === true) {
                    return {
                        ...state,
                        late: ""
                    }
                }

                return {
                    ...state,
                    late: body.msg
                }
            }

            return state

        default:
            return state
    }
}

export default node