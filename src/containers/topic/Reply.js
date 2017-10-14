import React, {Component} from "react"
import {connect} from "react-redux"

import {Link} from "react-router-dom"
import ReactMarkdown from "react-markdown"
import {Button, Avatar, Snackbar, withStyles} from "material-ui"

import * as Pubsub from "../../actions/Pubsub"
import * as Replay from "../../actions/Replay"
import {REPLAY_LIST} from "../../constants/ActionTypes"

import "github-markdown-css"
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
    root: {},
    list: {
        padding: "15px 20px",
        background: theme.palette.background.paper,
    },
    item: {
        display: "flex",
        marginTop: "15px",
    },
    link: {
        color: "black",
        fontWeight: "bold",
        textDecoration: "none",
    },
    avatar: {
        marginRight: "15px",
    },
    replay: {
        padding: "15px",
        background: theme.palette.background.paper,
    },
    editor: {
        border: "1px solid #e4e4e4",
    },
    submit: {
        marginTop: "10px",
    },
    content: {
        padding: "10px 0",
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
                <div className={classes.list}>
                    {this.props.replay.list.map(x => (
                        <div key={x.id} className={classes.item}>
                            <Avatar className={classes.avatar}>{x.user.name}</Avatar>
                            <div>
                                <Link to={`/user/${x.user.name}`} className={classes.link}  >{x.user.name}</Link>
                                <ReactMarkdown source={x.content} className={classes.content} />
                            </div>
                        </div>
                    ))}
                </div>

                <br />

                <div className={classes.replay}>
                    <Codemirror height="150px" linewrap onChange={c => this.setState({content: c})} className={classes.editor} />
                    <Button raised dense color="accent" onClick={() => this.submit()} className={classes.submit}>提交</Button>
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