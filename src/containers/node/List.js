import React, {Component} from "react"
import {connect} from "react-redux"
import {Link} from "react-router-dom"

import * as Node from "../../actions/Node"
import * as Pubsub from "../../actions/Pubsub"
import {NODE_LIST} from "../../constants/ActionTypes"

import {Button, IconButton, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, withStyles} from "material-ui"
import {Add as AddIcon, Remove as RemoveIcon} from "material-ui-icons"

import AddNode from "./Add"

const mapStateToProps = (state) => ({
    list: state.node.list,
})
const mapDispatchToProps = (dispatch) => ({
    sub: () => dispatch(Pubsub.add(NODE_LIST)),
    unsub: () => dispatch(Pubsub.remove(NODE_LIST)),
    show: (parent = null) => dispatch(Node.show(parent)),
    remove: id => dispatch(Node.remove(id)),
})

const styles = theme => ({
    a: {
        textDecoration: "none",
    },
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
    remove: {
        position: "absolute",
        top: "0px",
        right: "45px",
    },
    total: {
        fontSize: "14px",
        padding: "10px 0 5px 0",
    },
})

class List extends Component {

    state = {
        // 欲删除节点ID
        remove: "",
    }

    // 组件装载
    componentWillMount() {
        this.props.sub()
    }

    // 组件卸载
    componentWillUnmount() {
        this.props.unsub()
    }

    // 格式化列表数据
    format(list) {
        list = JSON.parse(JSON.stringify(list))

        let tmp = {}
        for (let x of list) {
            if (!x.parent) {
                tmp[x.id] = x
                continue
            }

            if (tmp[x.parent].child === undefined) {
                tmp[x.parent].child = []
            }
            tmp[x.parent].child.push(x)
        }

        return Object.values(tmp)
    }

    // 删除节点
    remove() {
        this.setState({remove: ""})
        this.props.remove(this.state.remove)
    }

    render() {
        const classes = this.props.classes
        let list = this.format(this.props.list)

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

                {list.map(v =>
                    <div key={v.id} className={classes.block}>
                        <h3 className={classes.head}>{v.title}</h3>
                        <div className={classes.body}>
                            {v.child && v.child.map(w =>
                                <Link key={w.id} to={`/node/${w.name}`} className={classes.a}>
                                    <Button dense className={classes.item}>{w.title}</Button>
                                </Link>
                            )}
                        </div>

                        <IconButton aria-label="Remove" className={classes.remove} onClick={() => this.setState({remove: v.id})}>
                            <RemoveIcon />
                        </IconButton>
                        <IconButton aria-label="Add" className={classes.add} onClick={() => this.props.show(v.id)}>
                            <AddIcon />
                        </IconButton>
                    </div>
                )}

                {/* 添加节点模态框 */}
                <AddNode />

                {/* 删除节点模态框 */}
                <Dialog open={this.state.remove !== ""} onRequestClose={() => this.setState({remove: ""})}>
                    <DialogTitle>删除确认</DialogTitle>
                    <DialogContent>
                        <DialogContentText>
                            你确定要删除这个节点么? 此操作无可挽回!
                        </DialogContentText>
                    </DialogContent>
                    <DialogActions>
                        <Button onClick={() => this.setState({remove: ""})} color="primary">
                            取消
                        </Button>
                        <Button onClick={this.remove.bind(this)} color="primary">
                            确定删除
                        </Button>
                    </DialogActions>
                </Dialog>
            </div>
        )
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(withStyles(styles)(List))