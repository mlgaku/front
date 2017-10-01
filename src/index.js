import React from "react"
import ReactDOM from "react-dom"

// app
import App from "./components/App"
// redux
import {createStore, combineReducers, applyMiddleware} from "redux"
import {Provider} from "react-redux"
import thunk from "redux-thunk"
// reducers
import reducers from "./reducers"
// Channel
import Channel from "./utils/Channel"
// serviceWorker
import registerServiceWorker from "./registerServiceWorker"

const store = createStore(combineReducers(reducers), applyMiddleware(thunk))
new Channel("127.0.0.1:8080", store).trigger()

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById("root")
)

registerServiceWorker()