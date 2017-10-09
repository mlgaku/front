import React, {Component} from "react"
import {bindActionCreators} from "redux"
import {connect} from "react-redux"

import MsgList from "./MsgList"

import * as Client from "../actions/Client"

const mapStateToProps = (state) => ({})
const mapDispatchToProps = (dispatch) => ({
    actions: bindActionCreators(Client, dispatch)
})

class Test extends Component {
    render() {
        return (
            <div>
                <textarea cols="30" rows="10" ref="json" defaultValue='{"mod": "home", "act": "hello"}'></textarea>
                <br />
                <button onClick={() => this.props.actions.postMessage(this.refs.json.value)}>Click</button>
                <hr />
                <MsgList />
            </div>
        )
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Test)