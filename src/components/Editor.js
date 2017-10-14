import React, {Component} from "react"
import {Grid, withStyles} from "material-ui"

import Codemirror from "codemirror"
import ReactMarkdown from "react-markdown"

import "github-markdown-css"
import "codemirror/lib/codemirror.css"

import "codemirror/mode/javascript/javascript"
import "codemirror/mode/xml/xml"
import "codemirror/mode/markdown/markdown"
import "codemirror/mode/php/php"

const styles = theme => ({
    view: {
        height: "100%",
        padding: "5px",
        fontSize: "14px",
        boxSizing: "border-box",
        borderLeft: "1px solid #e4e4e4",
        background: "white",
        overflowY: "auto",
    },
})

class Editor extends Component{

    state = {
        // 编辑器内容
        content: "",
    }

    // 组件装载完毕
    componentDidMount() {
        this.codemirror = Codemirror.fromTextArea(this.textarea, {
            mode: "markdown",
            readOnly: false,
            lineNumbers: this.props.linenum || false,
            lineWrapping: this.props.linewrap || false,
        })
        this.codemirror.on("change", this.valueChanged.bind(this))
        this.codemirror.setSize("100%", this.props.height || "400px")
        this.codemirror.setValue(this.props.value || "")
    }

    // 编辑器内容被改变
    valueChanged(cm) {
        this.setState({content: cm.getValue()})
        if (this.props.onChange) {
            this.props.onChange(cm.getValue())
        }
    }

    render() {
        const classes = this.props.classes

        return (
            <Grid container spacing={0} className={this.props.className}>
                <Grid item xs={6} className={classes.left}>
                    <textarea rows="20" ref={r => this.textarea = r}></textarea>
                </Grid>
                <Grid item xs={6} className={classes.right} style={{maxHeight: this.props.height || "none"}}>
                    <ReactMarkdown source={this.state.content} className={classes.view + " markdown-body"} />
                </Grid>
            </Grid>
        )
    }
}

export default withStyles(styles)(Editor)