import React, {Component} from "react"
import {connect} from "react-redux"

import * as Pubsub from "../actions/Pubsub"
import {NODE_LIST, TOPIC_LIST} from "../constants/ActionTypes"

import {Grid, withStyles} from "material-ui"

import Header from "../containers/Header"
import Topic from "../containers/topic/List"
import Sidebar from "./Sidebar"

const mapStateToProps = (state) => ({
})
const mapDispatchToProps = (dispatch) => ({
    sub: () => {
        dispatch(Pubsub.add(NODE_LIST))
        dispatch(Pubsub.add(TOPIC_LIST))
    },
    unsub: () => {
        dispatch(Pubsub.remove(NODE_LIST))
        dispatch(Pubsub.remove(TOPIC_LIST))
    },
})

const styles = theme => ({
    left: {
        padding: "20px 15px",
    },
    right: {
        padding: "20px 15px",
    },
    bgColor: {
        backgroundColor: "#f1f1f1",
    }
})

class Home extends Component {

    // 组件装载
    componentWillMount() {
        this.props.sub()
    }

    // 组件卸载
    componentWillUnmount() {
        this.props.unsub()
    }

    render() {
        const classes = this.props.classes

        return (
            <div>
                {/* 头部 */}
                <Header />

                {/* 主内容区 */}
                <Grid container justify="center" spacing={0} className={classes.bgColor}>
                    <Grid item xs={8}>
                        <Grid container spacing={0}>
                            {/* 左侧 */}
                            <Grid item xs={9} className={classes.left}>
                                <Topic />
                            </Grid>
                            {/* 右侧 */}
                            <Grid item xs={3} className={classes.right}>
                                <Sidebar />
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
            </div>
        )
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(withStyles(styles)(Home))