import React, {Component} from "react"
import {connect} from "react-redux"

import * as Pubsub from "../../actions/Pubsub"
import {TOPIC_INFO} from "../../constants/ActionTypes"

import Replay from "./Reply"
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
    info: {
        padding: "15px",
        background: theme.palette.background.paper,
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
                    <div className={classes.info}>
                        <h1>{this.props.topic.title}</h1>
                        <span>作者: {this.props.topic.author}</span>
                        <hr />
                        {this.props.topic.content ? <ReactMarkdown source={this.props.topic.content} /> : ""}
                    </div>
                    <br />
                    <Replay topic={this.props.id} />
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