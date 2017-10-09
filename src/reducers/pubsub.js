import {PUBSUB_ADD} from "../constants/ActionTypes"

const initialState = {
    // 订阅列表
    list: new Set(),
}

const pubsub = (state = initialState, action) => {
    switch (action.type) {
        // 添加订阅
        case PUBSUB_ADD:
            state.list.add(JSON.stringify(action.data))
            return {...state}

        default:
            return state
    }
}

export default pubsub