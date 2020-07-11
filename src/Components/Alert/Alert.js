import React, {Component} from 'react';
import Snackbar from "@material-ui/core/Snackbar";
import AlertTitle from "@material-ui/lab/AlertTitle";
import Alert from "@material-ui/lab/Alert";


class Alertinfo extends Component {
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
    // handleClose = () => {
    //     this.props.getAlertF(false)
    // };
    render() {

        return (
         <Snackbar
             open={this.props.alertAp}
            {...this.state.props}
             onClose={this.props.offAlert}
        >
             {/*{console.log(this.props.alertAp)}*/}
            <Alert {...this.state.alertProps} onClose={this.props.offAlert}>
                <AlertTitle>{this.props.title}</AlertTitle>
                {this.props.message}
            </Alert>
        </Snackbar>
        );
    }
}
// const mapStateToProps = (state,ownProps)=>{
//     return {
//         getAlert:state.getAlert
//     }
// }
// const mapDispatchToProps = (dispatch,ownProps)=>{
//     return{
//         getAlertF:(alertInfo)=>{dispatch({type:'ALERT',alertInfo})}
//     }
// }
export default  Alertinfo;
