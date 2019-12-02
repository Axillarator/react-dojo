import {ChangeEventHandler, default as React, MouseEventHandler} from "react";
import {createStyles, makeStyles, TextField, Theme} from "@material-ui/core";
import Button from "@material-ui/core/Button";


interface Props {
    inputValue: string
    inputId: number
    handleSend: MouseEventHandler
    handleChange: ChangeEventHandler
    editMode: boolean
    onClick: MouseEventHandler
    count: number
}



export default function Poll(props: Props) {

    const useStyle = makeStyles((theme: Theme) =>
        createStyles({

            poll: {
                width: "100%",
                padding: 3
            }
        })
    );

    const classes = useStyle();

    const catchEnter = (event: any) => {
        if (event.key === 'Enter') {
            props.handleSend(event);
            event.preventDefault();
        }
    };

    const editPoll = <TextField className={classes.poll}
                                placeholder={"Antwort" + props.inputId.toString()}
                                variant="outlined"
                                name={props.inputId.toString()}
                                value={props.inputValue}
                                onChange={props.handleChange}
                                onKeyPress={catchEnter}
    />;

    const savedPoll = <Button className={classes.poll} onClick={props.onClick}
                              variant="contained"> {props.inputValue + " " + props.count}</Button>;

    return props.editMode ? editPoll : savedPoll;
};
