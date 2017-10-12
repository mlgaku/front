import React, {Component} from "react"
import {connect} from "react-redux"
import {logout} from "../actions/Login"

import {Avatar, IconButton, Menu, MenuItem, withStyles} from "material-ui"
import {Notifications} from "material-ui-icons"

const mapStateToProps = (state) => ({
    loginInfo: state.login.info,
})
const mapDispatchToProps = (dispatch) => ({
    logout: () => dispatch(logout()),
})

const styles = theme => ({
    a: {
        color: "black",
        textDecoration: "none",
    },
    div: {
        display: "inline",
    },
    menu: {
        marginTop: "35px",
        marginLeft: "-350px",
    },
    item: {
        cursor: "auto",
        fontSize: "13px",
        marginTop: "5px",
        wordWrap: "break-word",
        whiteSpace: "normal",
        display: "block",
        height: "auto",
    },
    read: {
        color: "#bfbfbf",
    },
    title: {
        cursor: "auto",
        marginTop: "-10px",
        paddingTop: "15px",
        paddingBottom: "15px",
        backgroundColor: "#eee !important",
    },
})

class Notice extends Component {
    state = {
        open: false,
        anchorEl: null,
    }

    handleClick = event => {
        this.setState({ open: true, anchorEl: event.currentTarget })
    }

    handleRequestClose = () => {
        this.setState({ open: false })
    }

    render () {
        const classes = this.props.classes

        return (
            <div className={classes.div}>
                <IconButton color="contrast" aria-label="Notifications" aria-owns={this.state.open ? "long-menu" : null} aria-haspopup="true" onClick={this.handleClick}>
                    <Notifications />
                </IconButton>

                <Menu className={classes.menu} anchorEl={this.state.anchorEl} open={this.state.open} onRequestClose={this.handleRequestClose} PaperProps={{style: {width: 400, height: 330}}}>
                    <MenuItem key="title" className={classes.title}>通知</MenuItem>
                    <MenuItem key="one" className={classes.item}>
                        sxyazi 回复了你的主题 <a href="" className={classes.a}>cn.bing.com 经常性的打不开</a>
                    </MenuItem>
                    <MenuItem key="two" className={classes.item}>
                        anosann 回复了你的主题 <a href="" className={classes.a}>麦乐学园非官方QQ交流群列表</a>
                    </MenuItem>
                    <MenuItem key="three" className={classes.item + " " + classes.read}>
                        saximi 回复了你的主题 <a href="" className={classes.a + " " + classes.read}>Electron 环境下装了 Sqlite3 后，每次再装新的包都提示 Sqlite3 找不到模块，要重新编译 Sqlite3 才行</a>
                    </MenuItem>
                </Menu>
            </div>
        )
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(withStyles(styles)(Notice))