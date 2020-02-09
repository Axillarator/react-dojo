import * as React from "react";
import {MouseEventHandler} from "react";
import {createStyles, makeStyles, Theme} from "@material-ui/core";
import Dialog from "@material-ui/core/Dialog";
import DialogTitle from "@material-ui/core/DialogTitle";
import DialogContent from "@material-ui/core/DialogContent";
import {DatePicker, MuiPickersUtilsProvider} from "@material-ui/pickers";
import MomentUtils from "@date-io/moment";
import DialogActions from "@material-ui/core/DialogActions";
import Button from "@material-ui/core/Button";
import {MaterialUiPickersDate} from "@material-ui/pickers/typings/date";

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        date: {
            paddingRight: 5
        }
    }),
);

interface Props {
    open: boolean
    handleClose: MouseEventHandler
    handleOK: MouseEventHandler
    selectedStartDate: MaterialUiPickersDate
    handleStartDateChange: (date: MaterialUiPickersDate) => void
    startDatePickerIsOpen: boolean
    handleStartDatePicker: () => void
    selectedEndDate: MaterialUiPickersDate
    handleEndDateChange: (date: MaterialUiPickersDate) => void
    endDatePickerIsOpen: boolean
    handleEndDatePicker: () => void
}

export default function EditDateOverviewDialog(props: Props) {
    const classes = useStyles();

    return (
        <Dialog open={props.open} onClose={props.handleClose} aria-labelledby="form-dialog-title">
            <DialogTitle id="form-dialog-title">Neuer Terminvorschlag</DialogTitle>
            <DialogContent>
                <MuiPickersUtilsProvider utils={MomentUtils}>
                    <DatePicker
                        className={classes.date}
                        open={props.startDatePickerIsOpen}
                        onOpen={props.handleStartDatePicker}
                        onClose={props.handleStartDatePicker}
                        value={props.selectedStartDate}
                        onChange={props.handleStartDateChange}
                        format={"dd. DD.MM.YYYY"}
                        label="Anreisetag"
                    />
                    <DatePicker
                        open={props.endDatePickerIsOpen}
                        onOpen={props.handleEndDatePicker}
                        onClose={props.handleEndDatePicker}
                        value={props.selectedEndDate}
                        onChange={props.handleEndDateChange}
                        format={"dd. DD.MM.YYYY"}
                        label="Abreisetag"
                        minDate={props.selectedStartDate}
                        minDateMessage={"Abreise- vor Anreisetag!"}
                    />
                </MuiPickersUtilsProvider>
            </DialogContent>
            <DialogActions>
                <Button onClick={props.handleClose} color="primary">
                    abbrechen
                </Button>
                <Button onClick={props.handleOK} color="primary">
                    ok
                </Button>
            </DialogActions>
        </Dialog>)
}