import React, {Component} from "react"

import Group from "./sidebar/Group"
import Node from "./sidebar/Node"
import Status from "./sidebar/Status"

class Sidebar extends Component {
    render() {
        return (
            <div>
                <Group />
                <br />
                <Node />
                <br />
                <Status />
            </div>
        )
    }
}

export default Sidebar