import React, {Component} from "react"

import {IconButton, Menu, MenuItem, withStyles} from "material-ui"
import NotificationsIcon from "material-ui-icons/Notifications"

const styles = theme => ({
    div: {
        display: "inline",
    }
})

class Notice extends Component {
    state = {
        open: false,
        anchorEl: null,
    }

    handleClick = event => {
        this.setState({ open: true, anchorEl: event.currentTarget })
    }

    handleRequestClose = () => {
        this.setState({ open: false })
    }

    render () {
        const classes = this.props.classes

        return (
            <div className={classes.div}>
                <IconButton color="contrast" aria-label="Notifications" aria-owns={this.state.open ? "long-menu" : null} aria-haspopup="true" onClick={this.handleClick}>
                    <NotificationsIcon />
                </IconButton>

                <Menu
                    id="long-menu"
                    anchorEl={this.state.anchorEl}
                    open={this.state.open}
                    onRequestClose={this.handleRequestClose}
                    PaperProps={{
                        style: {
                            maxHeight: 48 * 4.5,
                            width: 200,
                        },
                    }}
                >
                    <MenuItem key="One" selected onClick={this.handleRequestClose}>
                        One
                    </MenuItem>
                    <MenuItem key="Two" onClick={this.handleRequestClose}>
                        Two
                    </MenuItem>
                    <MenuItem key="Three" onClick={this.handleRequestClose}>
                        Three
                    </MenuItem>
                </Menu>
            </div>
        )
    }

}

export default withStyles(styles)(Notice)