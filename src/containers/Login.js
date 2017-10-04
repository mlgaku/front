import React, {Component} from "react"
import {connect} from "react-redux"
import {hide} from "./../actions/Login"

import {
    Button, TextField, Dialog,
    DialogActions, DialogContent, DialogContentText, DialogTitle
} from "material-ui"

const mapStateToProps = (state) => ({
    login: state.login
})
const mapDispatchToProps = (dispatch) => ({
    hideLogin: () => dispatch(hide())
})

class Login extends Component {
    render() {
        return (
            <div>
                <Dialog open={this.props.login.show} onRequestClose={() => this.props.hideLogin()}>
                    <DialogTitle>登录</DialogTitle>
                    <DialogContent>
                        <TextField autoFocus margin="dense" id="name" label="用户名" fullWidth />
                        <TextField autoFocus margin="dense" id="password" label="密码" fullWidth />
                    </DialogContent>
                    <DialogActions>
                        <Button onClick={() => this.props.hideLogin()} color="primary">
                            取消
                        </Button>
                        <Button onClick={() => this.props.hideLogin()} color="primary">
                            登录
                        </Button>
                    </DialogActions>
                </Dialog>
            </div>
        )
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Login)