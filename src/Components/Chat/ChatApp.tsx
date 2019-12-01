import * as React from "react";
import {useState} from "react";
import {createStyles, makeStyles, Paper, Theme} from "@material-ui/core";
import ChatOutputContainer from "./ChatOutputContainer";

interface Message {
    currentContent: String
    time: String
    likes: number
    editMode: boolean
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
    const [arrayOfMessages, updateMessageHistory] = useState<Message[]>([{currentContent: "", time: getFormattedTime(), likes: 0, editMode: true}]);

    const handleSend = (indexToSend: number) => {
        return () => {
            const timeString: string = getFormattedTime();
            let result = [...arrayOfMessages];
            result[indexToSend].editMode = false;
            result[indexToSend].time = timeString;
            updateMessageHistory(result);
        };
    };

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        return () => {
            let result = [...arrayOfMessages];
            result[parseInt(event.target.name)].currentContent = event.target.value;
            console.log(event.target.name);
            console.log(event.target.value);
            updateMessageHistory(result);
        };
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
            result.splice(indexToReply + 1, 0, {currentContent: "", time: timeString, likes: 0, editMode: true});
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

