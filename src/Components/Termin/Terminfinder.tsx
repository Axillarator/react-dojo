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

interface DateSuggestion {
    check: number
    selectedStartDate: MaterialUiPickersDate
    selectedEndDate: MaterialUiPickersDate
}

export default function Terminfinder() {
    moment.locale('de');

    const classes = useStyles();

    const [arrayOfDateSuggestions, updateDateSuggestions] = useState<DateSuggestion[]>([{
        check: 0,
        selectedStartDate: moment(),
        selectedEndDate: moment()
    }]);

    const [openPopUp, setOpenPopUp] = useState<boolean>(false);
    const [startDatePopUp, updateStartDatePopUp] = useState<MaterialUiPickersDate>(moment());
    const [endDatePopUp, updateEndDatePopUp] = useState<MaterialUiPickersDate>(moment());

    const onSelectDayEvent = () => {
        updateEndDatePopUp(startDatePopUp);
    };

    const onDelete = (indexToRemove: number) => {
        return () => {
            let result = [...arrayOfDateSuggestions];
            updateDateSuggestions(result.filter((value, index) => index !== indexToRemove));
        };
    };

    const handleCheck = (indexToCheck: number) => {
        return () => {
            let result = [...arrayOfDateSuggestions];
            result[indexToCheck].check = (result[indexToCheck].check + 1) % 3;
            updateDateSuggestions(result);
        }
    };

    const handlePopUpOpen = () => {
        setOpenPopUp(true);
    };

    const handlePopUpClose = () => {
        setOpenPopUp(false);
    };

    const handleAdd = () => {
        setOpenPopUp(false);
        let result = [...arrayOfDateSuggestions];
        result.push({
            check: 0,
            selectedStartDate: startDatePopUp,
            selectedEndDate: endDatePopUp
        });
        updateDateSuggestions(result);
    };
    const sortedArray = arrayOfDateSuggestions.sort(
        (a, b) => a.selectedStartDate!!.diff(b.selectedStartDate!!));

    return (
        <div>
            <Paper className={classes.root}>
                {sortedArray.map((element, index) => <DateProposal
                    key={index}
                    check={element.check}
                    handleCheck={handleCheck(index)}
                    selectedStartDate={element.selectedStartDate}
                    selectedEndDate={element.selectedEndDate}
                    onDelete={onDelete(index)}
                />)}
                <Fab
                    color="primary"
                    aria-label="add"
                    className={classes.fab}
                    onClick={handlePopUpOpen}>
                    <AddIcon/>
                </Fab>
            </Paper>
            <NewDateProposalDialog
                open={openPopUp}
                handleClose={handlePopUpClose}
                handleAdd={handleAdd}
                selectedStartDate={startDatePopUp}
                handleStartDateChange={updateStartDatePopUp}
                selectedEndDate={endDatePopUp}
                handleEndDateChange={updateEndDatePopUp}
                handleDayEvent={onSelectDayEvent}
            />
        </div>
    )
}

