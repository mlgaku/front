class Server {
    constructor(addr, dispatcher) {
        this.websocket = new WebSocket(`ws://${addr}/api`)
        this.dispatcher = dispatcher
        this.websocket.onmessage = function(event) {
            dispatcher(event.data)
        }
    }

    postMessage(text) {
        this.websocket.send(text);
    }

    close() {
        this.websocket.close();
    }
}

export default Server