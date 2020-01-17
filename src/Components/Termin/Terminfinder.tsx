import * as React from "react";
import {useState} from "react";
import {createStyles, makeStyles, Paper, Theme} from "@material-ui/core";
import {DatePicker, MuiPickersUtilsProvider} from "@material-ui/pickers";
import MomentUtils from "@date-io/moment";
import Checkbox from "@material-ui/core/Checkbox";
import {MaterialUiPickersDate} from "@material-ui/pickers/typings/date";
import moment from "moment";


const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        root: {
            padding: theme.spacing(3, 2),
        },
    }),
);

export default function Terminfinder() {

    const classes = useStyles();
    const [date, setDate] = useState<MaterialUiPickersDate>(moment());
    const [check, toggleCheck] = useState<boolean>(false);


    const handleCheck = (event: React.ChangeEvent<HTMLInputElement>) => {
        toggleCheck(event.target.checked);
    };

    return (
        <div>
            <Paper className={classes.root}>
                <MuiPickersUtilsProvider utils={MomentUtils}>
                    <DatePicker
                        onChange={(date) => setDate(date)}
                        value={date}
                    />
                </MuiPickersUtilsProvider>
                <Checkbox
                    checked={check}
                    onChange={handleCheck}
                    value="primary"
                    inputProps={{'aria-label': 'primary checkbox'}}
                />
            </Paper>
        </div>

    )

}

