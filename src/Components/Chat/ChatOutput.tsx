import * as React from "react";
import {MouseEventHandler} from "react";
import {Avatar, Grid, Paper, Theme, Typography} from "@material-ui/core";
import {createStyles} from "@material-ui/styles";
import makeStyles from "@material-ui/styles/makeStyles";
import DeleteIcon from '@material-ui/icons/Delete';
import ThumbUpAltIcon from '@material-ui/icons/ThumbUpAlt';
import IconButton from "@material-ui/core/IconButton";


interface Props {
    message: String
    time: String
    onDelete: MouseEventHandler
    onLike: MouseEventHandler
    likes: number
}

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        helperDiv: {
            overflow: "hidden",
            textOverflow: "ellipsis",
            width: "100%"
        },
        paper: {
            maxWidth: 400,
            margin: 5,
            padding: 10
        }
    })
);

export default function ChatOutput(props: Props) {

    const classes = useStyles();

    return (
        <Paper className={classes.paper}>
            <Grid container wrap="nowrap" spacing={2}>
                <Grid item xs={2}>
                    <Avatar>A</Avatar>
                </Grid>
                <Grid item xs={10}>
                    <div className={classes.helperDiv}>
                        <Typography noWrap={false} variant="body1">{props.message}</Typography>
                    </div>
                    <Typography variant="body2" color="textSecondary" align="right">
                        <IconButton onClick={props.onLike}>
                            <ThumbUpAltIcon fontSize="small"/>
                        </IconButton>
                        {props.likes === 0 ? "" : props.likes}
                        <IconButton onClick={props.onDelete}>
                            <DeleteIcon fontSize="small"/>
                        </IconButton>
                        {props.time}
                    </Typography>
                </Grid>
            </Grid>
        </Paper>
    )
}