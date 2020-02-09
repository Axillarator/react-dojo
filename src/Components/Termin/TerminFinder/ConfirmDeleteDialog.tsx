import Dialog from "@material-ui/core/Dialog";
import DialogTitle from "@material-ui/core/DialogTitle";
import DialogContent from "@material-ui/core/DialogContent";
import DialogActions from "@material-ui/core/DialogActions";
import Button from "@material-ui/core/Button";
import * as React from "react";
import {MouseEventHandler} from "react";

interface Props {
    open: boolean
    content: string
    handleAbort: MouseEventHandler
    handleDelete: MouseEventHandler
}

export default function ConfirmDeleteDialog(props: Props) {
    return (
        <Dialog open={props.open} onClose={props.handleAbort} aria-labelledby="form-dialog-title">
            <DialogTitle id="form-dialog-title">Confirm Delete</DialogTitle>
            <DialogContent>
                {props.content}
            </DialogContent>
            <DialogActions>
                <Button onClick={props.handleAbort} color="primary">
                    cancel
                </Button>
                <Button onClick={props.handleDelete} color="primary">
                    ok
                </Button>
            </DialogActions>
        </Dialog>)
}