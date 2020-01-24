import * as React from "react";
import {useState} from "react";
import {createStyles, makeStyles, Paper, Theme} from "@material-ui/core";
import {DatePicker, MuiPickersUtilsProvider} from "@material-ui/pickers";
import MomentUtils from "@date-io/moment";
import Checkbox from "@material-ui/core/Checkbox";
import {MaterialUiPickersDate} from "@material-ui/pickers/typings/date";
import moment from "moment";
import Fab from "@material-ui/core/Fab";
import AddIcon from '@material-ui/icons/Add';
import ChatBubbleIcon from '@material-ui/icons/ChatBubble'
import DeleteIcon from '@material-ui/icons/Delete';
import IconButton from '@material-ui/core/IconButton';
import Chip from '@material-ui/core/Chip';
import Tooltip from "@material-ui/core/Tooltip";


const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        root: {
            padding: theme.spacing(3, 2),
        },
        fab: {
            position: 'absolute',
            bottom: theme.spacing(2),
            right: theme.spacing(2),
        },
        invisible: {
            width: 0
        }
    }),
);

export default function Terminfinder() {

    const classes = useStyles();
    const [check, toggleCheck] = useState<boolean>(false);


    const handleCheck = (event: React.ChangeEvent<HTMLInputElement>) => {
        toggleCheck(event.target.checked);
    };


    const [isOpen, setIsOpen] = useState(false);
    const [selectedDate, handleDateChange] = useState<MaterialUiPickersDate>(moment());

    return (
        <div>
            <Paper className={classes.root}>
                <Chip
                    label={selectedDate!!.format("dd. DD.MM.YY")}
                />
                <Chip label={0}/>
                <Checkbox
                    checked={check}
                    onChange={handleCheck}
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
                <Fab
                    color="primary"
                    aria-label="add"
                    className={classes.fab}
                    onClick={() => setIsOpen(true)}>
                    <AddIcon/>
                </Fab>
                <MuiPickersUtilsProvider utils={MomentUtils}>
                    <DatePicker
                        className={classes.invisible}
                        open={isOpen}
                        onOpen={() => setIsOpen(true)}
                        onClose={() => setIsOpen(false)}
                        value={""}
                        onChange={handleDateChange}
                        format={"dd. DD.MM.YYYY"}
                        helperText=""
                    />
                </MuiPickersUtilsProvider>
            </Paper>
        </div>

    )

}

