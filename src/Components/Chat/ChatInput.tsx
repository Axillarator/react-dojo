import * as React from "react";
import Button from '@material-ui/core/Button';
import {TextField} from "@material-ui/core";
import {ChangeEventHandler, MouseEventHandler} from "react";


interface Props {
    value: String
    handleSend: MouseEventHandler
    handleChange: ChangeEventHandler
}

export default function ChatInput(props: Props) {

    return (
        <div>
            <TextField
                placeholder="Nachricht"
                multiline
                variant="outlined"
                rowsMax={5}
                value={props.value}
                onChange={props.handleChange}
            />
            <Button onClick={props.handleSend} variant="contained" color="primary"> Send </Button>
        </div>);
}