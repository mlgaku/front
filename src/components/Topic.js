import React, {Component} from "react"
import {Grid, withStyles} from "material-ui"

import Header from "../containers/Header"
import New from "../containers/topic/New"
import Info from "../containers/topic/Info"

const styles = theme => ({
    content: {
        padding: "20px 15px",
    },
    bgColor: {
        backgroundColor: "#f1f1f1",
    }
})

class Topic extends Component {
    render() {
        const classes = this.props.classes

        return (
            <div>
                {/* 头部 */}
                <Header />

                {/* 主内容区 */}
                <Grid container justify="center" spacing={0} className={classes.bgColor}>
                    <Grid item xs={8} className={classes.content}>
                        {this.props.match.params.id ? <Info id={this.props.match.params.id} /> : <New />}
                    </Grid>
                </Grid>
            </div>
        )
    }
}

export default withStyles(styles)(Topic)