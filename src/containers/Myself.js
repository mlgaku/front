import React, {Component} from "react"
import {connect} from "react-redux"
import {logout} from "../actions/Login"

import {Avatar, IconButton, Menu, MenuItem, withStyles} from "material-ui"

const mapStateToProps = (state) => ({
    loginInfo: state.login.info,
})
const mapDispatchToProps = (dispatch) => ({
    logout: () => dispatch(logout()),
})

const styles = theme => ({
    div: {
        display: "inline",
    },
    icon: {
        marginLeft: "5px",
        verticalAlign: "bottom",
    },
    menu: {
        marginTop: "35px",
        marginLeft: "-200px",
    },
    info: {
        marginTop: "-10px",
        marginBottom: "8px",
        paddingTop: "20px",
        paddingBottom: "20px",
        backgroundColor: "#eee !important",
    },
    name: {
        fontSize: "15px",
        fontWeight: "500",
        marginTop: "5px",
        lineHeight: "20px",
    },
    email: {
        fontSize: "13px",
        fontWeight: "400",
    },
    avatar: {
        width: "30px",
        height: "30px",
    },
})

class Myself extends Component {
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
                <IconButton className={classes.icon} color="contrast" aria-label="Avatar" aria-owns={this.state.open ? "my-menu" : null} aria-haspopup="true" onClick={this.handleClick}>
                    <Avatar src="/images/avatar.png" className={classes.avatar} />
                </IconButton>

                <Menu id="my-menu" className={classes.menu} anchorEl={this.state.anchorEl} open={this.state.open} onRequestClose={this.handleRequestClose} PaperProps={{style: {width: 250}}}>
                    <MenuItem key="info" className={classes.info}>
                        <IconButton color="contrast" aria-label="Avatar">
                            <Avatar src="/images/avatar.png" />
                        </IconButton>
                        <div style={{marginLeft: "10px"}}>
                            <h3 className={classes.name}>{this.props.loginInfo.name}</h3>
                            <span className={classes.email}>{this.props.loginInfo.email}</span>
                        </div>
                    </MenuItem>
                    <MenuItem key="balance" onClick={this.handleRequestClose}>余额</MenuItem>
                    <MenuItem key="setting" onClick={this.handleRequestClose}>设置</MenuItem>
                    <MenuItem key="logout" onClick={() => this.props.logout()}>退出</MenuItem>
                </Menu>
            </div>
        )
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(withStyles(styles)(Myself))