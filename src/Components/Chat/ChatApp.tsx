import * as React from "react";
import {useState} from "react";
import {createStyles, makeStyles, Paper, Theme} from "@material-ui/core";
import ChatOutputContainer from "./ChatOutputContainer";

interface Message {
    currentContent: String
    time: String
    likes: number
    initialMessage: boolean
    editMode: boolean
    editTime: String
}

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        root: {
            padding: theme.spacing(3, 2),
        },
    }),
);

function getFormattedTime(): string {
    const currentDate = new Date();
    const hours = currentDate.getHours();
    let minutes = currentDate.getMinutes();

    if (minutes < 10) {
        const formattedMinutes = "0" + minutes;
        return hours + ":" + formattedMinutes;
    }
    return hours + ":" + minutes;
}

export default function ChatApp() {

    const classes = useStyles();
    const [arrayOfMessages, updateMessageHistory] = useState<Message[]>([{currentContent: "", initialMessage: true, time: getFormattedTime(), likes: 0, editMode: true, editTime: getFormattedTime()}]);

    const handleSend = (indexToSend: number) => {
        return () => {
            const timeString: string = getFormattedTime();
            let result = [...arrayOfMessages];
            result[indexToSend].editMode = false;
            if ( result[indexToSend].initialMessage ){
                result[indexToSend].time = timeString;
                result[indexToSend].editTime = timeString;
            } else {
                result[indexToSend].editTime = timeString;
            }
            updateMessageHistory(result);
        };
    };

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        let result = [...arrayOfMessages];
        result[parseInt(event.target.name)].currentContent = event.target.value;
        updateMessageHistory(result);
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
            updateMessageHistory(result);
        }
    };

    const onReply = (indexToReply: number) => {
        return () => {
            const timeString: string = getFormattedTime();
            let result = [...arrayOfMessages];
            result.splice(indexToReply + 1, 0, {currentContent: "", initialMessage: true, time: timeString, likes: 0, editMode: true, editTime: timeString});
            updateMessageHistory(result);
        }
    };

    const onEdit = (indexToEdit: number) => {
        return () => {
            const timeString: string = getFormattedTime();
            let result = [...arrayOfMessages];
            result[indexToEdit].editMode = true;
            result[indexToEdit].initialMessage = false;
            result[indexToEdit].editTime = timeString;
            updateMessageHistory(result);
        }
    };

    return (
        <div>
            <Paper className={classes.root}>
                {arrayOfMessages.map((element, index) => <ChatOutputContainer
                    key={index}
                    message={element.currentContent}
                    time={element.time}
                    onDelete={onDelete(index)}
                    onEdit={onEdit(index)}
                    editTime={element.editTime}
                    onLike={onLike(index)}
                    likes={element.likes}
                    inputValue={element.currentContent}
                    inputId={index}
                    handleChange={handleChange}
                    handleSend={handleSend(index)}
                    onReply={onReply(index)}
                    editMode={element.editMode}/>)}
            </Paper>
        </div>

    )

}

