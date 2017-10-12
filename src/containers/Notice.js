import React, {Component} from "react"
import {connect} from "react-redux"
import {Link} from "react-router-dom"

import * as Pubsub from "../actions/Pubsub"
import {NOTICE_LIST} from "../constants/ActionTypes"

import {Shake, ShakeRotate} from "reshake"
import {IconButton, Badge, Menu, MenuItem, withStyles} from "material-ui"
import {Notifications} from "material-ui-icons"

const mapStateToProps = (state) => ({
    notice: state.notice,
    loginInfo: state.login.info,
})
const mapDispatchToProps = (dispatch) => ({
    sub: (master) => dispatch(Pubsub.add(NOTICE_LIST, {master})),
    unsub: () => dispatch(Pubsub.remove(NOTICE_LIST)),
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

    // 组件装载
    componentWillMount() {
        this.props.sub(this.props.loginInfo.id)
    }

    // 组件卸载
    componentWillUnmount() {
        this.props.unsub()
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
                    {this.props.notice.list.length ?
                        <ShakeRotate fixed style={{lineHeight: "0"}}><Notifications /></ShakeRotate>
                        : <Notifications />}
                </IconButton>

                <Menu className={classes.menu} anchorEl={this.state.anchorEl} open={this.state.open} onRequestClose={this.handleRequestClose} PaperProps={{style: {width: 400, height: 330}}}>
                    <MenuItem key="title" className={classes.title}>通知</MenuItem>
                    {this.props.notice.list.map(x => {
                        switch (x.type) {
                            case 1: // 回复
                                return (
                                    <MenuItem key={x.id} className={classes.item + " " + (x.read?classes.read:"")}>
                                        {x.user} 回复了你的主题 <Link to={`/topic/${x.topic_id}`} className={classes.a + " " + (x.read?classes.read:"")}>{x.topic_title}</Link>
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