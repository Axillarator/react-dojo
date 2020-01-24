import * as React from "react";
import {useState} from "react";
import {createStyles, makeStyles, Paper, Theme} from "@material-ui/core";
import {MaterialUiPickersDate} from "@material-ui/pickers/typings/date";
import moment from "moment";
import 'moment/locale/de';
import Fab from "@material-ui/core/Fab";
import AddIcon from '@material-ui/icons/Add';
import DateProposal from "./DateProposal";
import NewDateProposalDialog from "./NewDateProposalDialog";


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


    const handleCheck = (event: React.ChangeEvent<HTMLInputElement>) => {
        toggleCheck(event.target.checked);
    };

    const [selectedStartDate, handleStartDateChange] = useState<MaterialUiPickersDate>(moment());
    const [selectedEndDate, handleEndDateChange] = useState<MaterialUiPickersDate>(moment());


    const [open, setOpen] = React.useState<boolean>(false);

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    return (
        <div>
            <Paper className={classes.root}>
                <DateProposal
                    check={check}
                    handleCheck={handleCheck}
                    selectedStartDate={selectedStartDate}
                    selectedEndDate={selectedEndDate}
                />
                <Fab
                    color="primary"
                    aria-label="add"
                    className={classes.fab}
                    onClick={handleClickOpen}>
                    <AddIcon/>
                </Fab>
            </Paper>
            <NewDateProposalDialog
                open={open}
                handleClose={handleClose}
                selectedStartDate={selectedStartDate}
                handleStartDateChange={handleStartDateChange}
                selectedEndDate={selectedEndDate}
                handleEndDateChange={handleEndDateChange}
            />
        </div>
    )
}

