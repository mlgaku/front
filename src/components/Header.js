import React, {Component} from "react"
import {Grid, AppBar, Toolbar, Typography, Button, withStyles} from "material-ui"

const styles = theme => ({
    root: {
        width: "100%",
    },
    logo: {
        marginRight: "40px",
        verticalAlign: "top",
    },
    flex: {
        flex: 1,
    },
    barColor: {
            backgroundColor: "#499ef3",
    }
})

class Header extends Component {
    render() {
        const classes = this.props.classes
        return (
            <AppBar position="static" className={classes.barColor}>
                <Grid container justify="center" spacing={0}>
                    <Grid item xs={8}>
                        <Toolbar>
                            <Typography type="title" color="inherit" className={classes.flex}>
                                <img src="/images/logo.png" alt="logo" className={classes.logo} />
                                <Button dense color="contrast">首页</Button>
                                <Button dense color="contrast">主题</Button>
                                <Button dense color="contrast">节点</Button>
                            </Typography>
                            <Button dense color="contrast">注册</Button>
                            <Button dense color="contrast">登录</Button>
                        </Toolbar>
                    </Grid>
                </Grid>
            </AppBar>
        )
    }
}

export default withStyles(styles)(Header)