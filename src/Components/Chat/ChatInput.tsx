import * as React from "react";
import {ChangeEventHandler, MouseEventHandler} from "react";
import Button from '@material-ui/core/Button';
import {TextField} from "@material-ui/core";


interface Props {
    value: String
    handleSend: MouseEventHandler
    handleChange: ChangeEventHandler
}

export default function ChatInput(props: Props) {

    const catchEnter = (event: any) => {
        if (event.key === 'Enter') {
            props.handleSend(event);
            event.preventDefault();
        }
    };

    return (
        <div>
            <TextField
                placeholder="Nachricht"
                variant="outlined"
                multiline
                rowsMax={5}
                value={props.value}
                onChange={props.handleChange}
                onKeyPress={catchEnter}
            />
            <Button onClick={props.handleSend} variant="contained" color="primary"> Send </Button>
        </div>);
}