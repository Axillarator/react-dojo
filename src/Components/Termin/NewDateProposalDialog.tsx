import DialogTitle from "@material-ui/core/DialogTitle";
import DialogContent from "@material-ui/core/DialogContent";
import {DatePicker, MuiPickersUtilsProvider} from "@material-ui/pickers";
import MomentUtils from "@date-io/moment";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import DialogActions from "@material-ui/core/DialogActions";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import * as React from "react";
import {MouseEventHandler, useState} from "react";
import {MaterialUiPickersDate} from "@material-ui/pickers/typings/date";
import moment from "moment";
import {createStyles, makeStyles, Theme} from "@material-ui/core";
import TextField from "@material-ui/core/TextField";

interface Props {
    open: boolean
    handleClose: MouseEventHandler
    handleAdd: MouseEventHandler
    selectedStartDate: MaterialUiPickersDate
    handleStartDateChange: (date: MaterialUiPickersDate) => void
    selectedEndDate: MaterialUiPickersDate
    handleEndDateChange: (date: MaterialUiPickersDate) => void
    handleDayEvent: () => void
}

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        date: {
            paddingRight: 5
        }
    }),
);


export default function NewDateProposalDialog(props: Props) {

    moment.locale('de');

    const classes = useStyles();

    const [dayEvent, toggleDayEvent] = useState<boolean>(false);
    const [startDateIsOpen, setIsOpenStart] = useState(false);
    const [endDateIsOpen, setIsOpenEnd] = useState(false);


    const toggleSliderDayEvent = (event: React.ChangeEvent<HTMLInputElement>) => {
        toggleDayEvent(event.target.checked);
        props.handleDayEvent();
    };

    const TextFieldComponent = (props: any) => {
        return <TextField {...props} disabled={dayEvent}/>
    };


    return (
        <Dialog open={props.open} onClose={props.handleClose} aria-labelledby="form-dialog-title">
            <DialogTitle id="form-dialog-title">Neuer Terminvorschlag</DialogTitle>
            <DialogContent>
                <MuiPickersUtilsProvider utils={MomentUtils}>
                    <DatePicker
                        className={classes.date}
                        open={startDateIsOpen}
                        onOpen={() => setIsOpenStart(true)}
                        onClose={() => setIsOpenStart(false)}
                        value={props.selectedStartDate}
                        onChange={props.handleStartDateChange}
                        format={"dd. DD.MM.YYYY"}
                        label="Anreisetag"
                    />
                    <DatePicker
                        open={endDateIsOpen}
                        onOpen={() => setIsOpenEnd(true)}
                        onClose={() => setIsOpenEnd(false)}
                        value={props.selectedEndDate}
                        onChange={props.handleEndDateChange}
                        format={"dd. DD.MM.YYYY"}
                        label="Abreisetag"
                        TextFieldComponent={TextFieldComponent}
                    />
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
                <Button onClick={props.handleClose} color="primary">
                    abbrechen
                </Button>
                <Button onClick={props.handleAdd} color="primary">
                    hinzufügen
                </Button>
            </DialogActions>
        </Dialog>)
}