import React, {Component} from "react"
import {connect} from "react-redux"

import * as Pubsub from "../../actions/Pubsub"
import {TOPIC_INFO} from "../../constants/ActionTypes"

import "github-markdown-css"

import Reply from "./Reply"
import Sidebar from "../../components/Sidebar"
import ReactMarkdown from "react-markdown"
import {Grid, withStyles} from "material-ui"

const mapStateToProps = (state) => ({
    topic: state.topic.info,
})
const mapDispatchToProps = (dispatch) => ({
    sub: (id) => dispatch(Pubsub.add(TOPIC_INFO, {id})),
    unsub: () => dispatch(Pubsub.remove(TOPIC_INFO)),
})

const styles = theme => ({
    left: {
        padding: "20px 15px",
    },
    right: {
        padding: "20px 15px",
    },
    meta: {
        padding: "15px 20px",
        fontSize: "15px",
        borderBottom: "1px solid #e4e4e4",
        background: theme.palette.background.paper,
    },
    info: {
        color: "#444",
        fontSize: "14px",
        lineHeight: "1.8",
        padding: "15px 20px",
        background: theme.palette.background.paper,
    },
    title: {
        fontWeight: "normal",
    },
    author: {
        color: "#999",
        fontSize: "13px",
        marginTop: "5px",
    },
})

class Info extends Component {

    // 组件装载
    componentWillMount() {
        this.props.sub(this.props.id)
    }

    // 组件卸载
    componentWillUnmount() {
        this.props.unsub()
    }

    render() {
        const classes = this.props.classes

        if (this.props.topic.id !== this.props.id) {
            return <div>加载中...</div>
        }

        return (
            <Grid container spacing={0}>
                {/* 左侧 */}
                <Grid item xs={9} className={classes.left}>
                    <div className={classes.meta}>
                        <h1 className={classes.title}>{this.props.topic.title}</h1>
                        <span className={classes.author}>作者: {this.props.topic.user.name}</span>
                    </div>
                    <div className={classes.info + " markdown-body"}>
                        {this.props.topic.content ? <ReactMarkdown source={this.props.topic.content} /> : ""}
                    </div>
                    <br />
                    <Reply topic={this.props.id} />
                </Grid>
                {/* 右侧 */}
                <Grid item xs={3} className={classes.right}>
                    <Sidebar />
                </Grid>
            </Grid>
        )
    }

}

export default connect(mapStateToProps, mapDispatchToProps)(withStyles(styles)(Info))