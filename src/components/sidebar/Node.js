import React, {Component} from "react"
import {Grid, Button, withStyles} from "material-ui"

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
    }
})

class Node extends Component {
    render() {
        const classes = this.props.classes

        return (
            <div className={classes.block}>
                <h3 className={classes.head}>热门节点</h3>
                <Grid container justify="center" className={classes.body}>
                    <Grid item xs={6}>
                        <Button dense href="#" className={classes.item}>问与答</Button>
                    </Grid>
                    <Grid item xs={6}>
                        <Button dense href="#" className={classes.item}>分享发现</Button>
                    </Grid>
                    <Grid item xs={6}>
                        <Button dense href="#" className={classes.item}>酷工作</Button>
                    </Grid>
                    <Grid item xs={6}>
                        <Button dense href="#" className={classes.item}>程序员</Button>
                    </Grid>
                    <Grid item xs={6}>
                        <Button dense href="#" className={classes.item}>macOS</Button>
                    </Grid>
                    <Grid item xs={6}>
                        <Button dense href="#" className={classes.item}>分享创造</Button>
                    </Grid>
                    <Grid item xs={6}>
                        <Button dense href="#" className={classes.item}>Python</Button>
                    </Grid>
                    <Grid item xs={6}>
                        <Button dense href="#" className={classes.item}>iPhone</Button>
                    </Grid>
                    <Grid item xs={6}>
                        <Button dense href="#" className={classes.item}>Android</Button>
                    </Grid>
                    <Grid item xs={6}>
                        <Button dense href="#" className={classes.item}>Linux</Button>
                    </Grid>
                </Grid>
            </div>
        )
    }
}

export default withStyles(styles)(Node)