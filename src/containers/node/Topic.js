import React, {Component} from "react"
import {connect} from "react-redux"
import {Link} from "react-router-dom"

import TopicList from "../topic/Info"
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
})
const mapDispatchToProps = (dispatch) => ({
})

class Topic extends Component {
    render() {
        const classes = this.props.classes

        return (
            <div>
                <Paper className={classes.count} elevation={4}>
                    <Avatar className={classes.avatar}>互</Avatar>
                    <Typography type="headline" component="h3">互联网</Typography>
                    <Typography type="body1" component="p" className={classes.body}>
                        主题数: 349
                    </Typography>
                    <Link to="/topic/new">
                        <Button raised dense color="accent" className={classes.button}>新主题</Button>
                    </Link>
                </Paper>

                <TopicList />
            </div>
        )
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(withStyles(styles)(Topic))