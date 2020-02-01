import Chip from "@material-ui/core/Chip";
import Tooltip from "@material-ui/core/Tooltip";
import IconButton from "@material-ui/core/IconButton";
import DeleteIcon from '@material-ui/icons/Delete';
import ChatBubbleIcon from '@material-ui/icons/ChatBubble';
import * as React from "react";
import {MouseEventHandler, useState} from "react";


import {MaterialUiPickersDate} from "@material-ui/pickers/typings/date";
import Vote from "./Vote";
import {TextField} from "@material-ui/core";


interface Props {
    selectedStartDate: MaterialUiPickersDate
    selectedEndDate: MaterialUiPickersDate
    check: number
    handleCheck: MouseEventHandler
    onDelete: MouseEventHandler
}

export default function DateProposal(props: Props) {

    const [inputValue, setInput] = useState<String>("");
    const [messageVisible, toggleMessage] = useState<boolean>(false);

    return (
        <div>
            <form>
                {(props.selectedStartDate!! < props.selectedEndDate!!) ?
                    <Chip
                        label={props.selectedStartDate!!.format("dd. DD.MM.YY") + " - " + props.selectedEndDate!!.format("dd. DD.MM.YY")}
                    />
                    :
                    <Chip
                        label={props.selectedStartDate!!.format("dd. DD.MM.YY")}
                    />
                }

                <Chip
                    label={props.check}
                />
                <Vote
                    check={props.check}
                    onClick={props.handleCheck}
                />
                <Tooltip title="Notiz hinzufügen">
                    <IconButton
                        aria-label="Notiz hinzufügen"
                        onClick={() => toggleMessage(!messageVisible)}>
                        <ChatBubbleIcon/>
                    </IconButton>
                </Tooltip>
                {messageVisible ?
                    <TextField
                        placeholder="Notiz"
                        margin='dense'
                        autoFocus={true}
                        inputProps={{
                            maxLength: 20
                        }}
                        value={inputValue}
                        onChange={e => setInput(e.target.value)}
                    />
                    :
                    <Tooltip title="Vorschlag entfernen">
                        <IconButton aria-label="delete" onClick={props.onDelete}>
                            <DeleteIcon/>
                        </IconButton>
                    </Tooltip>}
            </form>
        </div>
    )
}