import Server from "./Server"
import * as Client from "../actions/Client"
import * as Pubsub from "../actions/Pubsub"
import {OPEN, CLOSE, CONNECT, DISCONNECT, PUBSUB_ADD, MESSAGE_POST} from "../constants/ActionTypes"

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

    // Redux 消息监听
    listener() {
        const {pubsub, lastState} = this.store.getState()

        switch (lastState.type) {
            case OPEN:
                // 建立连接后订阅内容
                for (let v of pubsub.list.values()) {
                    pubsub.list.delete(v)
                    this.store.dispatch(Pubsub.reg(JSON.parse(v)))
                }
                return
            case CLOSE:
                return
            case CONNECT:
                return this.start()
            case DISCONNECT:
                return this.stop()
            case PUBSUB_ADD:
                if (!this.ser.websocket.readyState) {
                    return
                }
                // 有新的订阅时触发
                for (let v of pubsub.list.values()) {
                    pubsub.list.delete(v)
                    this.store.dispatch(Pubsub.reg(JSON.parse(v)))
                }
                return
            case MESSAGE_POST:
                return this.ser.postMessage(JSON.stringify(lastState.data))
            default:
                return
        }
    }

    // Server 消息监听
    dipatcher(type, msg = null) {
        switch (type) {
            case "open":
                return this.store.dispatch(Client.open())
            case "close":
                return this.store.dispatch(Client.close())
            case "message":
                return this.store.dispatch(Client.receiveMessage(JSON.parse(msg)))
            default:
                return
        }
    }
}

export default Channel