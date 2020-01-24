import Chip from "@material-ui/core/Chip";
import Checkbox from "@material-ui/core/Checkbox";
import Tooltip from "@material-ui/core/Tooltip";
import IconButton from "@material-ui/core/IconButton";
import ChatBubbleIcon from "@material-ui/core/SvgIcon/SvgIcon";
import DeleteIcon from '@material-ui/icons/Delete';
import * as React from "react";
import {ChangeEventHandler} from "react";
import {MaterialUiPickersDate} from "@material-ui/pickers/typings/date";


interface Props {
    selectedStartDate: MaterialUiPickersDate
    selectedEndDate: MaterialUiPickersDate
    check: boolean
    handleCheck: ChangeEventHandler
}

export default function DateProposal(props: Props) {

    return (
        <div>
            <Chip
                label={props.selectedStartDate!!.format("dd. DD.MM.YY") + " - " + props.selectedEndDate!!.format("dd. DD.MM.YY")}
            />
            <Chip
                label={0}
            />
            <Checkbox
                checked={props.check}
                onChange={props.handleCheck}
                value="primary"
                inputProps={{'aria-label': 'primary checkbox'}}
            />
            <Tooltip title="Notiz hinzufügen">
                <IconButton aria-label="delete">
                    <ChatBubbleIcon/>
                </IconButton>
            </Tooltip>
            <IconButton aria-label="delete">
                <DeleteIcon/>
            </IconButton>
        </div>
    )
}