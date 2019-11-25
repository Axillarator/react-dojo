import * as React from "react";
import {MouseEventHandler} from "react";
import {Avatar, Grid, Paper, Theme, Typography} from "@material-ui/core";
import {createStyles} from "@material-ui/styles";
import makeStyles from "@material-ui/styles/makeStyles";
import DeleteIcon from '@material-ui/icons/Delete';
import ThumbUpAltIcon from '@material-ui/icons/ThumbUpAlt';
import IconButton from "@material-ui/core/IconButton";
import ReplyIcon from '@material-ui/icons/Reply';


interface Props {
    message: String
    time: String
    onDelete: MouseEventHandler
    onLike: MouseEventHandler
    likes: number
    onReply: MouseEventHandler
    reply: boolean
}

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        messageContainer: {
            display: "flex",
            flexGrow: 1,
            flexDirection: "column",
            width: "100%",
            overflow: "hidden"
        },
        messageHelperDiv: {
            overflow: "hidden",
            textOverflow: "ellipsis",
            width: "100%",
            paddingLeft: 10,
            paddingRight: 10,
            paddingBottom: 10
        },
        messageMenuContainer: {
            display: "flex",
            justifyContent: "flex-end",
            alignItems: "center"
        },
        avatar: {
            padding: 10,
            margin: 5,
            flexGrow: 0
        },
        wrapper: {
            display: "flex",
            maxWidth: 400
        },
        paper: {
            maxWidth: 350,
            margin: 5,
            paddingLeft: 10,
            paddingTop: 10,
            paddingRight: 10,
            display: "flex",
            flexGrow: 1
        },
        emptySpace: {
            width: 50
        }

    })
);

export default function ChatOutput(props: Props) {

    const classes = useStyles();

    //message
    const message = <div className={classes.wrapper}>
        <Paper className={classes.paper}>
            <Avatar className={classes.avatar}>
                A
            </Avatar>
            <div className={classes.messageContainer}>
                <div className={classes.messageHelperDiv}>
                    <Typography variant="body1">{props.message}</Typography>
                </div>
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
                </div>
            </div>
        </Paper>
    </div>

    //comment
    const comment = <div className={classes.wrapper}>
        <div className={classes.emptySpace}>
        </div>
        <Paper className={classes.paper}>
            <Avatar className={classes.avatar}>
                A
            </Avatar>
            <div className={classes.messageContainer}>
                <div className={classes.messageHelperDiv}>
                    <Typography variant="body1">{props.message}</Typography>
                </div>
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
                </div>
            </div>
        </Paper>
    </div>;

    return props.reply ? comment : message

}