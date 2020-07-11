import React, {Component} from 'react';
import DashboardRoundedIcon from '@material-ui/icons/DashboardRounded';
import SupervisedUserCircleRoundedIcon from '@material-ui/icons/SupervisedUserCircleRounded';
import FaceRoundedIcon from '@material-ui/icons/FaceRounded';
import CastForEducationRoundedIcon from '@material-ui/icons/CastForEducationRounded';
import { withStyles } from '@material-ui/core/styles';
import DnsRoundedIcon from '@material-ui/icons/DnsRounded';
import SettingsRoundedIcon from '@material-ui/icons/SettingsRounded';
import clsx from "clsx";
import ListitemDetail from "./Listitem";

const list = [
    {
        name:'Dashboard',
        link: '/home',
        index:1,
        icon:<DashboardRoundedIcon/>
    },
    {
        name:'Teacher',
        link: '/teacher',
        index:2,
        icon:<SupervisedUserCircleRoundedIcon/>
    },
    {
        name:'Student',
        link: '/student',
        index:3,
        icon:<FaceRoundedIcon/>
    },
    {
        name:'Class',
        link: '/class',
        index:4,
        icon:<CastForEducationRoundedIcon/>
    },
    {
        name:'Institute',
        link: '/institute',
        index:5,
        icon:<DnsRoundedIcon/>
    },
    {
        name:'Setting',
        link: '/setting',
        index:6,
        icon: <SettingsRoundedIcon/>
    }
]
const showList =()=>(
    list.map((el,index)=> {
            return <ListitemDetail key={index} link={el.link} name={el.name} icon={el.icon}/>
        }
    )
)
const useStyles = theme =>({
    listitem:{
        height:400,
        display:'flex',
        flexDirection:'column',
        justifyContent:'space-around',
    },
    listitemClose:{
        height:500
    },
})
class MainlistItem extends Component {
    render() {
        const {classes} = this.props
        return (
            <div className={clsx(classes.listitem,!this.props.open && classes.listitemClose)}>
                {showList()}
            </div>
        );
    }
}

export default withStyles(useStyles) (MainlistItem);