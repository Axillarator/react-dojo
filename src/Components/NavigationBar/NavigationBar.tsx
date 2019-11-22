import React from 'react';
import {makeStyles, Theme} from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import CounterApp from "../CounterApp/CounterApp";

interface TabPanelProps {
    children?: React.ReactNode;
    index: any;
    value: any;
}

function TabPanel(props: TabPanelProps) {
    const {children, value, index} = props;

    return (
        <Typography
            component="div"
            role="tabpanel"
            hidden={value !== index}
            id={index}>
            <Box padding={2}>
                {children}
            </Box>
        </Typography>
    );
}

const useStyles = makeStyles((theme: Theme) => ({
    root: {
        flexGrow: 1,
        backgroundColor: theme.palette.background.paper,
    },
}));

export default function NavigationBar() {
    const classes = useStyles();
    const [tabIndex, setTabIndex] = React.useState(0);

    const handleIndexChange = (event: React.ChangeEvent<{}>, newIndex: number) => {
        setTabIndex(newIndex);
    };

    return (
        <div className={classes.root}>
            <AppBar position="static">
                <Tabs value={tabIndex} onChange={handleIndexChange}>
                    <Tab label="CounterApp"/>
                    <Tab label="Item Two"/>
                    <Tab label="Item Three"/>
                </Tabs>
            </AppBar>
            <TabPanel value={tabIndex} index={0}>
                <CounterApp/>
            </TabPanel>
            <TabPanel value={tabIndex} index={1}>
                Item Two
            </TabPanel>
            <TabPanel value={tabIndex} index={2}>
                Item Three
            </TabPanel>
        </div>
    );
}