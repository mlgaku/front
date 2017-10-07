import React, {Component} from "react"
import {connect} from "react-redux"
import Validator from "../../utils/Validator"

import {hideParent, submit} from "../../actions/Node"

import {
    Button, TextField, Dialog, Snackbar,
    DialogActions, DialogContent, DialogTitle,
} from "material-ui"

const mapStateToProps = (state) => ({
    node: state.node.parent,
})
const mapDispatchToProps = (dispatch) => ({
    hide: function() {
        this.setState({name: ""})
        dispatch(hideParent())
    },
    submit: function () {
        const err = Validator(this.state, {
            "name^名称": "required",
        }, {
            required: ":name 不能为空",
        })
        if (err) {
            this.setState({msg: err})
            return
        }

        dispatch(submit(this.state.name, this.state.password))
    }
})

class AddParent extends Component {
    state = {
        msg: "",
        name: ""
    }

    render () {
        return (
            <div>
                <Dialog open={this.props.node.show} onRequestClose={this.props.hide.bind(this)}>
                    <DialogTitle>父节点</DialogTitle>
                    <DialogContent>
                        <TextField margin="dense" onChange={e => this.setState({name: e.target.value})} label="名称" fullWidth autoFocus required />
                    </DialogContent>
                    <DialogActions>
                        <Button onClick={this.props.submit.bind(this)} color="primary">添加</Button>
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

export default connect(mapStateToProps, mapDispatchToProps)(AddParent)