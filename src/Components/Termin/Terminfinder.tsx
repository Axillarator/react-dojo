import * as React from "react";
import {useState} from "react";
import {createStyles, makeStyles, Theme} from "@material-ui/core";
import {MaterialUiPickersDate} from "@material-ui/pickers/typings/date";
import moment from "moment";
import 'moment/locale/de';
import Fab from "@material-ui/core/Fab";
import AddIcon from '@material-ui/icons/Add';
import DateProposal from "./DateProposal";
import NewDateProposalDialog from "./NewDateProposalDialog";
import ConfirmDeleteDialog from "./ConfirmDeleteDialog";
import ResultDialog from "./ResultDialog";


const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        root: {
            padding: theme.spacing(1, 1),
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
    id: number
    status: Status[]
    deleteCandidate: boolean
    showDetails: boolean
    note: string
    messageVisible: boolean
    selectedStartDate: MaterialUiPickersDate
    selectedEndDate: MaterialUiPickersDate
    results: Result[]
}

interface Status {
    user: string
    statusCode: number
}

interface Result {
    user: string
    statusCode: number
    remark: string
}

export default function Terminfinder() {
    moment.locale('de');

    const classes = useStyles();

    const [arrayOfDateSuggestions, updateDateSuggestions] = useState<DateSuggestion[]>([]);

    const [openPopUp, setOpenPopUp] = useState<boolean>(false);
    const [startDatePopUp, updateStartDatePopUp] = useState<MaterialUiPickersDate>(moment());
    const [endDatePopUp, updateEndDatePopUp] = useState<MaterialUiPickersDate>(moment());
    const [dayEventPopUp, toggleDayEventPopUp] = useState<boolean>(false);

    const [startDatePickerIsOpen, updateStartDatePicker] = useState(false);
    const [endDatePickerIsOpen, updateEndDatePicker] = useState(false);

    const onToggleMessage = (indexToToggle: number) => {
        return () => {
            let result = [...arrayOfDateSuggestions];
            result[indexToToggle].messageVisible = !result[indexToToggle].messageVisible;
            updateDateSuggestions(result);
        };
    };

    const onSetInput = (event: React.ChangeEvent<HTMLInputElement>) => {
        let result = [...arrayOfDateSuggestions];
        result[parseInt(event.target.name)].note = event.target.value;
        updateDateSuggestions(result);
    };

    const onSubmit = (indexToSend: number) => {
        return () => {
            let result = [...arrayOfDateSuggestions];
            result[indexToSend].results[0].remark = result[indexToSend].note;
            result[indexToSend].messageVisible = !result[indexToSend].messageVisible;
            updateDateSuggestions(result);
        }
    };

    const handleStartDatePicker = () => {
        updateStartDatePicker(!startDatePickerIsOpen);
        if (dayEventPopUp) {
            updateEndDatePopUp(startDatePopUp);
        }
    };

    const handleEndDatePicker = () => {
        updateEndDatePicker(!endDatePickerIsOpen);
    };

    const handleDayEventToggle = () => {
        if (dayEventPopUp) {
            toggleDayEventPopUp(false);
        } else {
            updateEndDatePopUp(startDatePopUp);
            toggleDayEventPopUp(true);
        }
    };

    const onDelete = (indexToRemove: number) => {
        return () => {
            let result = [...arrayOfDateSuggestions];
            result[indexToRemove].deleteCandidate = true;
            updateDateSuggestions(result);
        }
    };

    const abortConfirmDelete = (indexToRemove: number) => {
        return () => {
            let result = [...arrayOfDateSuggestions];
            result[indexToRemove].deleteCandidate = false;
            updateDateSuggestions(result);
        }
    };

    const onConfirmDelete = (indexToRemove: number) => {
        return () => {
            let result = [...arrayOfDateSuggestions];
            updateDateSuggestions(result.filter((value, index) => index !== indexToRemove));
        };
    };

    const handleResultDialog = (index: number) => {
        return () => {
            let result = [...arrayOfDateSuggestions];
            result[index].showDetails = !result[index].showDetails;
            updateDateSuggestions(result);
        }
    };

    const handleCheck = (indexToCheck: number) => {
        return () => {
            let result = [...arrayOfDateSuggestions];
            result[indexToCheck].status[0].statusCode = (result[indexToCheck].status[0].statusCode + 1) % 3;
            result[indexToCheck].results[0].statusCode = result[indexToCheck].status[0].statusCode;
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
        if (!result.some(suggestion => suggestion['selectedStartDate'] === startDatePopUp && suggestion['selectedEndDate'] === endDatePopUp)) {
            result.push({
                id: result.length,
                status: [{
                    user: "A",
                    statusCode: 0
                }],
                deleteCandidate: false,
                showDetails: false,
                note: "",
                messageVisible: false,
                selectedStartDate: startDatePopUp,
                selectedEndDate: endDatePopUp,
                results: [{
                    user: "A",
                    remark: "",
                    statusCode: 0
                },
                    {
                        user: "B",
                        remark: "",
                        statusCode: 0
                    },
                    {
                        user: "G",
                        remark: "",
                        statusCode: 0
                    }]
            });
            updateDateSuggestions(result);
        }
    };
    const sortedArray = arrayOfDateSuggestions.sort(
        (a, b) => a.selectedStartDate!!.diff(b.selectedStartDate!!));

    return (
        <div className={classes.root}>
            {sortedArray.map((element, index) =>
                <div>
                    <DateProposal
                        key={index}
                        id={index}
                        onSendInput={onSubmit(index)}
                        check={element.status[0].statusCode}
                        handleCheck={handleCheck(index)}
                        selectedStartDate={element.selectedStartDate}
                        selectedEndDate={element.selectedEndDate}
                        onDelete={onDelete(index)}
                        handleResultDialog={handleResultDialog(index)}
                        inputValue={element.note}
                        onSetInput={onSetInput}
                        messageVisible={element.messageVisible}
                        onToggleMessage={onToggleMessage(index)}
                    />
                    <ResultDialog
                        key={index}
                        open={element.showDetails}
                        date={(element.selectedStartDate!! < element.selectedEndDate!!) ? element.selectedStartDate!!.format("dd. DD.MM.YY") + " - " + element.selectedEndDate!!.format("dd. DD.MM.YY") : element.selectedStartDate!!.format("dd. DD.MM.YY")}
                        content={element.results}
                        handleClose={handleResultDialog(index)}
                    />
                    <ConfirmDeleteDialog
                        key={index}
                        open={element.deleteCandidate}
                        content={"Terminvorschlag wirklich löschen? Bereits abgegebene Stimmen gehen verloren."}
                        handleAbort={abortConfirmDelete(index)}
                        handleDelete={onConfirmDelete(index)}
                    />
                </div>)}
            <Fab
                color="primary"
                aria-label="add"
                className={classes.fab}
                onClick={handlePopUpOpen}>
                <AddIcon/>
            </Fab>
            <NewDateProposalDialog
                open={openPopUp}
                handleClose={handlePopUpClose}
                handleAdd={handleAdd}
                selectedStartDate={startDatePopUp}
                handleStartDateChange={updateStartDatePopUp}
                startDatePickerIsOpen={startDatePickerIsOpen}
                handleStartDatePicker={handleStartDatePicker}
                selectedEndDate={endDatePopUp}
                handleEndDateChange={updateEndDatePopUp}
                endDatePickerIsOpen={endDatePickerIsOpen}
                handleEndDatePicker={handleEndDatePicker}
                handleDayEvent={handleDayEventToggle}
                dayEvent={dayEventPopUp}
            />
        </div>
    )
}

