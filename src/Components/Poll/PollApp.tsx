import * as React from "react";
import {useState} from "react";
import {Paper, Theme} from "@material-ui/core";
import {createStyles} from "@material-ui/styles";
import makeStyles from "@material-ui/styles/makeStyles/makeStyles";
import Button from "@material-ui/core/Button";
import Poll from "./Poll";

interface iPoll {
    content: string
    count: number
    editMode: boolean
}

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        paper: {
            maxWidth: 500,
            margin: 5,
            paddingLeft: 10,
            paddingTop: 10,
            paddingRight: 10,
            display: "flex",
            flexDirection: "column"
        },
        button: {
            width: "25%"
        }
    }));

export default function PollApp() {

    const classes = useStyles();
    const [arrayOfPolls, updatePolls] = useState<iPoll[]>([{content: "", count: 0, editMode: true}, {
        content: "",
        count: 0,
        editMode: true
    }, {content: "", count: 0, editMode: true}]);


    const handleSend = (index: number) => {
        return () => {
            let result = [...arrayOfPolls];
            result[index].editMode = false;
        }
    };

    const onClick = (indexClicked: number) => {
        return () => {
            let result = [...arrayOfPolls];
            result[indexClicked].count += 1;
            updatePolls(result);
        }
    };


    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        let result = [...arrayOfPolls];
        result[parseInt(event.target.name)].content = event.target.value;
        updatePolls(result);
    };

    const handleSave = () => {
        let result = [...arrayOfPolls];
        result.forEach((value) => value.editMode = false);
        updatePolls(result);
    };


    return (
        <div>
            <Paper className={classes.paper}>
                {arrayOfPolls.map((element, index) =>
                    <Poll inputValue={element.content}
                          editMode={element.editMode}
                          onClick={onClick(index)}
                          handleSend={handleSend(index)}
                          count={element.count}
                          handleChange={handleChange}
                          inputId={index}/>)}

                <Button className={classes.button} onClick={handleSave} variant="contained"> save</Button>
            </Paper>
        </div>
    )
};
