import * as React from "react";
import {Theme, Typography} from "@material-ui/core";
import {createStyles} from "@material-ui/styles";
import makeStyles from "@material-ui/styles/makeStyles";


interface Props {
    message: String
    editMode: boolean
}

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        messageHelperDiv: {
            overflow: "hidden",
            textOverflow: "ellipsis",
            width: "100%",
            paddingLeft: 10,
            paddingRight: 10,
            paddingBottom: 10
        }
    })
);

export default function ChatMessage(props: Props) {

    const classes = useStyles();

    const empty = <div/>;

    const message = (
        <div className={classes.messageHelperDiv}>
            <Typography variant="body1">{props.message}</Typography>
        </div>
    );

    return props.editMode ? empty : message
}