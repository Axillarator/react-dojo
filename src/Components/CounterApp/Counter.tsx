import React, {MouseEventHandler} from 'react';
import Button from '@material-ui/core/Button';
import {createStyles, makeStyles, Theme} from "@material-ui/core";

interface Props {
    count: number
    resetCountToZero: MouseEventHandler
    createAdderFunction: (amount: number) => MouseEventHandler
    removeCounter: MouseEventHandler
    sign: number
    swapSign: MouseEventHandler
}

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        root: {
            padding: theme.spacing(1, 1),
        },
    }),
);

const Counter: React.FC<Props> = (props: Props) => {

    const classes = useStyles();

    const addOne = props.createAdderFunction(props.sign);
    const addFive = props.createAdderFunction(5 * props.sign);
    const addEight = props.createAdderFunction(8 * props.sign);

    return (
        <div className={classes.root}>
            <Button variant="contained" disabled >Value: {props.count}</Button>
            <Button onClick={props.resetCountToZero} variant="outlined" color="primary">Reset</Button>
            <Button onClick={addOne} variant="outlined" color="primary"> {props.sign > 0 ? "+" : ""}{props.sign}</Button>
            <Button onClick={addFive} variant="outlined" color="primary"> {props.sign > 0 ? "+" : ""}{props.sign * 5}</Button>
            <Button onClick={addEight} variant="outlined" color="primary"> {props.sign > 0 ? "+" : ""}{props.sign * 8}</Button>
            <Button onClick={props.swapSign} variant="contained" color="primary"> +/-</Button>
            <Button onClick={props.removeCounter} variant="contained" color="secondary"> delete</Button>
        </div>
    );
};

export default Counter;
