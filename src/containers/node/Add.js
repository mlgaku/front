import React, {Component} from "react"
import {connect} from "react-redux"
import Validator from "../../utils/Validator"

import {hide, add} from "../../actions/Node"

import {
    Button, TextField, Dialog, Snackbar,
    DialogActions, DialogContent, DialogTitle,
} from "material-ui"

const mapStateToProps = (state) => ({
    node: state.node,
})
const mapDispatchToProps = (dispatch) => ({
    hide: function() {
        this.setState({name: ""})
        dispatch(hide())
    },
    add: function () {
        const err = Validator(this.state, {
            "name^名称": "required|max:30|alpha_num",
            "title^标题": "required|max:30",
        }, {
            required: ":name 不能为空",
            max: ":name 不能大于 :min 位",
            alpha_num: ":name 只能为字母或数字",
        })
        if (err) {
            this.setState({msg: err})
            return
        }

        dispatch(add(this.state.name, this.state.title, this.props.node.parent))
    }
})

class Add extends Component {
    state = {
        msg: "",
        name: "",
        title: ""
    }

    render () {
        return (
            <div>
                <Dialog open={this.props.node.show} onRequestClose={this.props.hide.bind(this)}>
                    <DialogTitle>加{this.props.node.parent ? "子" : "父"}节点</DialogTitle>
                    <DialogContent>
                        <TextField margin="dense" onChange={e => this.setState({name: e.target.value})} label="名称" fullWidth autoFocus required />
                        <TextField margin="dense" onChange={e => this.setState({title: e.target.value})} label="标题" fullWidth required />
                    </DialogContent>
                    <DialogActions>
                        <Button onClick={this.props.hide.bind(this)} color="primary">取消</Button>
                        <Button onClick={this.props.add.bind(this)} color="primary">添加</Button>
                    </DialogActions>
                </Dialog>
                <Snackbar
                  anchorOrigin={{vertical: "top", horizontal: "center", direction: "down"}}
                  open={this.state.msg !== "" || this.props.node.msg !== ""}
                  onRequestClose={() => {this.setState({msg:""}); this.props.node.msg=""}}
                  SnackbarContentProps={{
                      "aria-describedby": "message-id",
                  }}
                  message={<span id="message-id">{this.state.msg || this.props.node.msg}</span>}
                />
            </div>
        )
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Add)