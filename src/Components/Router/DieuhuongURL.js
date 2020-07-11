import React, {Component} from 'react';
import Login from "../Login/Login";
import {Switch, Route, Redirect} from "react-router-dom";
import {connect} from "react-redux";
import Teacher from "../Teaher/Teacher";
import Student from "../Student/Student";
import Home from "../Home/Home";

class Url extends Component {
    render() {
        return (
            <Switch>
                <Route exact path="/">
                    {this.props.login.length>0 ? <Redirect to="/home" /> : <Login />}
                </Route>
                <Route path="/home">
                    {this.props.login.length===0 ? <Redirect to="/" /> : <Home />}
                </Route>
                <Route path="/teacher">
                    {this.props.login.length===0 ? <Redirect to="/" /> : <Teacher/>}
                </Route><Route path="/student">
                    {this.props.login.length===0 ? <Redirect to="/" /> : <Student/>}
                </Route>

            </Switch>
        );
    }
}
const mapStateToProps = (state)=> {
    return {
        login: state.logAcc
    }
}
export default connect(mapStateToProps) (Url);
