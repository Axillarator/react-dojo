import * as React from "react";
import {MouseEventHandler} from "react";
import IconButton from "@material-ui/core/IconButton";
import CheckBoxOutlineBlankIcon from '@material-ui/icons/CheckBoxOutlineBlank';
import CheckBoxIcon from '@material-ui/icons/CheckBox';
import IndeterminateCheckBoxIcon from '@material-ui/icons/IndeterminateCheckBox';
import {createStyles, makeStyles, Theme} from "@material-ui/core";

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        accept: {
            color: 'green',
        },
        reject: {
            color: 'red',
        },
    }),
);

interface Props {
    check: number
    onClick: MouseEventHandler
}

export default function Vote(props: Props) {

    const classes = useStyles();

    if (props.check === 0) {
        return (
            <IconButton aria-label="Undecided" onClick={props.onClick}>
                <CheckBoxOutlineBlankIcon/>
            </IconButton>
        )
    }
    if (props.check === 1) {
        return (
            <IconButton aria-label="Yes" onClick={props.onClick}>
                <CheckBoxIcon
                    className={classes.accept}
                />
            </IconButton>
        )
    }
    if (props.check === 2) {
        return (
            <IconButton aria-label="No" onClick={props.onClick}>
                <IndeterminateCheckBoxIcon
                    className={classes.reject}
                />
            </IconButton>
        )
    } else {
        return (
            <div/>
        )
    }
}