import Dialog from "@material-ui/core/Dialog";
import DialogTitle from "@material-ui/core/DialogTitle";
import DialogContent from "@material-ui/core/DialogContent";
import DialogActions from "@material-ui/core/DialogActions";
import Button from "@material-ui/core/Button";
import * as React from "react";
import {MouseEventHandler} from "react";
import {Table} from "@material-ui/core";
import TableBody from "@material-ui/core/TableBody";
import TableRow from "@material-ui/core/TableRow";
import TableCell from "@material-ui/core/TableCell";

interface Result {
    user: string,
    statusCode: number,
    remark: string
}

interface Props {
    open: boolean
    date: string
    content: Result[]
    handleClose: MouseEventHandler
}

export default function ResultDialog(props: Props) {

    const getStatusSymbol = (statusCode: number) => {
        switch (statusCode) {
            case 0: return <TableCell align="right"> </TableCell>;
            case 1: return <TableCell align="right">&#10004;</TableCell>;
            case 2: return <TableCell align="right">&#8722;</TableCell>;
        }
    };

    return (
        <Dialog open={props.open} onClose={props.handleClose} aria-labelledby="form-dialog-title">
            <DialogTitle id="form-dialog-title">{props.date}</DialogTitle>
            <DialogContent>
                <Table size="small" aria-label="a dense table">
                    <TableBody>
                        {props.content.map(row => (
                            <TableRow key={row.user}>
                                <TableCell align="left">{row.user}</TableCell>
                                {getStatusSymbol(row.statusCode)}
                                <TableCell align="right">{row.remark}</TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </DialogContent>
            <DialogActions>
                <Button onClick={props.handleClose} color="primary">
                    ok
                </Button>
            </DialogActions>
        </Dialog>)
}