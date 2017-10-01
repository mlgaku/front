class Message {
    constructor(message, isRead = false) {
        this.message = message;
        this.read = isRead;
    }

    read() {
        this.read = true;
        return this;
    }
}

export default Message