import React, {Component} from "react"
import {connect} from "react-redux"
import * as Node from "../../actions/Node"
import * as Pubsub from "../../actions/Pubsub"
import {NODE_SUB, NODE_UNSUB} from "../../constants/ActionTypes"

import {Button, IconButton, withStyles} from "material-ui"
import AddIcon from "material-ui-icons/Add"

import AddNode from "./Add"

const mapStateToProps = (state) => ({
})
const mapDispatchToProps = (dispatch) => ({
    sub: () => dispatch(Pubsub.add(NODE_SUB)),
    unsub: () => dispatch(Pubsub.remove(NODE_UNSUB)),
    show: (parent = null) => dispatch(Node.show(parent)),
})

const styles = theme => ({
    block: {
        padding: "15px",
        position: "relative",
        backgroundColor: "white",
    },
    head: {
        color: "#333",
        fontSize: "15px",
        padding: "0 0 10px 0",
        borderBottom: "1px solid #eaeaea",
    },
    body: {
        paddingTop: "5px",
    },
    item: {
        color: "#777",
        fontSize: "12px",
        padding: "0 8px",
        marginTop: "8px",
        marginRight: "8px",
        fontWeight: "400",
        borderRadius: "20px",
        textTransform: "none",
        border: "1px solid #eaeaea",
    },
    add: {
        position: "absolute",
        top: "0px",
        right: "0px",
    },
    total: {
        fontSize: "14px",
        padding: "10px 0 5px 0",
    },
})

class List extends Component {

    // 组件装载
    componentWillMount() {
        this.props.sub()
    }

    // 组件卸载
    componentWillUnmount() {
        this.props.unsub()
    }

    render() {
        const classes = this.props.classes

        return (
            <div>
                <div className={classes.block}>
                    <h3 className={classes.head}>全部节点</h3>
                    <div className={classes.body}>
                        <p className={classes.total}>共有 3 个父节点, 22 个子节点</p>
                    </div>
                    <IconButton aria-label="Add" className={classes.add} onClick={() => this.props.show()}>
                        <AddIcon />
                    </IconButton>
                </div>
                <br />
                <div className={classes.block}>
                    <h3 className={classes.head}>探索&分享</h3>
                    <div className={classes.body}>
                        {["会员互动","文章分享","优秀工具"].map((x) => (
                            <Button dense key={x} href="#" className={classes.item}>{x}</Button>
                        ))}
                    </div>
                    <IconButton aria-label="Add" className={classes.add} onClick={() => this.props.show("aaaa")}>
                        <AddIcon />
                    </IconButton>
                </div>
                <div className={classes.block}>
                    <h3 className={classes.head}>World</h3>
                    <div className={classes.body}>
                        {["笔记","随想","奇思妙想","自言自语"].map((x) => (
                            <Button dense key={x} href="#" className={classes.item}>{x}</Button>
                        ))}
                    </div>
                    <IconButton aria-label="Add" className={classes.add} onClick={() => this.props.show("bbbb")}>
                        <AddIcon />
                    </IconButton>
                </div>
                <div className={classes.block}>
                    <h3 className={classes.head}>Geek</h3>
                    <div className={classes.body}>
                        {["Android","C#","C/C++","Vue","React","Angular","HTML","iOS","Java","JavaScript","Linux","PHP","Python","Golang","Erlang"].map((x) => (
                            <Button dense key={x} href="#" className={classes.item}>{x}</Button>
                        ))}
                    </div>
                    <IconButton aria-label="Add" className={classes.add} onClick={() => this.props.show("cccc")}>
                        <AddIcon />
                    </IconButton>
                </div>

                {/* 添加节点模态框 */}
                <AddNode />
            </div>
        )
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(withStyles(styles)(List))