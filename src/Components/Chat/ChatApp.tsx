import * as React from "react";
import {useState} from "react";
import ChatInput from "./ChatInput";
import ChatOutput from "./ChatOutput";
import {createStyles, makeStyles, Paper, Theme} from "@material-ui/core";

interface Message {
    content: String
    time: String
}

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        root: {
            padding: theme.spacing(3, 2),
        },
    }),
);

export default function ChatApp() {

    const classes = useStyles();
    const [arrayOfMessages, updateMessageHistory] = useState<Message[]>([]);
    const [currentMessage, updateMessage] = useState("");

    const handleSend = () => {
        const currentDate = new Date();
        const timeString: string = currentDate.getHours() + ":" + currentDate.getMinutes();

        let result = [...arrayOfMessages];
        result.push({content: currentMessage, time: timeString});
        updateMessageHistory(result);
        updateMessage("")
    };

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        updateMessage(event.target.value);
    };

    const onDelete = (indexToRemove: number) => {
        return () => {
            let result = [...arrayOfMessages];
            updateMessageHistory(result.filter((value, index) => index !== indexToRemove));
        };
    };

    return (

        <div>
            <Paper className={classes.root}>
                {arrayOfMessages.map((element, index) => <ChatOutput key={index} message={element.content}
                                                                     time={element.time}
                                                                     onDelete={onDelete(index)}/>)}
                <ChatInput key={"AG"} value={currentMessage} handleChange={handleChange} handleSend={handleSend}/>
            </Paper>
        </div>

    )

}

