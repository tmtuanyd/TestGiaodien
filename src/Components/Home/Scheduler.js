import React, {Component} from 'react';
import { ViewState } from '@devexpress/dx-react-scheduler';
import {Scheduler, DayView, Appointments,} from '@devexpress/dx-react-scheduler-material-ui';
import ContainerForm from "../ContainerForm";
import Grid from "@material-ui/core/Grid";
import { withStyles } from '@material-ui/core/styles';
import {cardDetail} from "./CardDetail";
import CardHome from "./CardHome";

const currentDate = new Date();
const schedulerData = [
    { startDate: '2020-07-12T09:45', endDate: '2020-07-12T11:00', title: 'Meeting' },
    { startDate: '2020-07-12T12:00', endDate: '2020-07-12T13:30', title: 'Meeting' },
];
const useStyles = theme=>({
    root: {
        // flexGrow: 1,
        margin:'20px 0'
    },
})
class SchedulerInfo extends Component {

    render() {
        const {classes} = this.props;
        return (
            <ContainerForm>
                <Grid container justify='center' spacing={3} className={classes.root}>
                    {cardDetail.map((el)=>(
                        <CardHome key={el.name} background={el.background} color={el.color} name={el.name} number={el.number} icon={el.icon}/>
                    ))}
                </Grid>
                <Scheduler
                    data={schedulerData}
                >
                    <ViewState
                        currentDate={currentDate}
                    />
                    <DayView
                        startDayHour={9}
                        endDayHour={18}
                    />
                    <Appointments />
                </Scheduler>
            </ContainerForm>
        );
    }
}
export default withStyles(useStyles)(SchedulerInfo);