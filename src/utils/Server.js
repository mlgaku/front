class Server {
    constructor(addr, dispatcher) {
        this.websocket = new WebSocket(`ws://${addr}/api`)
        this.dispatcher = dispatcher
        this.websocket.onmessage = (e) => dispatcher(e.data)
        this.websocket.onclose = (e) => dispatcher(undefined)
    }

    postMessage(text) {
        this.websocket.send(text);
    }

    close() {
        this.websocket.close();
    }
}

export default Server