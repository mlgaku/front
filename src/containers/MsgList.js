import React, {Component} from "react"
import {connect} from "react-redux"

const mapStateToProps = (state) => ({...state.test})
const mapDispatchToProps = (dispatch) => ({})

class MsgList extends Component {
    render() {
        return (
            <div>
                <span>连接状态: {this.props.status ? "true" : "false"}</span>

                <ul>
                    {this.props.response.map(
                        (x, i) => <li key={i}>{x.message}</li>
                    )}
                </ul>
            </div>
        )
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(MsgList)