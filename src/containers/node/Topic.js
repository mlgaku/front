import React, {Component} from "react"
import {connect} from "react-redux"
import {Link} from "react-router-dom"

import * as Pubsub from "../../actions/Pubsub"
import {NODE_INFO, TOPIC_LIST} from "../../constants/ActionTypes"

import List from "../topic/List"
import {Avatar, Paper, Typography, Button, withStyles} from "material-ui"

const styles = theme => ({
    count: {
        boxShadow: "none",
        marginBottom: "15px",
        padding: "10px 75px",
        position: "relative",
    },
    body: {
        color: "#8a8a8a",
        fontSize: "13px",
    },
    button: {
        position: "absolute",
        right: "20px",
        top: "20px",
        padding: "10px 20px",
    },
    avatar: {
        position: "absolute",
        top: "15px",
        left: "15px",
    },
})

const mapStateToProps = (state) => ({
    node: state.node,
    topic: state.topic.list,
})
const mapDispatchToProps = (dispatch) => ({
    subNode: n => dispatch(Pubsub.add(NODE_INFO, {name: n})),
    subTopic: n => dispatch(Pubsub.add(TOPIC_LIST, {node: n})),
    unsub: () => {
        dispatch(Pubsub.remove(NODE_INFO))
        dispatch(Pubsub.remove(TOPIC_LIST))
    },
})

class Topic extends Component {

    // 主题列表是否订阅
    subTopic = false

    // 组件装载
    componentWillMount() {
        this.props.subNode(this.props.name)
    }

    // 组件卸载
    componentWillUnmount() {
        this.props.unsub()
    }

    // 组件更新完毕
    componentDidUpdate() {
        // 订阅节点下的主题列表
        if (!this.subTopic && this.props.node.info.name === this.props.name) {
            this.subTopic = true
            this.props.subTopic(this.props.node.info.id)
        }
    }

    render() {
        const classes = this.props.classes

        return (
            <div>
                <Paper className={classes.count} elevation={4}>
                    <Avatar className={classes.avatar}>节</Avatar>
                    <Typography type="headline" component="h3">{this.props.node.info.title}</Typography>
                    <Typography type="body1" component="p" className={classes.body}>
                        主题数: 349
                    </Typography>
                    <Link to="/topic/new">
                        <Button raised dense color="accent" className={classes.button}>新主题</Button>
                    </Link>
                </Paper>

                <List />
            </div>
        )
    }

}

export default connect(mapStateToProps, mapDispatchToProps)(withStyles(styles)(Topic))