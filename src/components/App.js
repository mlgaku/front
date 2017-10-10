import React, {Component} from "react"

import Home from "./Home"
import Node from "./Node"
import Topic from "./Topic"

import {BrowserRouter, Switch, Route} from "react-router-dom"

class App extends Component {
    render() {
        return (
            <BrowserRouter>
                <Switch>
                    <Route path="/" component={Home} exact />

                    {/*节点*/}
                    <Route path="/node" component={Node} exact />
                    <Route path="/node/:name" component={Node} />

                    {/*主题*/}
                    <Route path="/topic/new" component={Topic} exact />
                    <Route path="/topic/:id" component={Topic} />
                </Switch>
            </BrowserRouter>
        )
    }
}

export default App