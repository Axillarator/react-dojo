import * as React from "react";
import Chip from '@material-ui/core/Chip';
import PersonIcon from '@material-ui/icons/Person';

interface Props {
    message: String
    time: String
}

export default function ChatOutput(props: Props) {

    return (
        <div>
            <Chip
                variant="outlined"
                icon={<PersonIcon/>}
                label={[props.message, " ", props.time]}
            />
        </div>
    )
}