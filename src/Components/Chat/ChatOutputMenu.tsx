import * as React from "react";
import {MouseEventHandler} from "react";
import {Theme, Typography} from "@material-ui/core";
import {createStyles} from "@material-ui/styles";
import makeStyles from "@material-ui/styles/makeStyles";
import DeleteIcon from '@material-ui/icons/Delete';
import ThumbUpAltIcon from '@material-ui/icons/ThumbUpAlt';
import IconButton from "@material-ui/core/IconButton";
import ReplyIcon from "@material-ui/icons/Reply";


interface Props {
    time: String
    onDelete: MouseEventHandler
    onReply: MouseEventHandler
    onLike: MouseEventHandler
    likes: number
    editMode: boolean
}

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        messageMenuContainer: {
            display: "flex",
            justifyContent: "flex-end",
            alignItems: "center"
        }
    })
);

export default function ChatOutputMenu(props: Props) {

    const classes = useStyles();

    const empty = <div/>;

    const chatOutputMenu = (
        <div className={classes.messageMenuContainer}>
            <IconButton onClick={props.onLike}>
                <ThumbUpAltIcon fontSize="small"/>
            </IconButton>
            <Typography variant="body2" color="textSecondary">
                {props.likes === 0 ? "" : props.likes}
            </Typography>
            <IconButton onClick={props.onReply}>
                <ReplyIcon fontSize="small"/>
            </IconButton>
            <IconButton onClick={props.onDelete}>
                <DeleteIcon fontSize="small"/>
            </IconButton>
            <Typography variant="body2" color="textSecondary">
                {props.time}
            </Typography>
        </div>);

    return props.editMode ? empty : chatOutputMenu

}