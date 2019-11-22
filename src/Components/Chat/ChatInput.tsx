import * as React from "react";
import {ChangeEventHandler, MouseEventHandler} from "react";
import Button from '@material-ui/core/Button';
import {TextField} from "@material-ui/core";
import {makeStyles} from "@material-ui/styles";


interface Props {
    value: String
    handleSend: MouseEventHandler
    handleChange: ChangeEventHandler
}

const useStyles = makeStyles(theme => ({
    footer: {
        marginTop: 'auto',
        backgroundColor: 'white',
    },
}));

export default function ChatInput(props: Props) {
    const classes = useStyles();

    return (
        <div className={classes.footer}>
            <TextField
                placeholder="Nachricht"
                variant="outlined"
                rowsMax={5}
                value={props.value}
                onChange={props.handleChange}
            />
            <Button onClick={props.handleSend} variant="contained" color="primary"> Send </Button>
        </div>);
}