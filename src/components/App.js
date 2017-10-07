import React, {Component} from "react"

import Home from "./Home"
import Node from "../containers/Node"

import {BrowserRouter, Switch, Route} from "react-router-dom"

class App extends Component {
    render() {
        return (
            <BrowserRouter>
                <Switch>
                    <Route path="/" component={Home} exact />
                    <Route path="/node" component={Node} />
                </Switch>
            </BrowserRouter>
        )
    }
}

export default App