import React, {Component} from 'react';
import Dashboard from "../Dashboard/Dashboard";
import Tabbutton from "../tabbutton";

class Teacher extends Component {
    render() {
        return (
            <div>
                <Dashboard/>
                <Tabbutton/>
            </div>
        );
    }
}

export default Teacher;