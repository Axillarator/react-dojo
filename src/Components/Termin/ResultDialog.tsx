import Dialog from "@material-ui/core/Dialog";
import DialogTitle from "@material-ui/core/DialogTitle";
import DialogContent from "@material-ui/core/DialogContent";
import DialogActions from "@material-ui/core/DialogActions";
import Button from "@material-ui/core/Button";
import * as React from "react";
import {MouseEventHandler} from "react";

interface Result {

}

interface Props {
    open: boolean
    date: string
    content: string
    handleClose: MouseEventHandler
}

export default function ResultDialog(props: Props) {
    return (
        <Dialog open={props.open} onClose={props.handleClose} aria-labelledby="form-dialog-title">
            <DialogTitle id="form-dialog-title">{props.date}</DialogTitle>
            <DialogContent>
                {props.content}
            </DialogContent>
            <DialogActions>
                <Button onClick={props.handleClose} color="primary">
                    ok
                </Button>
            </DialogActions>
        </Dialog>)
}