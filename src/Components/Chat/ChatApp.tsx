import * as React from "react";
import {useState} from "react";
import ChatInput from "./ChatInput";
import ChatOutput from "./ChatOutput";
import {createStyles, makeStyles, Paper, Theme} from "@material-ui/core";

interface Message {
    content: String
    time: String
    likes: number
    reply: boolean
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
        result.push({content: currentMessage, time: timeString, likes: 0, reply: false});
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

    const onLike = (indexToLike: number) => {
        return () => {
            let result = [...arrayOfMessages];
            result[indexToLike].likes = result[indexToLike].likes + 1;
            updateMessageHistory(result)
        }
    };

    const onReply = (indexToReply: number) => {
        return () => {
            const currentDate = new Date();
            const timeString: string = currentDate.getHours() + ":" + currentDate.getMinutes();

            let result = [...arrayOfMessages];
            result.splice(indexToReply + 1, 0, {content: "reply to message", time: timeString, likes: 0, reply: true});
            updateMessageHistory(result)
        }
    };

    return (

        <div>
            <Paper className={classes.root}>
                {arrayOfMessages.map((element, index) => <ChatOutput key={index} message={element.content}
                                                                     time={element.time}
                                                                     onDelete={onDelete(index)}
                                                                     onLike={onLike(index)}
                                                                     likes={element.likes}
                                                                     onReply={onReply(index)}
                                                                     reply={element.reply}/>)}
                <ChatInput key={"AG"} value={currentMessage} handleChange={handleChange} handleSend={handleSend}/>
            </Paper>
        </div>

    )

}

