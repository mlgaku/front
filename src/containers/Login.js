import React, {Component} from "react"
import {connect} from "react-redux"

import {hide} from "../actions/Login"

import {
    Button, TextField, Dialog,
    DialogActions, DialogContent, DialogTitle
} from "material-ui"

const mapStateToProps = (state) => ({
    login: state.login
})
const mapDispatchToProps = (dispatch) => ({
    hide: () => dispatch(hide())
})

class Login extends Component {
    render() {
        return (
            <div>
                <Dialog open={this.props.login.show} onRequestClose={() => this.props.hide()}>
                    <DialogTitle>登录</DialogTitle>
                    <DialogContent>
                        <TextField margin="dense" id="name" label="用户名" fullWidth autoFocus />
                        <TextField margin="dense" id="password" label="密码" fullWidth type="password" />
                    </DialogContent>
                    <DialogActions>
                        <Button onClick={() => this.props.hide()} color="primary">取消</Button>
                        <Button onClick={() => this.props.hide()} color="primary">登录</Button>
                    </DialogActions>
                </Dialog>
            </div>
        )
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Login)