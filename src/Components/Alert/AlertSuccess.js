import React, {Component} from 'react';
import Snackbar from "@material-ui/core/Snackbar";
import AlertTitle from "@material-ui/lab/AlertTitle";
import Alert from "@material-ui/lab/Alert";


class AlertSuccess extends Component {
    constructor(props) {
        super(props);
        this.state = {
            props: {
                anchorOrigin:{
                    vertical: 'top',
                    horizontal: 'right',
                },
                autoHideDuration:3000
            },
            alertProps: {
                severity:this.props.type,
                variant:"filled"
            }
        };
    }
    render() {

        return (
            <Snackbar
                open={this.props.alertSu}
                {...this.state.props}
                onClose={this.props.offAlert}
            >
                <Alert {...this.state.alertProps} onClose={this.props.offAlert}>
                    <AlertTitle>{this.props.title}</AlertTitle>
                    {this.props.message}
                </Alert>
            </Snackbar>
        );
    }
}
export default  AlertSuccess;
