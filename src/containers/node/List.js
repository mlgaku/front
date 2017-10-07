import React, {Component} from "react"
import {Button, withStyles} from "material-ui"

const styles = theme => ({
    block: {
        padding: "15px",
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
    }
})

class List extends Component {
    render() {
        const classes = this.props.classes

        return (
            <div>
                <div className={classes.block}>
                    <h3 className={classes.head}>探索&分享</h3>
                    <div className={classes.body}>
                        {["会员互动","文章分享","优秀工具"].map((x) => (
                            <Button dense key={x} href="#" className={classes.item}>{x}</Button>
                        ))}
                    </div>
                </div>
                <div className={classes.block}>
                    <h3 className={classes.head}>World</h3>
                    <div className={classes.body}>
                        {["笔记","随想","奇思妙想","自言自语"].map((x) => (
                            <Button dense key={x} href="#" className={classes.item}>{x}</Button>
                        ))}
                    </div>
                </div>
                <div className={classes.block}>
                    <h3 className={classes.head}>Geek</h3>
                    <div className={classes.body}>
                        {["Android","C#","C/C++","Vue","React","Angular","HTML","iOS","Java","JavaScript","Linux","PHP","Python","Golang","Erlang"].map((x) => (
                            <Button dense key={x} href="#" className={classes.item}>{x}</Button>
                        ))}
                    </div>
                </div>
            </div>
        )
    }
}

export default withStyles(styles)(List)