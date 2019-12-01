import * as React from "react";
import {ChangeEventHandler, MouseEventHandler} from "react";
import {TextField} from "@material-ui/core";
import SendIcon from '@material-ui/icons/Send';
import IconButton from "@material-ui/core/IconButton";


interface Props {
    inputValue: String
    inputId: number
    handleSend: MouseEventHandler
    handleChange: ChangeEventHandler
    editMode: boolean
}

export default function ChatInput(props: Props) {

    const catchEnter = (event: any) => {
        if (event.key === 'Enter') {
            props.handleSend(event);
            event.preventDefault();
        }
    };

    const empty = <div/>;

    const chatInput =  (
        <div>
            <TextField
                placeholder="Nachricht"
                variant="outlined"
                multiline
                name={props.inputId.toString()}
                value={props.inputValue}
                onChange={props.handleChange}
                onKeyPress={catchEnter}
            />
            <IconButton onClick={props.handleSend} color="primary">
                <SendIcon fontSize="large"/>
            </IconButton>
        </div>);

    return props.editMode ? chatInput : empty;
}