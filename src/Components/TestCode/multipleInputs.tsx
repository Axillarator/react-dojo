import React, {ChangeEventHandler} from "react";
import {TextField} from "@material-ui/core";

interface Props {
    handleChange: ChangeEventHandler
    value: String[]
}

export default function Form(props: Props) {

    return (
        <form>
            <label>
                First name
                <TextField
                    type="text"
                    name="0"
                    value={props.value[0]}
                    onChange={props.handleChange}
                />
            </label>
            <label>
                Last name
                <TextField
                    type="text"
                    name="1"
                    value={props.value[1]}
                    onChange={props.handleChange}
                />
            </label>
        </form>
    );
}