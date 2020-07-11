import React, {Component} from 'react';
import { withStyles } from '@material-ui/core/styles';
import AppBar from "@material-ui/core/AppBar";
import clsx from "clsx";
import CssBaseline from "@material-ui/core/CssBaseline";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from '@material-ui/icons/Menu';
import Typography from "@material-ui/core/Typography";
import Badge from "@material-ui/core/Badge";
import NotificationsIcon from '@material-ui/icons/Notifications';
import ExitToAppRoundedIcon from '@material-ui/icons/ExitToAppRounded';
import Tooltip from "@material-ui/core/Tooltip";
import Drawer from "@material-ui/core/Drawer";
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import Divider from "@material-ui/core/Divider";
import List from "@material-ui/core/List";
import MainlistItem from "./MainlistItem";
import Avatar from "@material-ui/core/Avatar";
import {connect} from "react-redux";
import AccountCircleRoundedIcon from '@material-ui/icons/AccountCircleRounded';



const drawWidth = 200
const useStyles = theme =>({
    "@keyframes fadeAnimation": {
        from: {opacity: 0},
        to: {opacity: 1},
    },
    root:{
        display:'flex',
    },
    toolbar:{
        paddingRight:24,
    },
    appBar:{
        zIndex:theme.zIndex.drawer+1,
        transition:theme.transitions.create(['width','margin'],{
            easing:theme.transitions.easing.sharp,
            duration:500,
        })
    },
    appBarShift:{
        marginLeft:drawWidth,
        width: `calc(100% - ${drawWidth}px)`,
        transition: theme.transitions.create(['width','margin'],{
            easing: theme.transitions.easing.sharp,
            duration:500,
        })
    },
    menuButton:{
        marginRight: 36,
    },
    menuButtonHidden:{
        display: 'none'
    },
    title:{
        flexGrow:1
    },
    drawerPaper:{
        height:'100vh',
        backgroundColor:'#051622',
        color:'#fff',
        position:'fixed',
        whiteSpace:'nowrap',
        width: drawWidth,
        boxShadow: '0 16px 38px -12px rgba(0, 0, 0, 0.56), 0 4px 25px 0px rgba(0, 0, 0, 0.12), 0 8px 10px -5px rgba(0, 0, 0, 0.2)',
        transition:theme.transitions.create('width',{
            easing:theme.transitions.easing.sharp,
            duration:500,
        })
    },
    drawerPaperClose:{
        overflow:'hidden',
        transition:theme.transitions.create('width',{
            easing:theme.transitions.easing.sharp,
            duration:500,
        }),
        width:theme.spacing(7),
        [theme.breakpoints.up('sm')]:{
            width:theme.spacing(9)
        }
    },
    toolbarIcon:{
        display:'flex',
        alignItems:'center',
        justifyContent:'flex-end',
        padding:'0 8px',
        ...theme.mixins.toolbar
    },
    logo:{
        width:'100%',
        display:'flex',
        flexDirection:'column',
        alignItems: 'center',
        margin: '20px 0',
    },
    logoImage:{
        width: theme.spacing(10),
        height: theme.spacing(10),
        border:'1px solid white',
        marginBottom:10,
        transition:theme.transitions.create(['width','height'],{
            easing:theme.transitions.easing.sharp,
            duration:500
        })
    },
    logoImageClose:{
        width: theme.spacing(8),
        height: theme.spacing(8),
        border:'1px solid white',
        margin:'none',
        transition:theme.transitions.create(['width','height'],{
            easing:theme.transitions.easing.sharp,
            duration:500
        }),
        animation:"10s fadeAnimation"
    }
})
class Dashboard extends Component {
    constructor(props) {
        super(props);
        // this.state={
        //     open:true
        // }
        this.handleDrawerOpen = this.handleDrawerOpen.bind(this);
    }
    handleDrawerOpen (){
        // this.setState({
        //     open:!this.state.open
        // })
        this.props.getDrawerInf()
    }
    logOut = () =>{
        sessionStorage.removeItem('loginAcc')
        return this.props.getLog()
    }
    render() {
        const {classes} = this.props;
        return (
            <div className={classes.root}>
                <CssBaseline/>
                <AppBar color='inherit' className={clsx(classes.appBar,this.props.drawerOpen && classes.appBarShift)}>
                    <Toolbar className={classes.toolbar} >
                        <IconButton
                            edge='start'
                            color='inherit'
                            aria-label='open drawer'
                            onClick={this.handleDrawerOpen}
                            className={clsx(classes.menuButton,this.props.drawerOpen && classes.menuButtonHidden)}
                        >
                            <MenuIcon/>
                        </IconButton>
                        <AccountCircleRoundedIcon fontSize="large" color='secondary'/>
                        <Typography component='h1' variant='h6' noWrap className={classes.title}>
                            {this.props.login[0].username}
                        </Typography>
                        <Tooltip title='Notification' arrow>
                            <IconButton color='inherit'>
                                <Badge badgeContent={4} color='secondary'>
                                    <NotificationsIcon/>
                                </Badge>
                            </IconButton>
                        </Tooltip>
                        <Tooltip title='Logout'>
                            <IconButton color='inherit' onClick={this.logOut}>
                                <ExitToAppRoundedIcon/>
                            </IconButton>
                        </Tooltip>
                    </Toolbar>
                </AppBar>
                {/*end AppBar*/}
                <Drawer
                    variant='permanent'
                    open = {this.props.drawerOpen}
                    classes={{
                        paper:clsx(classes.drawerPaper,!this.props.drawerOpen && classes.drawerPaperClose)
                    }}
                >
                    <div className={classes.toolbarIcon}>
                        <IconButton color='inherit' onClick={this.handleDrawerOpen}>
                            <ChevronLeftIcon/>
                        </IconButton>
                    </div>
                    <Divider/>
                    <div className={classes.logo}>
                        <Avatar className={clsx(classes.logoImage,!this.props.drawerOpen && classes.logoImageClose)} alt='user avatar' src='/images/logo.jpg'/>
                        {this.props.drawerOpen ? <Typography style={{textTransform:'uppercase'}} component='h1' variant='h6'>{this.props.login[1].authority}</Typography>:''}
                    </div>
                    <Divider/>
                    <List>
                        <MainlistItem open={this.props.drawerOpen}/>
                    </List>
                </Drawer>

            </div>
        );
    }
}
const mapStateToProps = (state)=> {
    return {
        login: state.logAcc,
        drawerOpen: state.drawerOpen
    }
}
const mapDispatchToProps = (dispatch)=>{
    return{
        getLog:()=>dispatch({type:'LOG'}),
        getDrawerInf:()=>dispatch({type:'DRAWER'})
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(withStyles(useStyles)(Dashboard));