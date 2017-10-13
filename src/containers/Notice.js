import React, {Component} from "react"
import {connect} from "react-redux"
import {Link} from "react-router-dom"

import * as Pubsub from "../actions/Pubsub"
import {remove} from "../actions/Notice"
import {NOTICE_LIST} from "../constants/ActionTypes"

import {ShakeRotate} from "reshake"
import {IconButton, Menu, MenuItem, withStyles} from "material-ui"
import {Delete as DeleteIcon, Notifications as NotificationsIcon} from "material-ui-icons"

const mapStateToProps = (state) => ({
    notice: state.notice,
    loginInfo: state.login.info,
})
const mapDispatchToProps = (dispatch) => ({
    sub: (master) => dispatch(Pubsub.add(NOTICE_LIST, {master})),
    unsub: () => dispatch(Pubsub.remove(NOTICE_LIST)),
    remove: (id) => dispatch(remove(id)),
})

const styles = theme => ({
    a: {
        color: "black",
        textDecoration: "none",
    },
    div: {
        display: "inline-block",
    },
    menu: {
        marginTop: "35px",
        marginLeft: "-350px",
    },
    item: {
        height: "auto",
        cursor: "auto",
        fontSize: "13px",
        wordWrap: "break-word",
        whiteSpace: "normal",
        paddingRight: "10px",
        borderBottom: "1px solid #e4e4e4",
    },
    title: {
        cursor: "auto",
        marginTop: "-10px",
        marginBottom: "8px",
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

    // 组件装载
    componentWillMount() {
        this.props.sub(this.props.loginInfo.id)
    }

    // 组件卸载
    componentWillUnmount() {
        this.props.unsub()
    }

    // 显示通知
    handleClick = event => {
        this.setState({open: true, anchorEl: event.currentTarget})
    }

    // 隐藏通知
    handleRequestClose = () => {
        this.setState({open: false})
    }

    // 移除通知
    removeNotice(id) {
        this.props.remove(id)
    }

    render () {
        const classes = this.props.classes

        return (
            <div className={classes.div}>
                <IconButton color="contrast" aria-label="Notifications" aria-owns={this.state.open ? "long-menu" : null} aria-haspopup="true" onClick={this.handleClick}>
                    {this.props.notice.list.length ?
                        <ShakeRotate fixed style={{lineHeight: "0"}}><NotificationsIcon /></ShakeRotate>
                        : <NotificationsIcon />}
                </IconButton>

                <Menu className={classes.menu} anchorEl={this.state.anchorEl} open={this.state.open} onRequestClose={this.handleRequestClose} PaperProps={{style: {width: 400, height: 330}}}>
                    <MenuItem key="title" className={classes.title}>通知</MenuItem>
                    {this.props.notice.list.map(x => {
                        switch (x.type) {
                            case 1: // 回复
                                return (
                                    <MenuItem key={x.id} className={classes.item}>
                                        <div>{x.user} 回复了你的主题 <Link to={`/topic/${x.topic_id}`} className={classes.a}>{x.topic_title}</Link></div>
                                        <IconButton aria-label="Delete" onClick={() => this.removeNotice(x.id)}><DeleteIcon /></IconButton>
                                    </MenuItem>
                                )
                            case 2: // At
                                return (
                                    <span>at</span>
                                )
                        }
                    })}
                </Menu>
            </div>
        )
    }

}

export default connect(mapStateToProps, mapDispatchToProps)(withStyles(styles)(Notice))