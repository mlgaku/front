import React, {Component} from "react"
import {connect} from "react-redux"
import Validator from "../utils/Validator"

import {hide, submit} from "../actions/Login"

import {
    Button, TextField, Dialog, Snackbar,
    DialogActions, DialogContent, DialogTitle,
} from "material-ui"

const mapStateToProps = (state) => ({
    login: state.login,
})
const mapDispatchToProps = (dispatch) => ({
    hide: function() {
        this.setState({name: "", password: ""})
        dispatch(hide())
    },
    submit: function () {
        const err = Validator(this.state, {
            "name^用户名": "required",
            "password^密码": "required",
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

class Login extends Component {
    state = {
        msg: "",
        name: "",
        password: ""
    }

    render () {
        return (
            <div>
                <Dialog open={this.props.login.show} onRequestClose={this.props.hide.bind(this)}>
                    <DialogTitle>登录</DialogTitle>
                    <DialogContent>
                        <TextField margin="dense" onChange={e => this.setState({name: e.target.value})} label="用户名" fullWidth autoFocus required />
                        <TextField margin="dense" onChange={e => this.setState({password: e.target.value})} label="密码" fullWidth type="password" required />
                    </DialogContent>
                    <DialogActions>
                        <Button onClick={this.props.hide.bind(this)} color="primary">取消</Button>
                        <Button onClick={this.props.submit.bind(this)} color="primary">登录</Button>
                    </DialogActions>
                </Dialog>
                <Snackbar
                  anchorOrigin={{vertical: "top", horizontal: "center", direction: "down"}}
                  open={this.state.msg !== "" || this.props.login.msg !== ""}
                  onRequestClose={() => {this.setState({msg:""}); this.props.login.msg=""}}
                  SnackbarContentProps={{
                      "aria-describedby": "message-id",
                  }}
                  message={<span id="message-id">{this.state.msg || this.props.login.msg}</span>}
                />
            </div>
        )
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Login)