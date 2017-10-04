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

class Group extends Component {
    render() {
        const classes = this.props.classes

        return (
            <div className={classes.block}>
                <h3 className={classes.head}>麦友交流群</h3>
                <Grid container justify="center" className={classes.body}>
                    <Grid item xs={6}>
                        <Button dense href="#" className={classes.item}>Telegram群组</Button>
                    </Grid>
                    <Grid item xs={6}>
                        <Button dense href="#" className={classes.item}>非官方QQ群</Button>
                    </Grid>
                </Grid>
            </div>
        )
    }
}

export default withStyles(styles)(Group)