import Chip from "@material-ui/core/Chip";
import Tooltip from "@material-ui/core/Tooltip";
import IconButton from "@material-ui/core/IconButton";
import DeleteIcon from '@material-ui/icons/Delete';
import ChatBubbleIcon from '@material-ui/icons/ChatBubble';
import * as React from "react";
import {MouseEventHandler, useState} from "react";


import {MaterialUiPickersDate} from "@material-ui/pickers/typings/date";
import Vote from "./Vote";
import {createStyles, makeStyles, TextField, Theme} from "@material-ui/core";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        date: {
            width: '190px',
            height: '28px'
        }
    }),
);

interface Props {
    selectedStartDate: MaterialUiPickersDate
    selectedEndDate: MaterialUiPickersDate
    check: number
    handleCheck: MouseEventHandler
    onDelete: MouseEventHandler
    handleResultDialog: MouseEventHandler
}

export default function DateProposal(props: Props) {

    const classes = useStyles();

    const [inputValue, setInput] = useState<String>("");
    const [messageVisible, toggleMessage] = useState<boolean>(false);

    return (
        <div>
            <form>
                {(props.selectedStartDate!! < props.selectedEndDate!!) ?
                    <Chip
                        className={classes.date}
                        label={props.selectedStartDate!!.format("dd. DD.MM.YY") + " - " + props.selectedEndDate!!.format("dd. DD.MM.YY")}
                        onClick={props.handleResultDialog}
                    />
                    :
                    <Chip
                        className={classes.date}
                        label={props.selectedStartDate!!.format("dd. DD.MM.YY")}
                        onClick={props.handleResultDialog}
                    />
                }

                <Typography variant="button">
                    {props.check}
                </Typography>
                <Vote
                    check={props.check}
                    onClick={props.handleCheck}
                />
                <Tooltip title="Notiz hinzufügen">
                    <IconButton
                        size="small"
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
                        <IconButton
                            aria-label="delete"
                            size="small"
                            onClick={props.onDelete}>
                            <DeleteIcon/>
                        </IconButton>
                    </Tooltip>}
            </form>
        </div>
    )
}