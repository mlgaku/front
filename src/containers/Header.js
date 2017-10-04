import React, {Component} from "react"
import {connect} from "react-redux"

import {Grid, AppBar, Toolbar, Typography, Button, withStyles} from "material-ui"

// 登录
import Login from "./../containers/Login"
import {show as showLogin} from "./../actions/Login"

// 注册
import Register from "./../containers/Register"
import {show as showRegister} from "./../actions/Register"

const mapStateToProps = (state) => ({})
const mapDispatchToProps = (dispatch) => ({
    showLogin: () => dispatch(showLogin()),
    showRegister: () => dispatch(showRegister())
})

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
            <div>
                {/* 菜单 */}
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
                                <Button dense color="contrast" onClick={() => this.props.showRegister()}>注册</Button>
                                <Button dense color="contrast" onClick={() => this.props.showLogin()}>登录</Button>
                            </Toolbar>
                        </Grid>
                    </Grid>
                </AppBar>

                {/* 登录模态框 */}
                <Login />

                {/* 注册模态框 */}
                <Register />
            </div>
        )
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(withStyles(styles)(Header))