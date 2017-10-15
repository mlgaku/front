import React, {Component} from "react"
import {connect} from "react-redux"
import {findDOMNode} from "react-dom"

import {Link, Redirect} from "react-router-dom"

import ReactMarkdown from "react-markdown"
import {Button, Avatar, Snackbar, withStyles} from "material-ui"

import * as Pubsub from "../../actions/Pubsub"
import {submit} from "../../actions/Reply"
import {REPLY_LIST} from "../../constants/ActionTypes"

import "github-markdown-css"
import Editor from "../../components/Editor"

const mapStateToProps = (state) => ({
    reply: state.reply,
})
const mapDispatchToProps = (dispatch) => ({
    sub: (topic) => dispatch(Pubsub.add(REPLY_LIST, {topic})),
    unsub: (topic) => dispatch(Pubsub.remove(REPLY_LIST, {topic})),
    submit: (topic, content) => dispatch(submit(topic, content)),
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
    reply: {
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
        // 重定向
        redirect: "",
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

    // 重定向
    redirect(uri) {
        this.setState({redirect: uri})
    }

    // 高亮 At
    highAt(r) {
        const dom = findDOMNode(r)
        const that = this

        if (dom) {
            dom.innerHTML = dom.innerHTML.replace(/@([a-zA-Z0-9]+)/, "@<at style='color:#828282; cursor:pointer'>$1</at>")
            for (let x of dom.querySelectorAll("at")) {
                x.onclick = function () {
                    that.redirect(`/user/${this.innerHTML}`)
                }
            }
        }
    }

    render() {
        const classes = this.props.classes

        // 重定向
        if (this.state.redirect !== "") {
            const {redirect} = this.state
            this.state.redirect = ""
            return <Redirect to={redirect} />
        }

        return (
            <div className={classes.root}>
                <div className={classes.list}>
                    {this.props.reply.list.map(x => (
                        <div key={x.id} className={classes.item}>
                            <Avatar className={classes.avatar}>{x.user.name}</Avatar>
                            <div>
                                <Link to={`/user/${x.user.name}`} className={classes.link}>{x.user.name}</Link>
                                <ReactMarkdown source={x.content} className={classes.content} ref={r => this.highAt(r)} />
                            </div>
                        </div>
                    ))}
                </div>

                <br />

                <div className={classes.reply}>
                    <Editor height="150px" linewrap onChange={c => this.setState({content: c})} className={classes.editor} />
                    <Button raised dense color="accent" onClick={() => this.submit()} className={classes.submit}>提交</Button>
                </div>

                <Snackbar
                    anchorOrigin={{vertical: "top", horizontal: "center", direction: "down"}}
                    open={this.state.msg !== "" || this.props.reply.msg !== ""}
                    onRequestClose={() => {this.setState({msg:""}); this.props.reply.msg=""}}
                    SnackbarContentProps={{
                        "aria-describedby": "message-id",
                    }}
                    message={<span id="message-id">{this.state.msg || this.props.reply.msg}</span>}
                />
            </div>
        )
    }

}

export default connect(mapStateToProps, mapDispatchToProps)(withStyles(styles)(Reply))