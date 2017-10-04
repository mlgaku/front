import React, {Component} from "react"

import {Avatar, List, ListItem, withStyles} from "material-ui"
import {deepOrange, deepPurple} from "material-ui/colors"

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
    orangeAvatar: {
        backgroundColor: deepOrange[500],
    },
    purpleAvatar: {
        backgroundColor: deepPurple[500],
    },
})

class Topic extends Component {
    render() {
        const classes = this.props.classes

        return (
            <div className={classes.root}>
                <List>
                    <ListItem button>
                        <Avatar className={classes.orangeAvatar}>三</Avatar>
                        <div className={classes.topic}>
                            <h3 className={classes.topicTit}>cloudxns 实名认证有 bug？</h3>
                            <div className={classes.topicInfo}>
                                <span className={classes.chip}>Android</span>
                                abmin521 • 几秒前 • 最后回复 isnowify
                            </div>
                        </div>
                    </ListItem>
                    <ListItem button>
                        <Avatar src="/images/avatar.png" />
                        <div className={classes.topic}>
                            <h3 className={classes.topicTit}>未 root 一加一莫名中毒（附图和 apk）</h3>
                            <div className={classes.topicInfo}>
                                <span className={classes.chip}>Android</span>
                                abmin521 • 5 分钟前 • 最后回复 isnowify
                            </div>
                        </div>
                    </ListItem>
                    <ListItem button>
                        <Avatar className={classes.purpleAvatar}>Ot</Avatar>
                        <div className={classes.topic}>
                            <h3 className={classes.topicTit}>后续，滴滴单方面结束投诉：被滴滴司机打人掐脖子，滴滴公司不作为甚至偏向司机</h3>
                            <div className={classes.topicInfo}>
                                <span className={classes.chip}>Android</span>
                                abmin521 • 4 小时前 • 最后回复 isnowify
                            </div>
                        </div>
                    </ListItem>
                    <ListItem button>
                        <Avatar className={classes.orangeAvatar}>三</Avatar>
                        <div className={classes.topic}>
                            <h3 className={classes.topicTit}>cloudxns 实名认证有 bug？</h3>
                            <div className={classes.topicInfo}>
                                <span className={classes.chip}>Android</span>
                                abmin521 • 几秒前 • 最后回复 isnowify
                            </div>
                        </div>
                    </ListItem>
                    <ListItem button>
                        <Avatar src="/images/avatar.png" />
                        <div className={classes.topic}>
                            <h3 className={classes.topicTit}>未 root 一加一莫名中毒（附图和 apk）</h3>
                            <div className={classes.topicInfo}>
                                <span className={classes.chip}>Android</span>
                                abmin521 • 5 分钟前 • 最后回复 isnowify
                            </div>
                        </div>
                    </ListItem>
                    <ListItem button>
                        <Avatar className={classes.purpleAvatar}>Ot</Avatar>
                        <div className={classes.topic}>
                            <h3 className={classes.topicTit}>后续，滴滴单方面结束投诉：被滴滴司机打人掐脖子，滴滴公司不作为甚至偏向司机</h3>
                            <div className={classes.topicInfo}>
                                <span className={classes.chip}>Android</span>
                                abmin521 • 4 小时前 • 最后回复 isnowify
                            </div>
                        </div>
                    </ListItem>
                    <ListItem button>
                        <Avatar className={classes.orangeAvatar}>三</Avatar>
                        <div className={classes.topic}>
                            <h3 className={classes.topicTit}>cloudxns 实名认证有 bug？</h3>
                            <div className={classes.topicInfo}>
                                <span className={classes.chip}>Android</span>
                                abmin521 • 几秒前 • 最后回复 isnowify
                            </div>
                        </div>
                    </ListItem>
                    <ListItem button>
                        <Avatar src="/images/avatar.png" />
                        <div className={classes.topic}>
                            <h3 className={classes.topicTit}>未 root 一加一莫名中毒（附图和 apk）</h3>
                            <div className={classes.topicInfo}>
                                <span className={classes.chip}>Android</span>
                                abmin521 • 5 分钟前 • 最后回复 isnowify
                            </div>
                        </div>
                    </ListItem>
                    <ListItem button>
                        <Avatar className={classes.purpleAvatar}>Ot</Avatar>
                        <div className={classes.topic}>
                            <h3 className={classes.topicTit}>后续，滴滴单方面结束投诉：被滴滴司机打人掐脖子，滴滴公司不作为甚至偏向司机</h3>
                            <div className={classes.topicInfo}>
                                <span className={classes.chip}>Android</span>
                                abmin521 • 4 小时前 • 最后回复 isnowify
                            </div>
                        </div>
                    </ListItem>
                    <ListItem button>
                        <Avatar className={classes.orangeAvatar}>三</Avatar>
                        <div className={classes.topic}>
                            <h3 className={classes.topicTit}>cloudxns 实名认证有 bug？</h3>
                            <div className={classes.topicInfo}>
                                <span className={classes.chip}>Android</span>
                                abmin521 • 几秒前 • 最后回复 isnowify
                            </div>
                        </div>
                    </ListItem>
                    <ListItem button>
                        <Avatar src="/images/avatar.png" />
                        <div className={classes.topic}>
                            <h3 className={classes.topicTit}>未 root 一加一莫名中毒（附图和 apk）</h3>
                            <div className={classes.topicInfo}>
                                <span className={classes.chip}>Android</span>
                                abmin521 • 5 分钟前 • 最后回复 isnowify
                            </div>
                        </div>
                    </ListItem>
                    <ListItem button>
                        <Avatar className={classes.purpleAvatar}>Ot</Avatar>
                        <div className={classes.topic}>
                            <h3 className={classes.topicTit}>后续，滴滴单方面结束投诉：被滴滴司机打人掐脖子，滴滴公司不作为甚至偏向司机</h3>
                            <div className={classes.topicInfo}>
                                <span className={classes.chip}>Android</span>
                                abmin521 • 4 小时前 • 最后回复 isnowify
                            </div>
                        </div>
                    </ListItem>
                    <ListItem button>
                        <Avatar className={classes.orangeAvatar}>三</Avatar>
                        <div className={classes.topic}>
                            <h3 className={classes.topicTit}>cloudxns 实名认证有 bug？</h3>
                            <div className={classes.topicInfo}>
                                <span className={classes.chip}>Android</span>
                                abmin521 • 几秒前 • 最后回复 isnowify
                            </div>
                        </div>
                    </ListItem>
                    <ListItem button>
                        <Avatar src="/images/avatar.png" />
                        <div className={classes.topic}>
                            <h3 className={classes.topicTit}>未 root 一加一莫名中毒（附图和 apk）</h3>
                            <div className={classes.topicInfo}>
                                <span className={classes.chip}>Android</span>
                                abmin521 • 5 分钟前 • 最后回复 isnowify
                            </div>
                        </div>
                    </ListItem>
                    <ListItem button>
                        <Avatar className={classes.purpleAvatar}>Ot</Avatar>
                        <div className={classes.topic}>
                            <h3 className={classes.topicTit}>后续，滴滴单方面结束投诉：被滴滴司机打人掐脖子，滴滴公司不作为甚至偏向司机</h3>
                            <div className={classes.topicInfo}>
                                <span className={classes.chip}>Android</span>
                                abmin521 • 4 小时前 • 最后回复 isnowify
                            </div>
                        </div>
                    </ListItem>
                    <ListItem button>
                        <Avatar className={classes.orangeAvatar}>三</Avatar>
                        <div className={classes.topic}>
                            <h3 className={classes.topicTit}>cloudxns 实名认证有 bug？</h3>
                            <div className={classes.topicInfo}>
                                <span className={classes.chip}>Android</span>
                                abmin521 • 几秒前 • 最后回复 isnowify
                            </div>
                        </div>
                    </ListItem>
                    <ListItem button>
                        <Avatar src="/images/avatar.png" />
                        <div className={classes.topic}>
                            <h3 className={classes.topicTit}>未 root 一加一莫名中毒（附图和 apk）</h3>
                            <div className={classes.topicInfo}>
                                <span className={classes.chip}>Android</span>
                                abmin521 • 5 分钟前 • 最后回复 isnowify
                            </div>
                        </div>
                    </ListItem>
                    <ListItem button>
                        <Avatar className={classes.purpleAvatar}>Ot</Avatar>
                        <div className={classes.topic}>
                            <h3 className={classes.topicTit}>后续，滴滴单方面结束投诉：被滴滴司机打人掐脖子，滴滴公司不作为甚至偏向司机</h3>
                            <div className={classes.topicInfo}>
                                <span className={classes.chip}>Android</span>
                                abmin521 • 4 小时前 • 最后回复 isnowify
                            </div>
                        </div>
                    </ListItem>
                    <ListItem button>
                        <Avatar className={classes.orangeAvatar}>三</Avatar>
                        <div className={classes.topic}>
                            <h3 className={classes.topicTit}>cloudxns 实名认证有 bug？</h3>
                            <div className={classes.topicInfo}>
                                <span className={classes.chip}>Android</span>
                                abmin521 • 几秒前 • 最后回复 isnowify
                            </div>
                        </div>
                    </ListItem>
                    <ListItem button>
                        <Avatar src="/images/avatar.png" />
                        <div className={classes.topic}>
                            <h3 className={classes.topicTit}>未 root 一加一莫名中毒（附图和 apk）</h3>
                            <div className={classes.topicInfo}>
                                <span className={classes.chip}>Android</span>
                                abmin521 • 5 分钟前 • 最后回复 isnowify
                            </div>
                        </div>
                    </ListItem>
                </List>
            </div>
        )
    }
}

export default withStyles(styles)(Topic)