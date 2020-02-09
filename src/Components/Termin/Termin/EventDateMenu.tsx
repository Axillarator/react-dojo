import IconButton from "@material-ui/core/IconButton";
import MoreVertIcon from '@material-ui/icons/MoreVert';
import EditIcon from '@material-ui/icons/Edit';
import DeleteIcon from '@material-ui/icons/Delete';
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import * as React from "react";
import {MouseEventHandler} from "react";
import {createStyles, makeStyles, Theme} from "@material-ui/core";

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        menu: {
            position: "absolute",
            top: theme.spacing(8),
            right: theme.spacing(1),
        },
    }),
);

interface Props {
    anchorElement: null | HTMLElement
    handleOpen: MouseEventHandler
    handleClose: MouseEventHandler
    onClickEdit: MouseEventHandler
    onClickReset: MouseEventHandler
}

export default function EventDateMenu(props: Props) {
    const classes = useStyles();

    return (
        <div className={classes.menu}>
            <IconButton aria-controls="simple-menu" aria-haspopup="true" onClick={props.handleOpen}>
                <MoreVertIcon/>
            </IconButton>
            <Menu
                anchorEl={props.anchorElement}
                keepMounted
                open={Boolean(props.anchorElement)}
                onClose={props.handleClose}>
                <MenuItem onClick={props.onClickEdit}>
                    <ListItemIcon>
                        <EditIcon/>
                    </ListItemIcon>
                    <ListItemText primary="edit"/>
                </MenuItem>
                <MenuItem onClick={props.onClickReset}>
                    <ListItemIcon>
                        <DeleteIcon/>
                    </ListItemIcon>
                    <ListItemText primary="delete"/>
                </MenuItem>
            </Menu>
        </div>)
}