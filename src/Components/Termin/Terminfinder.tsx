import * as React from "react";
import {useState} from "react";
import {createStyles, makeStyles, Paper, Theme} from "@material-ui/core";
import {DatePicker, MuiPickersUtilsProvider} from "@material-ui/pickers";
import MomentUtils from "@date-io/moment";
import Checkbox from "@material-ui/core/Checkbox";
import {MaterialUiPickersDate} from "@material-ui/pickers/typings/date";
import moment from "moment";
import 'moment/locale/de';
import Fab from "@material-ui/core/Fab";
import AddIcon from '@material-ui/icons/Add';
import ChatBubbleIcon from '@material-ui/icons/ChatBubble'
import DeleteIcon from '@material-ui/icons/Delete';
import IconButton from '@material-ui/core/IconButton';
import Chip from '@material-ui/core/Chip';
import Tooltip from "@material-ui/core/Tooltip";
import Dialog from "@material-ui/core/Dialog";
import DialogTitle from "@material-ui/core/DialogTitle";
import Button from "@material-ui/core/Button";
import DialogContent from "@material-ui/core/DialogContent";
import DialogActions from "@material-ui/core/DialogActions";
import TextField from "@material-ui/core/TextField";
import FormControlLabel from "@material-ui/core/FormControlLabel";


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
        date: {
            paddingRight: 5
        }
    }),
);

export default function Terminfinder() {
    moment.locale('de');


    const classes = useStyles();
    const [check, toggleCheck] = useState<boolean>(false);
    const [dayEvent, toggleDayEvent] = useState<boolean>(false);


    const handleCheck = (event: React.ChangeEvent<HTMLInputElement>) => {
        toggleCheck(event.target.checked);
    };

    const toggleSliderDayEvent = (event: React.ChangeEvent<HTMLInputElement>) => {
        toggleDayEvent(event.target.checked);
    };

    const [open, setOpen] = React.useState<boolean>(false);

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };


    const TextFieldComponent = (props: any) => {
        return <TextField {...props} disabled={true}/>
    };

    const [isOpen1, setIsOpen1] = useState(false);
    const [isOpen2, setIsOpen2] = useState(false);
    const [selectedStartDate, handleStartDateChange] = useState<MaterialUiPickersDate>(moment());
    const [selectedEndDate, handleEndDateChange] = useState<MaterialUiPickersDate>(moment());

    return (
        <div>
            <Paper className={classes.root}>
                <Chip
                    label={selectedStartDate!!.format("dd. DD.MM.YY") + " - " + selectedEndDate!!.format("dd. DD.MM.YY")}
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
                    onClick={handleClickOpen}>
                    <AddIcon/>
                </Fab>
            </Paper>
            <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
                <DialogTitle id="form-dialog-title">Neuer Terminvorschlag</DialogTitle>
                <DialogContent>

                    <MuiPickersUtilsProvider utils={MomentUtils}>
                        <DatePicker
                            className={classes.date}
                            open={isOpen1}
                            onOpen={() => setIsOpen1(true)}
                            onClose={() => setIsOpen1(false)}
                            value={selectedStartDate}
                            onChange={handleStartDateChange}
                            format={"dd. DD.MM.YYYY"}
                            label="Anreisetag"
                        />
                        {!dayEvent ? <DatePicker
                            open={isOpen2}
                            onOpen={() => setIsOpen2(true)}
                            onClose={() => setIsOpen2(false)}
                            value={selectedEndDate}
                            onChange={handleEndDateChange}
                            format={"dd. DD.MM.YYYY"}
                            label="Abreisetag"
                        /> : <DatePicker
                            open={isOpen2}
                            onOpen={() => setIsOpen2(true)}
                            onClose={() => setIsOpen2(false)}
                            value={selectedStartDate}
                            onChange={handleEndDateChange}
                            format={"dd. DD.MM.YYYY"}
                            label="Abreisetag"
                            TextFieldComponent={TextFieldComponent}
                        />}
                    </MuiPickersUtilsProvider>
                    <br/>

                    <FormControlLabel
                        control={
                            <Checkbox
                                checked={dayEvent}
                                onChange={toggleSliderDayEvent}
                                value="Eintägiges Event"
                                color={"primary"}
                                inputProps={{'aria-label': 'secondary checkbox'}}
                            />
                        }
                        label="Eintägiges Event"
                    />
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose} color="primary">
                        abbrechen
                    </Button>
                    <Button onClick={handleClose} color="primary">
                        hinzufügen
                    </Button>
                </DialogActions>
            </Dialog>
        </div>

    )

}

