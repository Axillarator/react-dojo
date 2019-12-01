import * as React from "react";
import {ChangeEventHandler, MouseEventHandler} from "react";
import {Avatar, Paper, Theme} from "@material-ui/core";
import {createStyles} from "@material-ui/styles";
import makeStyles from "@material-ui/styles/makeStyles";
import ChatInput from "./ChatInput";
import ChatMessage from "./ChatMessage";
import ChatOutputMenu from "./ChatOutputMenu";


interface Props {
    message: String
    time: String
    likes: number
    inputValue: String
    inputId: number
    editMode: boolean
    onDelete: MouseEventHandler
    onLike: MouseEventHandler
    onReply: MouseEventHandler
    handleSend: MouseEventHandler
    handleChange: ChangeEventHandler
}

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        wrapper: {
            display: "flex",
            maxWidth: 500
        },
        paper: {
            maxWidth: 500,
            margin: 5,
            paddingLeft: 10,
            paddingTop: 10,
            paddingRight: 10,
            display: "flex",
            flexGrow: 1
        },
        avatar: {
            padding: 10,
            margin: 5,
            flexGrow: 0
        },
        messageContainer: {
            display: "flex",
            flexGrow: 1,
            flexDirection: "column",
            width: "100%",
            overflow: "hidden"
        }
    })
);

export default function ChatOutputContainer(props: Props) {

    const classes = useStyles();

    return (
        <div className={classes.wrapper}>
            <Paper className={classes.paper}>
                <Avatar className={classes.avatar}>
                    A
                </Avatar>
                <div className={classes.messageContainer}>
                    <ChatInput inputValue={props.inputValue}
                               handleSend={props.handleSend}
                               handleChange={props.handleChange}
                               inputId={props.inputId}
                               editMode={props.editMode}/>
                    <ChatMessage message={props.message}
                                 editMode={props.editMode}/>
                    <ChatOutputMenu onLike={props.onLike}
                                    likes={props.likes}
                                    onDelete={props.onDelete}
                                    time={props.time}
                                    onReply={props.onReply}
                                    editMode={props.editMode}/>
                </div>
            </Paper>
        </div>
    );
};