import {createStyles, makeStyles, Theme} from "@material-ui/core";
import moment from "moment";
import * as React from "react";
import {useState} from "react";
import Button from "@material-ui/core/Button";
import Step from "@material-ui/core/Step";
import StepLabel from "@material-ui/core/StepLabel";
import EventIcon from '@material-ui/icons/Event';
import StepContent from "@material-ui/core/StepContent";
import Stepper from "@material-ui/core/Stepper";
import {MaterialUiPickersDate} from "@material-ui/pickers/typings/date";
import EventDateMenu from "./EventDateMenu";
import EditDateOverviewDialog from "./EditDateOverviewDialog";

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        root: {
            padding: theme.spacing(1, 1),
        }
    }),
);

interface EventDate {
    startDate: MaterialUiPickersDate
    startDescription: string
    endDate: MaterialUiPickersDate
    endDescription: string
}


export default function DateOverview() {
    moment.locale('de');
    const classes = useStyles();

    const [dateExists, setDateExists] = useState<boolean>(false);
    const [showEditDateDialog, toggleShowEditDateDialog] = useState<boolean>(false);
    const [eventDate, setEventDate] = useState<EventDate>({
        startDate: moment(),
        startDescription: "",
        endDate: moment(),
        endDescription: ""
    });
    const [menuAnchorElement, setMenuAnchorElement] = React.useState<null | HTMLElement>(null);

    const [startDatePopUp, updateStartDatePopUp] = useState<MaterialUiPickersDate>(moment());
    const [endDatePopUp, updateEndDatePopUp] = useState<MaterialUiPickersDate>(moment());
    const [startDescriptionPopUp, setStartDescriptionPopUp] = useState<string>("");
    const [endDescriptionPopUp, setEndDescriptionPopUp] = useState<string>("");

    const onSetStartDateDescriptionInput = (event: React.ChangeEvent<HTMLInputElement>) => {
        setStartDescriptionPopUp(event.target.value);
    };

    const onSetEndDateDescriptionInput = (event: React.ChangeEvent<HTMLInputElement>) => {
        setEndDescriptionPopUp(event.target.value);
    };

    const [openStartDatePicker, updateStartDatePicker] = useState(false);
    const [openEndDatePicker, updateEndDatePicker] = useState(false);

    const handleMenuClose = () => {
        setMenuAnchorElement(null);
    };
    const handleMenuOpen = (event: React.MouseEvent<HTMLButtonElement>) => {
        return (
            setMenuAnchorElement(event.currentTarget)
        );
    };

    const handleClickEdit = () => {
        toggleShowEditDateDialog(true);
        setMenuAnchorElement(null);
    };

    const handleClickReset = () => {
        setDateExists(false);
        setMenuAnchorElement(null);
    };

    const handleSetEventDate = () => {
        setDateExists(true);
        toggleShowEditDateDialog(false);
        const result = {...eventDate};
        result.startDate = startDatePopUp;
        result.startDescription = startDescriptionPopUp;
        result.endDate = endDatePopUp;
        result.endDescription = endDescriptionPopUp;
        setEventDate(result);
    };


    return (
        <div className={classes.root}>
            {!dateExists ?
                <div>
                    Es steht noch kein Termin fest.
                    <br/>
                    <Button
                        variant="outlined"
                        onClick={() => toggleShowEditDateDialog(true)}>
                        Termin festlegen
                    </Button>
                </div> :
                <div>
                    <EventDateMenu
                        anchorElement={menuAnchorElement}
                        handleOpen={handleMenuOpen}
                        handleClose={handleMenuClose}
                        onClickEdit={handleClickEdit}
                        onClickReset={handleClickReset}
                    />
                    <Stepper orientation="vertical">
                        <Step active={true}>
                            <StepLabel StepIconComponent={EventIcon}>
                                Start: {eventDate.startDate!!.format("dd. DD.MM.YYYY")}
                            </StepLabel>
                            <StepContent>
                                {eventDate.startDescription}
                            </StepContent>
                        </Step>
                        <Step active={true}>
                            <StepLabel StepIconComponent={EventIcon}>
                                End: {eventDate.endDate!!.format("dd. DD.MM.YYYY")}
                            </StepLabel>
                            <StepContent>
                                {eventDate.endDescription}
                            </StepContent>
                        </Step>
                    </Stepper>

                </div>}
                <EditDateOverviewDialog
                    open={showEditDateDialog}
                    handleClose={() => toggleShowEditDateDialog(false)}
                    handleOK={handleSetEventDate}
                    selectedStartDate={startDatePopUp}
                    handleStartDateChange={updateStartDatePopUp}
                    startDatePickerIsOpen={openStartDatePicker}
                    handleStartDatePicker={() => {
                        updateStartDatePicker(!openStartDatePicker)
                    }}
                    selectedEndDate={endDatePopUp}
                    handleEndDateChange={updateEndDatePopUp}
                    endDatePickerIsOpen={openEndDatePicker}
                    handleEndDatePicker={() => {
                        updateEndDatePicker(!openEndDatePicker)
                    }}
                    inputValueStartDateDescription={startDescriptionPopUp}
                    handleInputValueStartDateChange={onSetStartDateDescriptionInput}
                    inputValueEndDateDescription={endDescriptionPopUp}
                    handleInputValueEndDateChange={onSetEndDateDescriptionInput}
                />
        </div>
    )
};
