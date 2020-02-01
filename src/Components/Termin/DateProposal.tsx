import Chip from "@material-ui/core/Chip";
import Tooltip from "@material-ui/core/Tooltip";
import IconButton from "@material-ui/core/IconButton";
import DeleteIcon from '@material-ui/icons/Delete';
import ChatBubbleIcon from '@material-ui/icons/ChatBubble';
import * as React from "react";
import {MouseEventHandler} from "react";
import CheckBoxIcon from '@material-ui/icons/CheckBox';


import {MaterialUiPickersDate} from "@material-ui/pickers/typings/date";


interface Props {
    selectedStartDate: MaterialUiPickersDate
    selectedEndDate: MaterialUiPickersDate
    check: number
    handleCheck: MouseEventHandler
    onDelete: MouseEventHandler
}

export default function DateProposal(props: Props) {

    return (
        <div>
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
            <IconButton aria-label="Check" onClick={props.handleCheck}>
                <CheckBoxIcon/>
            </IconButton>
            <Tooltip title="Notiz hinzufügen">
                <IconButton aria-label="Notiz hinzufügen">
                    <ChatBubbleIcon/>
                </IconButton>
            </Tooltip>
            <Tooltip title="Vorschlag entfernen">
                <IconButton aria-label="delete" onClick={props.onDelete}>
                    <DeleteIcon/>
                </IconButton>
            </Tooltip>

        </div>
    )
}