import React, {Component} from "react"
import {connect} from "react-redux"

import {hide, submit} from "../actions/Login"

import {
    Button, TextField, Dialog, Snackbar,
    DialogActions, DialogContent, DialogTitle,
} from "material-ui"

const mapStateToProps = (state) => ({
    login: state.login,
})
const mapDispatchToProps = (dispatch) => ({
    hide: () => dispatch(hide()),
    submit: (name, password) => dispatch(submit(name, password)),
})

class Login extends Component {
    render() {
        return (
            <div>
                <Dialog open={this.props.login.show} onRequestClose={() => this.props.hide()}>
                    <DialogTitle>登录</DialogTitle>
                    <DialogContent>
                        <TextField margin="dense" onChange={e => this.setState({name: e.target.value})} label="用户名" fullWidth autoFocus required />
                        <TextField margin="dense" onChange={e => this.setState({password: e.target.value})} label="密码" fullWidth type="password" required />
                    </DialogContent>
                    <DialogActions>
                        <Button onClick={() => this.props.hide()} color="primary">取消</Button>
                        <Button onClick={() => this.props.submit(this.state.name, this.state.password)} color="primary">登录</Button>
                    </DialogActions>
                </Dialog>
                <Snackbar
                  anchorOrigin={{vertical: "top", horizontal: "center", direction: "down"}}
                  open={this.props.login.msg !== ""}
                  onRequestClose={() => this.props.login.msg=""}
                  SnackbarContentProps={{
                    'aria-describedby': 'message-id',
                  }}
                  message={<span id="message-id">{this.props.login.msg}</span>}
                />
            </div>
        )
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Login)