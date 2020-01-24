import React from "react";
import Form from "./multipleInputs";

export default function ParentForm() {

    function handleChange(evt: React.ChangeEvent<HTMLInputElement>) {
        const value = evt.target.value;
        const newState = [...state];
        newState[parseInt(evt.target.name)] = value;
        setState(newState);
    }

    const [state, setState] = React.useState<String[]>(["", ""]);

    return (<Form value={state} handleChange={handleChange}/>)
}