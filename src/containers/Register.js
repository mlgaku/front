import React, {Component} from "react"
import {connect} from "react-redux"

import {hide} from "../actions/Register"

import {
    Button, TextField, Dialog,
    DialogActions, DialogContent, DialogTitle
} from "material-ui"

const mapStateToProps = (state) => ({
    register: state.register,
})
const mapDispatchToProps = (dispatch) => ({
    hide: () => dispatch(hide()),
})

class Register extends Component {
    render() {
        return (
            <div>
                <Dialog open={this.props.register.show} onRequestClose={() => this.props.hide()}>
                    <DialogTitle>注册</DialogTitle>
                    <DialogContent>
                        <TextField margin="dense" id="name" label="用户名" fullWidth autoFocus />
                        <TextField margin="dense" id="password" label="密码" fullWidth type="password" />
                        <TextField margin="dense" id="re-password" label="确认密码" fullWidth type="password" />
                    </DialogContent>
                    <DialogActions>
                        <Button onClick={() => this.props.hide()} color="primary">取消</Button>
                        <Button onClick={() => this.props.hide()} color="primary">注册</Button>
                    </DialogActions>
                </Dialog>
            </div>
        )
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Register)