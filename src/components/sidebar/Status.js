import React, {Component} from "react"
import {Grid, withStyles} from "material-ui"

const styles = theme => ({
    block: {
        padding: "15px",
        backgroundColor: "white",
    },
    head: {
        color: "#333",
        fontSize: "15px",
        padding: "0 0 10px 0",
        borderBottom: "1px solid #eaeaea",
    },
    body: {
        paddingTop: "10px",
    },
    item: {
        color: "#333",
        width: "100%",
        textTransform: "none",
        border: "1px solid #eaeaea",
    },
    key: {
        fontSize: "13px",
        lineHeight: "30px",
        textAlign: "right",
    },
    value: {
        fontSize: "13px",
        lineHeight: "30px",
        fontWeight: "bold",
    }
})

class Status extends Component {
    render() {
        const classes = this.props.classes

        return (
            <div className={classes.block}>
                <h3 className={classes.head}>社区状态</h3>
                <Grid container justify="center" className={classes.body}>
                    <Grid item xs={4}>
                        <p className={classes.key}>注册会员</p>
                        <p className={classes.key}>主题</p>
                        <p className={classes.key}>回复</p>
                    </Grid>
                    <Grid item xs={8}>
                        <p className={classes.value}>257763</p>
                        <p className={classes.value}>395425</p>
                        <p className={classes.value}>4816525</p>
                    </Grid>
                </Grid>
            </div>
        )
    }
}

export default withStyles(styles)(Status)