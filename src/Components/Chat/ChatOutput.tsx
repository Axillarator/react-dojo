import * as React from "react";
import {MouseEventHandler} from "react";
import {Avatar, Grid, Paper, Theme, Typography} from "@material-ui/core";
import {createStyles} from "@material-ui/styles";
import makeStyles from "@material-ui/styles/makeStyles";
import DeleteIcon from '@material-ui/icons/Delete';
import IconButton from "@material-ui/core/IconButton";


interface Props {
    message: String
    time: String
    onDelete: MouseEventHandler
}

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
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
                    <Typography variant="body2">{props.message}</Typography>
                    <Typography variant="body2" color="textSecondary" align="right">
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