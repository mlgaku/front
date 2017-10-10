import React, {Component} from "react"
import {Grid, withStyles} from "material-ui"

import Header from "../containers/Header"
import List from "../containers/node/List"
import Topic from "../containers/node/Topic"
import Sidebar from "./Sidebar"

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

class Node extends Component {
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
                                {this.props.match.params.name ? <Topic name={this.props.match.params.name} /> : <List />}
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

export default withStyles(styles)(Node)