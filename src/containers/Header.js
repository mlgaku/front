import React, {Component} from "react"
import {connect} from "react-redux"

import {NavLink} from "react-router-dom"
import {Grid, AppBar, Toolbar, Typography, Button, withStyles} from "material-ui"

// 登录
import Login from "./Login"
import {show as showLogin} from "../actions/Login"

// 注册
import Register from "./Register"
import {show as showRegister} from "../actions/Register"

// 已登录显示
import Notice from "./Notice"
import Myself from "./Myself"

const mapStateToProps = (state) => ({
    isLogin: state.login.logged
})
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
    link: {
        marginLeft: "6px",
        textDecoration: "none",
    },
    active: {
        display: "inline-block",
        backgroundColor: "rgba(255, 255, 255, 0.12)",
    },
    barColor: {
        backgroundColor: "#499ef3",
    },
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
                                    <NavLink to="/" className={classes.link} activeClassName={classes.active} exact>
                                        <Button dense color="contrast">首页</Button>
                                    </NavLink>
                                    <NavLink to="/node" className={classes.link} activeClassName={classes.active}>
                                        <Button dense color="contrast">节点</Button>
                                    </NavLink>
                                    <NavLink to="/rank" className={classes.link} activeClassName={classes.active}>
                                        <Button dense color="contrast">排名榜</Button>
                                    </NavLink>
                                </Typography>
                                {
                                    this.props.isLogin ? (
                                        <div>
                                            <Notice />
                                            <Myself />
                                        </div>
                                    ) : (
                                        <div>
                                            <Button dense color="contrast" onClick={() => this.props.showRegister()}>注册</Button>
                                            <Button dense color="contrast" onClick={() => this.props.showLogin()}>登录</Button>
                                        </div>
                                    )
                                }
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