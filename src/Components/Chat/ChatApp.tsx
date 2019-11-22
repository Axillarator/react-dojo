import * as React from "react";
import {useState} from "react";
import ChatInput from "./ChatInput";

export default function ChatApp() {

    const [arrayOfMessages, updateArray] = useState<String[]>([]);
    const [currentMessage, updateMessage] = useState("");


    const handleSend = () => {
        let result = [...arrayOfMessages];
        result.push(currentMessage);
        updateArray(result);
        updateMessage("")
    };

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        updateMessage(event.target.value);
    };

    return (

        <div>
            {arrayOfMessages.map((element, index) => <p key={index}>{element}</p>)}
            <ChatInput value={currentMessage} handleChange={handleChange} handleSend={handleSend} />
        </div>

    )

}

