import React, {Component} from "react"
import {connect} from "react-redux"

import {Avatar, List, ListItem, withStyles} from "material-ui"
import {pink, purple, indigo, blue, lightBlue, cyan, teal, green, deepOrange, deepPurple} from "material-ui/colors"

const mapStateToProps = (state) => ({
    node: state.node,
    topic: state.topic,
})
const mapDispatchToProps = (dispatch) => ({
})

const styles = theme => ({
    root: {
        background: theme.palette.background.paper,
    },
    chip: {
        fontSize: "12px",
        padding: "2px 8px",
        marginRight: "5px",
        borderRadius: "10px",
        display: "inline-block",
        backgroundColor: "#efefef",
    },
    topic: {
        marginLeft: "15px",
    },
    topicTit: {
        fontSize: "16px",
        fontWeight: "400",
        lineHeight: "24px",
    },
    topicInfo: {
        fontSize: "13px",
        marginTop: "5px",
        color: "rgba(56, 56, 56, 0.54)",
        fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
    },
    avatar: {
        textTransform: "capitalize",
    },

    avatar0: {backgroundColor: pink[500]},
    avatar1: {backgroundColor: purple[500]},
    avatar2: {backgroundColor: indigo[500]},
    avatar3: {backgroundColor: blue[500]},
    avatar4: {backgroundColor: lightBlue[500]},
    avatar5: {backgroundColor: cyan[500]},
    avatar6: {backgroundColor: teal[500]},
    avatar7: {backgroundColor: green[500]},
    avatar8: {backgroundColor: deepOrange[500]},
    avatar9: {backgroundColor: deepPurple[500]},

})

class Info extends Component {

    // 格式化节点信息
    formatNode() {
        const node = []
        for (let x of this.props.node.list) {
            node[x.id] = x
        }
        if (this.props.node.info.id) {
            node[this.props.node.info.id] = this.props.node.info
        }
        return node
    }

    // 获取头像
    getAvatar(name) {
        if (/^[0-9a-zA-Z]*$/g.test(name)) {
            return name.substr(0, 2)
        }

        return name.substr(0, 1)
    }

    // 获取头像样式
    getAvatarStyle(name) {
        if (!name) {
            return 0
        }

        let num = 0
        for (let i=0; i<name.length; i++) {
            num += name.charCodeAt(i)
        }
        return num % 10
    }

    render() {
        const node = this.formatNode()
        const classes = this.props.classes

        return (
            <div className={classes.root}>
                <List>
                    {this.props.topic.list.map(x => (
                        <ListItem key={x.id} button>
                            <Avatar
                                className={classes.avatar + " " + eval(`classes.avatar${this.getAvatarStyle(x.author_id)}`)}
                            >{this.getAvatar(x.author)}</Avatar>
                            <div className={classes.topic}>
                                <h3 className={classes.topicTit}>{x.title}</h3>
                                <div className={classes.topicInfo}>
                                    <span className={classes.chip}>{node[x.node] && node[x.node].title}</span>
                                    {x.author} • 几秒前 • 最后回复 isnowify
                                </div>
                            </div>
                        </ListItem>
                    ))}
                </List>
            </div>
        )
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(withStyles(styles)(Info))