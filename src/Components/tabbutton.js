import React, {Component} from 'react';
import {withStyles} from "@material-ui/core/styles";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import Box from "@material-ui/core/Box";
import Tableshow from "./Showdata/Table";
import ContainerForm from "./ContainerForm";
import AddNew from "./Addnew/AddNew";

const drawWidth = 240
function a11yProps(index) {
    return {
        id: `scrollable-force-tab-${index}`,
        'aria-controls': `scrollable-force-tabpanel-${index}`,
    };
}
function TabPanel(props) {
    const { children, value, index, ...other } = props;
    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`scrollable-force-tabpanel-${index}`}
            aria-labelledby={`scrollable-force-tab-${index}`}
            {...other}
        >
            {value === index && (
                <Box p={3}>
                    {children}
                </Box>
            )}
        </div>
    );
}
const useStyles = theme=>({
    content: {
        flexGrow: 1,
        backgroundColor: theme.palette.background.paper,
        marginLeft:drawWidth
    },
    appBarSpacer: theme.mixins.toolbar,
    container: {
        paddingTop: theme.spacing(10),
        paddingBottom: theme.spacing(4),
    },
})
class Tabbutton extends Component {
    constructor(props) {
        super(props);
        this.state=({
            value:0
        })
    }
    handleChange = (e,newValue)=>(
        this.setState({value:newValue})
    )
    render() {
        const {classes} = this.props;
        return (
            <ContainerForm>
                <Tabs
                    value={this.state.value}
                    indicatorColor="secondary"
                    textColor="primary"
                    onChange={this.handleChange}
                >
                    <Tab label="TEACHER" {...a11yProps(0)}/>
                    <Tab label="ADD NEW TEACHER" {...a11yProps(1)}/>
                    <Tab label="ADD CLASS FOR TEACHER"  {...a11yProps(2)}/>
                </Tabs>
                <TabPanel value={this.state.value}  index={0}>
                    <Tableshow/>
                </TabPanel>
                <TabPanel value={this.state.value} index={1}>
                   <AddNew/>
                </TabPanel>
                <TabPanel value={this.state.value}  index={2}>
                    Add Class For Teacher
                </TabPanel>
            </ContainerForm>
        );
    }
}
export default withStyles(useStyles)(Tabbutton);
