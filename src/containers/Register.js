import React, {Component} from "react"
import {connect} from "react-redux"
import Validator from "../utils/Validator"

import {hide, submit} from "../actions/Register"

import {
    Button, TextField, Dialog, Snackbar,
    DialogActions, DialogContent, DialogTitle,
} from "material-ui"

const mapStateToProps = (state) => ({
    register: state.register,
})
const mapDispatchToProps = (dispatch) => ({
    hide: function() {
        this.setState({name: "", email: "", password: ""})
        dispatch(hide())
    },
    submit: function() {
        const err = Validator(this.state, {
            "name^用户名": "required|min:4|max:15|alpha_num",
            "email^邮箱地址": "required|min:8|max:30|email",
            "password^密码": "required|min:8|max:20|alpha_num",
        }, {
            same: "两次输入密码不一致",
            required: ":name 不能为空",
            email: "请输入正确的 :name",
            min: ":name 不能小于 :min 位",
            max: ":name 不能大于 :min 位",
            alpha_num: ":name 只能为字母或数字",
        })
        if (err) {
            this.setState({msg: err})
            return
        }

        dispatch(submit(this.state.name, this.state.email, this.state.password))
    },
})

class Register extends Component {
    state = {
        msg: "",
        name: "",
        email: "",
        password: "",
    }

    render() {
        return (
            <div>
                <Dialog open={this.props.register.show} onRequestClose={this.props.hide.bind(this)}>
                    <DialogTitle>注册</DialogTitle>
                    <DialogContent>
                        <TextField margin="dense" onChange={e => this.setState({name: e.target.value})} label="用户名" fullWidth autoFocus required />
                        <TextField margin="dense" onChange={e => this.setState({password: e.target.value})} label="密码" fullWidth type="password" required />
                        <TextField margin="dense" onChange={e => this.setState({email: e.target.value})} label="邮箱地址" fullWidth type="email" required />
                    </DialogContent>
                    <DialogActions>
                        <Button onClick={this.props.hide.bind(this)} color="primary">取消</Button>
                        <Button onClick={this.props.submit.bind(this)} color="primary">注册</Button>
                    </DialogActions>
                </Dialog>
                <Snackbar
                  anchorOrigin={{vertical: "top", horizontal: "center", direction: "down"}}
                  open={this.state.msg !== "" || this.props.register.msg !== ""}
                  onRequestClose={() => {this.setState({msg:""}); this.props.register.msg=""}}
                  SnackbarContentProps={{
                      "aria-describedby": "message-id",
                  }}
                  message={<span id="message-id">{this.state.msg || this.props.register.msg}</span>}
                />
            </div>
        )
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Register)