import React, {Component} from "react"
import {connect} from "react-redux"
import {Snackbar, withStyles} from "material-ui"

import * as Pubsub from "../../actions/Pubsub"
import * as Replay from "../../actions/Replay"
import {REPLAY_LIST} from "../../constants/ActionTypes"

import Codemirror from "../../components/Editor"

const mapStateToProps = (state) => ({
    replay: state.replay,
})
const mapDispatchToProps = (dispatch) => ({
    sub: (topic) => dispatch(Pubsub.add(REPLAY_LIST, {topic})),
    unsub: (topic) => dispatch(Pubsub.remove(REPLAY_LIST, {topic})),
    submit: (topic, content) => dispatch(Replay.submit(topic, content)),
})

const styles = theme => ({
    root: {
        background: theme.palette.background.paper,
    },
})

class Reply extends Component {

    state = {
        // 提示
        msg: "",
        // 内容
        content: "",
    }

    // 组件装载
    componentWillMount() {
        this.props.sub(this.props.topic)
    }

    // 组件卸载
    componentWillUnmount() {
        this.props.unsub(this.props.topic)
    }

    // 提交回复
    submit() {
        this.props.submit(this.props.topic, this.state.content)
    }

    render() {
        const classes = this.props.classes

        return (
            <div className={classes.root}>
                <div>
                    <h3>回复列表</h3>
                    <ul>
                        {this.props.replay.list.map(x => (
                            <li key={x.id}>
                                内容: {x.content}
                                <br />
                                作者: {x.author}
                                <hr />
                            </li>
                        ))}
                    </ul>
                </div>
                <br />
                <div>
                    <Codemirror height="150px" onChange={c => this.setState({content: c})} />
                    <button onClick={() => this.submit()}>提交</button>
                </div>

                <Snackbar
                    anchorOrigin={{vertical: "top", horizontal: "center", direction: "down"}}
                    open={this.state.msg !== "" || this.props.replay.msg !== ""}
                    onRequestClose={() => {this.setState({msg:""}); this.props.replay.msg=""}}
                    SnackbarContentProps={{
                        "aria-describedby": "message-id",
                    }}
                    message={<span id="message-id">{this.state.msg || this.props.replay.msg}</span>}
                />
            </div>
        )
    }

}

export default connect(mapStateToProps, mapDispatchToProps)(withStyles(styles)(Reply))