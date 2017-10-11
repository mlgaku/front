import React, {Component} from "react"
import {connect} from "react-redux"
import {Redirect} from "react-router-dom"

import * as Pubsub from "../../actions/Pubsub"
import * as Topic from "../../actions/Topic"
import {NODE_LIST} from "../../constants/ActionTypes"

import Codemirror from "../../components/Editor"
import {Snackbar, withStyles} from "material-ui"

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
            <div>
                <h1>发布主题</h1>
                <input type="text" onChange={t => this.setState({title: t.target.value})} />
                <Codemirror height="500px" onChange={c => this.setState({content: c})} />
                <select onChange={n => this.setState({node: n.target.value})}>
                    <option>选择节点</option>
                    {this.props.node.map(x => (
                        <option key={x.id} value={x.id}>{x.name} / {x.title}</option>
                    ))}
                </select>
                <button onClick={this.submit.bind(this)}>发布</button>

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