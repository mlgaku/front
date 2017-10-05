import Server from "./Server"
import * as ClientServer from "../actions/ClientServer"
import {CONNECT, DISCONNECT, MESSAGE_POST} from "../constants/ActionTypes"

class Channel {
    constructor(addr, store) {
        this.addr = addr
        this.store = store
        this.store.subscribe(this.listener.bind(this))
    }

    // 开始 Server 连接
    start() {
        if (!!this.ser) {
            this.stop()
        }

        this.ser = new Server(this.addr, this.dipatcher.bind(this))
    }

    // 终止 Server 连接
    stop() {
        this.ser.close()
        this.ser = null
    }

    // 触发 Server 连接
    trigger() {
        this.store.dispatch(ClientServer.connect())
    }

    // Redux 消息监听
    listener() {
        const {lastState} = this.store.getState()

        switch (lastState.type) {
            case CONNECT:
                return this.start()
            case DISCONNECT:
                return this.stop()
            case MESSAGE_POST:
                return this.ser.postMessage(JSON.stringify(lastState.data))
            default:
                return
        }
    }

    // Server 消息监听
    dipatcher(msg) {
        if (msg === undefined) {
            return this.store.dispatch(ClientServer.disconnect())
        }
        return this.store.dispatch(ClientServer.receiveMessage(JSON.parse(msg)))
    }
}

export default Channel