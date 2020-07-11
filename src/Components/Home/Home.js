import React, {Component} from 'react';
import Dashboard from "../Dashboard/Dashboard";
import SchedulerInfo from "./Scheduler";

class Home extends Component {
    render() {
        return (
            <div>
                <Dashboard/>
                <SchedulerInfo/>
            </div>
        );
    }
}

export default Home;