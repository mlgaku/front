class Server {
    constructor(addr, dispatcher) {
        this.websocket = new WebSocket(`wss://${addr}/stream`)
        this.websocket.onopen = (e) => dispatcher("open")
        this.websocket.onclose = (e) => dispatcher("close")
        this.websocket.onmessage = (e) => dispatcher("message", e.data)
    }

    postMessage(text) {
        this.websocket.send(text);
    }

    close() {
        this.websocket.close();
    }
}

export default Server