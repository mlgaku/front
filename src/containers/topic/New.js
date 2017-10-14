import React, {Component} from "react"
import {connect} from "react-redux"
import {Redirect} from "react-router-dom"

import * as Pubsub from "../../actions/Pubsub"
import * as Topic from "../../actions/Topic"
import {NODE_LIST} from "../../constants/ActionTypes"

import Editor from "../../components/Editor"
import {Button, Select, InputLabel, Snackbar, FormControl, withStyles} from "material-ui"

const mapStateToProps = (state) => ({
    topic: state.topic,
    node: state.node.list,
})
const mapDispatchToProps = (dispatch) => ({
    sub: () => dispatch(Pubsub.add(NODE_LIST)),
    unsub: () => dispatch(Pubsub.remove(NODE_LIST)),
    submit: (node, title, content) => dispatch(Topic.submit(node, title, content)),
})

const styles = theme => ({
    root: {
        margin: "20px 0",
        background: "white",
        padding: "15px 20px",
    },
    head: {
        fontSize: "25px",
        marginBottom: "15px",
        paddingBottom: "10px",
        borderBottom: "1px solid #e4e4e4",
    },
    node: {
        width: "250px",
    },
    title: {
        width: "100%",
        outline: "none",
        padding: "10px",
        boxSizing: "border-box",
        border: "1px solid #e4e4e4",
    },
    bottom: {
        display: "flex",
        marginTop: "5px",
        padding: "15px 0 5px",
        justifyContent: "space-between",
    },
    content: {
        border: "1px solid #e4e4e4",
        borderTop: "none",
    },
})

class New extends Component {

    state = {
        // 提示
        msg: "",
        // 节点
        node: "",
        // 标题
        title: "",
        // 内容
        content: "",
    }

    // 组件装载
    componentWillMount() {
        this.props.sub()
    }

    // 组件卸载
    componentWillUnmount() {
        this.props.unsub()
    }

    // 提交新主题
    submit() {
        this.props.submit(this.state.node, this.state.title, this.state.content)
    }

    render() {
        const classes = this.props.classes

        // 重定向
        if (this.props.topic.redirect !== "") {
            const {redirect} = this.props.topic
            this.props.topic.redirect = ""
            return <Redirect to={redirect} />
        }

        return (
            <div className={classes.root}>
                <h1 className={classes.head}>发布主题</h1>
                <input type="text" onChange={t => this.setState({title: t.target.value})} className={classes.title} placeholder="请输入主题标题, 若标题能够表达完整内容, 则正文内容可以为空" />
                <Editor linewrap height="500px" onChange={c => this.setState({content: c})} className={classes.content} />

                <div className={classes.bottom}>
                    <Select native onChange={n => this.setState({node: n.target.value})} className={classes.node}>
                        <option>选择节点</option>
                        {this.props.node.map(x => (
                            <option key={x.id} value={x.id}>{x.name} / {x.title}</option>
                        ))}
                    </Select>
                    <Button raised dense color="accent" onClick={this.submit.bind(this)}>提交</Button>
                </div>

                <Snackbar
                    anchorOrigin={{vertical: "top", horizontal: "center", direction: "down"}}
                    open={this.state.msg !== "" || this.props.topic.msg !== ""}
                    onRequestClose={() => {this.setState({msg:""}); this.props.topic.msg=""}}
                    SnackbarContentProps={{
                        "aria-describedby": "message-id",
                    }}
                    message={<span id="message-id">{this.state.msg || this.props.topic.msg}</span>}
                />
            </div>
        )
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(withStyles(styles)(New))