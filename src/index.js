import React from "react"
import ReactDOM from "react-dom"

// app
import App from "./components/App"
// redux
import {createStore, combineReducers, applyMiddleware} from "redux"
import {Provider} from "react-redux"
import thunk from "redux-thunk"
import {routerReducer, routerMiddleware, syncHistoryWithStore} from "react-router-redux"
// reducers
import reducers from "./reducers"
// Channel
import Channel from "./utils/Channel"
import {connect} from "./actions/Client"
// serviceWorker
import registerServiceWorker from "./registerServiceWorker"
// Router
import {Router} from "react-router-dom"
import History from "./components/History"

const store = createStore(combineReducers({
    ...reducers,
    routing: routerReducer
}), applyMiddleware(
    thunk,
    routerMiddleware(History)
))

new Channel("api.maile.co", store)
store.dispatch(connect())

const history = syncHistoryWithStore(History, store)

ReactDOM.render(
    <Provider store={store}>
        <Router history={history}>
            <App />
        </Router>
    </Provider>,
    document.getElementById("root")
)

registerServiceWorker()