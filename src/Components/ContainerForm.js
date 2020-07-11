import React, {Component} from 'react';
import {withStyles} from "@material-ui/core/styles";
import CssBaseline from "@material-ui/core/CssBaseline";
import Container from "@material-ui/core/Container";
import {compose} from "redux";
import {connect} from "react-redux";
import clsx from "clsx";

const drawWidth = 200
const useStyles = theme=>({
    contentOpen: {
        flexGrow: 1,
        backgroundColor: theme.palette.background.paper,
        marginLeft:drawWidth,
        transition:theme.transitions.create(['width','margin'],{
            easing:theme.transitions.easing.sharp,
            duration:500,
        })
    },
    contentClose:{
        marginLeft:60,
        transition:theme.transitions.create(['width','margin'],{
            easing:theme.transitions.easing.sharp,
            duration:500,
        })
    },
    appBarSpacer: theme.mixins.toolbar,
    container: {
        paddingTop: theme.spacing(10),
        paddingBottom: theme.spacing(4),
    },
})
class ContainerForm extends Component {

    render() {
        const {classes,children} = this.props;
        return (
            <main className={clsx(classes.contentOpen,!this.props.drawerOpen && classes.contentClose)}>
                <CssBaseline/>
                <div  className={classes.appBarSpacer}>
                    <Container className={classes.container}>
                        {children}
                    </Container>
                </div>
            </main>

        );
    }
}
const mapStateToProps = (state)=> {
    return {
        drawerOpen: state.drawerOpen
    }
}
export default compose(connect(mapStateToProps),withStyles(useStyles))(ContainerForm)
